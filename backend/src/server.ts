import express, { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Fetch environment variables and ensure they are available
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
if (!CLIENT_ID) {
  throw new Error("DISCORD_CLIENT_ID is missing in the environment variables");
}

const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
if (!CLIENT_SECRET) {
  throw new Error("DISCORD_CLIENT_SECRET is missing in the environment variables");
}

const REDIRECT_URI = process.env.REDIRECT_URI;
if (!REDIRECT_URI) {
  throw new Error("REDIRECT_URI is missing in the environment variables");
}

// Middleware to enable CORS
app.use(cors());

// Route to redirect users to Discord login
app.get("/auth/discord", (_req: Request, res: Response) => {
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20email`;
  res.redirect(discordAuthUrl);
});

// Route to handle the OAuth callback
app.get("/auth/callback", async (req: Request<{}, {}, {}, { code?: string }>, res: Response) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).json({ error: "No authorization code provided" });
  }

  try {
    // Exchange code for access token
    const tokenRes = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams({
        client_id: CLIENT_ID!,
        client_secret: CLIENT_SECRET!,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI!,
      }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const accessToken = tokenRes.data.access_token;

    // Get user data from Discord API
    const userRes = await axios.get("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    res.json(userRes.data);
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
