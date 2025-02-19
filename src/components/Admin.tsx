import React from "react";

interface Totals {
  nplayers: number;
  quota: number;
  assigned: number;
  display_pct: string;
  nterritories: number;
  ncompleted: number;
  completed_pct: string;
}

interface AdminProps {
  totals?: Totals;
}

const Admin: React.FC<AdminProps> = () => {

  return (
    <div>
      <h1>Admin</h1>
      
      <h1> totals </h1>
                    
    </div>
  );
};

export default Admin;
