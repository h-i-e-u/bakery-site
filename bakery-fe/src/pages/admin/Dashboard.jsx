import { useState, useEffect} from "react";
import api from "../../api"; 
const Dashboard = () => {
  const [data, setData] = useState({});

  // Fetch data from API or context here
  useEffect(() => {
    api.get("/orders").then((res) => setData(res.data));
  }, []);

  console.log("Dashboard data:", data);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 font-amaranth">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total Orders</h2>
            <p className="text-3xl font-bold">125</p>
          </div>
        </div>

        <div className="card bg-secondary text-secondary-content">
          <div className="card-body">
            <h2 className="card-title">Revenue</h2>
            <p className="text-3xl font-bold">$1,234</p>
          </div>
        </div>

        <div className="card bg-accent text-accent-content">
          <div className="card-body">
            <h2 className="card-title">Products</h2>
            <p className="text-3xl font-bold">48</p>
          </div>
        </div>

        <div className="card bg-neutral text-neutral-content">
          <div className="card-body">
            <h2 className="card-title">Customers</h2>
            <p className="text-3xl font-bold">89</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title font-amaranth">Recent Orders</h2>
            {/* Add order table component here */}
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title font-amaranth">Low Stock Alert</h2>
            {/* Add low stock items list here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
