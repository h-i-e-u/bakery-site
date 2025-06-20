import React, { useEffect, useState } from "react";
import api from "../../api";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    api.get("/users").then(res => setCustomers(res.data));
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 font-amaranth">Customers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name || user.customer_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Customers;