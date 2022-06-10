import axios from "axios";

const postOrderService = (data) => {
  return axios.post("http://localhost:8000/api/v1/post-order", data);
};

const getAllOrderService = (param) => {
  return axios.get("http://localhost:8000/api/v1/get-order", {
    params: {
      id: param,
    },
  });
};

const deleteOrderService = (orderId) => {
  return axios.delete("http://localhost:8000/api/v1/delete-order", {
    data: {
      id: orderId,
    },
  });
};

export { postOrderService, getAllOrderService, deleteOrderService };
