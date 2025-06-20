import React, { useEffect, useState } from "react";
import api from "../../api";
import LeftBar from "../../components/layout/LeftBar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    api.get("/orders").then(res => setOrders(res.data));
  }, []);
  return (
    <div className="flex min-h-screen">
      <LeftBar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 font-amaranth">Orders</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer_name}</td>
                  <td>{order.status}</td>
                  <td>${order.total}</td>
                  <td>{order.orderDate?.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Orders;