import axios from "axios";

const getAllProductService = (inputId) => {
  return axios.get("http://localhost:8000/api/v1/get-all-product", {
    params: {
      id: inputId,
    },
  });
};

const createNewProductService = (data) => {
  return axios.post("http://localhost:8000/api/v1/create-new-product", data);
};

const deleteProductService = (productId) => {
  return axios.delete("http://localhost:8000/api/v1/delete-product", {
    data: {
      id: productId,
    },
  });
};

const editProductService = (inputData) => {
  return axios.put("http://localhost:8000/api/v1/edit-product", inputData);
};

export {
  getAllProductService,
  createNewProductService,
  deleteProductService,
  editProductService,
};
