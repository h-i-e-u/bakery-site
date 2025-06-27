import { useEffect, useState } from "react";
import api from "../../api";
import LeftBar from "../../components/layout/LeftBar";
import { formatVND } from "../../utils";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([]);

  // Fetch orders from API
  useEffect(() => {
    api.get("/orders").then((res) => setOrders(res.data.results || res.data)); // Fetch orders from API
  }, []);

  // handle status change
  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await api.patch(`/orders/${orderId}/`, { status: newStatus });
      setOrders((orders) =>
        orders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleShowDetail = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

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
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer_name}</td>
                  <td>
                    {order.status}
                    <button
                      className="btn btn-xs btn-success ml-2"
                      onClick={() =>
                        handleStatusUpdate(
                          order.id,
                          order.status === "completed" ? "pending" : "completed"
                        )
                      }
                    >
                      {order.status === "completed"
                        ? "Mark Pending"
                        : "Mark Completed"}
                    </button>
                  </td>
                  <td>{formatVND(order.total)}</td>
                  <td>{order.orderDate?.slice(0, 10)}</td>
                  <td>
                    <button
                      className="btn btn-xs btn-info"
                      onClick={() => handleShowDetail(order)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showModal && selectedOrder && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded shadow-lg p-6 w-full max-w-md relative">
                <button
                  className="absolute top-2 right-2 btn btn-sm btn-circle"
                  onClick={handleCloseModal}
                >
                  ✕
                </button>
                <h2 className="text-xl font-bold mb-2">
                  Order #{selectedOrder.id} Details
                </h2>
                <p>
                  <b>Customer:</b> {selectedOrder.customer_name}
                </p>
                <p>
                  <b>Email:</b> {selectedOrder.email}
                </p>
                <p>
                  <b>Address:</b> {selectedOrder.address}
                </p>
                <p>
                  <b>Phone:</b> {selectedOrder.phone}
                </p>
                <p>
                  <b>Status:</b> {selectedOrder.status}
                </p>
                <p>
                  <b>Notice:</b> {selectedOrder.notice}
                </p>
                <p>
                  <b>Total:</b> {formatVND(selectedOrder.total)}
                </p>
                <p>
                  <b>Date:</b> {selectedOrder.orderDate?.slice(0, 10)}
                </p>
                {/* If you have items: */}
                {selectedOrder.items && (
                  <>
                    <b>Items:</b>
                    <ul className="list-disc ml-5">
                      {selectedOrder.items.map((item, idx) => (
                        <li key={idx}>
                          {item.product ? item.product.title : "Product"} x{" "}
                          {item.quantity} ({formatVND(item.price)})
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Orders;
