import { useEffect, useState } from "react";
import api from "../../api";
import LeftBar from "../../components/layout/LeftBar";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get("/orders").then((res) => {
      const orders = res.data.results || res;
      const uniqueMap = new Map();
      orders.forEach((order) => {
        const key = (order.customer_name || "") + "|" + (order.email || "");
        if (!uniqueMap.has(key)) {
          uniqueMap.set(key, {
            id: order.id,
            name: order.customer_name,
            email: order.email,
            phone: order.phone,
            count: 1,
          });
        } else {
          uniqueMap.get(key).count += 1;
        }
      });
      const uniqueCustomers = Array.from(uniqueMap.values()).sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      );
      setCustomers(uniqueCustomers);
    });
  }, []);

  return (
    <div className="flex min-h-screen">
      <LeftBar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 font-amaranth">Customers</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Order Count</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((user) => (
                <tr key={user.id + user.email}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone || "N/A"}</td>
                  <td>{user.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Customers;
