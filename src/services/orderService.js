import axios from "../axios";

const postOrderService = (data) => {
  return axios.post("/api/v1/post-order", data);
};

const getAllOrderService = (param) => {
  return axios.get("/api/v1/get-order", {
    params: {
      id: param,
    },
  });
};

const deleteOrderService = (orderId) => {
  return axios.delete("/api/v1/delete-order", {
    data: {
      id: orderId,
    },
  });
};

export { postOrderService, getAllOrderService, deleteOrderService };
