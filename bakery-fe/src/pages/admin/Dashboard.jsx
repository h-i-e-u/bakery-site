import { useState, useEffect } from "react";
import api from "../../api";
import LeftBar from "../../components/layout/LeftBar";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch data from API or context here
  useEffect(() => {
    api.get("/orders").then((res) => setOrders(res.data));
    api.get("/items").then((res) => setProducts(res.data));
  }, []);

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalProducts = products.length;

  // recentOrders is the last 5 orders sorted by orderDate
  const recentOrders = [...orders]
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    .slice(0, 5);

  return (
    <div className="flex min-h-screen">
      <LeftBar />        
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 font-amaranth">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="card border-4 border-secondary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Total Orders</h2>
              <p className="text-3xl font-bold text-accent">{totalOrders}</p>
            </div>
          </div>
          <div className="card border-secondary border-4 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Revenue</h2>
              <p className="text-3xl font-bold text-accent">
                ${totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="card border-secondary border-4 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Products</h2>
              <p className="text-3xl font-bold text-accent">{totalProducts}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 overflow-auto">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title font-amaranth">Recent Orders</h2>
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
                  {recentOrders.map((order) => (
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
      </div>
    </div>
  );
};

export default Dashboard;
