import { useEffect, useState } from "react";
import {
  deleteOrderService,
  getAllOrderService,
} from "../../services/orderService";
import LayoutSystem from "./LayoutSystem";

const ManageOrders = () => {
  const [orderList, setOrderList] = useState([]);

  const getAllOrder = async () => {
    await getAllOrderService("ALL").then((res) => {
      if (res && res.data.errCode === 0) {
        setOrderList(res.data.orders);
      }
    });
  };

  const handleDeleteOrder = async (order) => {
    try {
      let res = await deleteOrderService(order.id);
      if (res && res.data.errCode === 0) {
        getAllOrder();
      } else {
        alert(res.data.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllOrder();
  }, []);
  return (
    <LayoutSystem>
      <table id="customers">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>FullName</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Note</th>
            <th>Delete</th>
          </tr>

          {orderList.map((item, stt = 0) => {
            stt += 1;
            return (
              <tr key={item.id}>
                <td>{stt}</td>
                <td>{item.email}</td>
                <td>{item.fullName}</td>
                <td>{item.address}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.status}</td>
                <td>{item.note}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteOrder(item)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </LayoutSystem>
  );
};
export default ManageOrders;
