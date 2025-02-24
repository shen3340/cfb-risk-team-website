import React from "react";

interface AdminProps {
  orders?: any[];
  totals?: any;
}

const Admin: React.FC<AdminProps> = ({ orders, totals }) => {
  return (
    <header>
      <div className="logo">
        <img src="team_logo.png" alt="Logo" />
      </div>
      <p>
        <a href="/">Home</a> | <a href="/admin">Admin</a> | <a href="/admin/territories">Territories</a>
      </p>

      <div id="orders-container">
        {orders && orders.length > 0 ? (
          <>
            <table id="orders">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Players</th>
                  <th>Quota</th>
                  <th>Assigned<br />Stars</th>
                  <th>Quota %</th>
                  <th>Total<br />Territories</th>
                  <th>Completed<br />Territories</th>
                  <th>Completed %</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.tier}</td>
                    <td>{order.nplayers}</td>
                    <td>{order.quota}</td>
                    <td>{order.assigned}</td>
                    <td>{order.display_pct}</td>
                    <td>{order.nterritories}</td>
                    <td>{order.ncompleted}</td>
                    <td>{order.completed_pct}</td>
                  </tr>
                ))}
              </tbody>
              {totals && (
                <tfoot>
                  <tr>
                    <td colSpan={2}>Totals</td>
                    <td>{totals.nplayers}</td>
                    <td>{totals.quota}</td>
                    <td>{totals.assigned}</td>
                    <td>{totals.display_pct}</td>
                    <td>{totals.nterritories}</td>
                    <td>{totals.ncompleted}</td>
                    <td>{totals.completed_pct}</td>
                  </tr>
                </tfoot>
              )}
            </table>

            <table id="orders">
              <thead>
                <tr>
                  <th>Territory</th>
                  <th>Tier</th>
                  <th>Quota</th>
                  <th>Assigned Stars</th>
                  <th>Percentage Complete</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.territory}</td>
                    <td>{order.tier}</td>
                    <td>{order.quota}</td>
                    <td>{order.assigned}</td>
                    <td>{order.display_pct}</td>
                  </tr>
                ))}
              </tbody>
              {totals && (
                <tfoot>
                  <tr>
                    <td colSpan={2}>Totals</td>
                    <td>{totals.quota}</td>
                    <td>{totals.assigned}</td>
                    <td>{totals.display_pct}</td>
                  </tr>
                </tfoot>
              )}
            </table>
          </>
        ) : (
          <p>Orders don't seem to be loaded yet.</p>
        )}
      </div>
    </header>
  );
};

export default Admin;
