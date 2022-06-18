import LayoutSystem from "../LayoutSystem";
import { useCallback, useEffect, useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

import {
  createNewProductService,
  deleteProductService,
  editProductService,
  getAllProductService,
} from "../../../services/productService";
import "./ManageProducts.scss";
import PaginatedItems from "../../../components/Paginate/Paginate";

const ManageProducts = () => {
  const [errMessage, setErrMessage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [isCreate, setIsCreate] = useState(true);

  // s
  const [product, setProduct] = useState({
    id: "",
    title: "",
    author: "",
    publisher: "",
    priceOld: "",
    priceNew: "",
    desc: "",
    image: "",
    categoryId: "",
  });

  //
  const [productList, setProductList] = useState([]);
  const [productListPaginated, setProductListPaginated] = useState([]);

  //
  const handleInput = (e) => {
    const copyData = { ...product };
    const { name, value } = e.target;
    setProduct({ ...copyData, [name]: value });
  };

  const checkInput = () => {
    let isCheck = true;
    setErrMessage("");
    let arrInput = ["title", "priceOld", "priceNew", "desc", "image"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!product[arrInput[i]]) {
        isCheck = false;
        setErrMessage("Missing parameters " + arrInput[i]);
        break;
      }
    }
    return isCheck;
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    let isValid = checkInput();
    if (isValid === true) {
      //call API >> Manage
      try {
        let response = await createNewProductService(product);
        if (response && response.data.errCode !== 0) {
          alert(response.data.errMessage);
        } else {
          setProduct({
            id: "",
            title: "",
            author: "",
            publisher: "",
            priceOld: "",
            priceNew: "",
            desc: "",

            categoryId: "",
          });
          setUrlImage("");
          alert(response.data.errMessage);
          getAllProduct();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  // get All product
  const getAllProduct = async (callBack) => {
    await getAllProductService("ALL").then((res) => {
      if (res && res.data.errCode === 0) {
        setProductList(res.data.products);
      }
    });
    callBack();
  };
  // getProducts Paginated
  const handleProductPaginated = useCallback((data) => {
    setProductListPaginated(data);
  }, []);

  useEffect(() => {
    getAllProduct(handleProductPaginated);
  }, [handleProductPaginated]);

  const handleClearInputEdit = (e) => {
    e.preventDefault();
    setProduct({
      id: "",
      title: "",
      author: "",
      publisher: "",
      priceOld: "",
      priceNew: "",
      desc: "",

      categoryId: "",
    });
    setIsCreate(true);
  };

  const handleDeleteProduct = async (product) => {
    try {
      let res = await deleteProductService(product.id);
      if (res && res.data.errCode === 0) {
        getAllProduct();
      } else {
        alert(res.data.errMessage);
      }
      // }
    } catch (e) {
      console.log(e);
    }
    console.log("Data: ", product.id);
  };

  const handleShowEditProduct = (data) => {
    document.documentElement.scrollTop = 0;
    const copyData = { ...data };
    setProduct({ ...copyData });
    setIsCreate(false);
  };

  const handleSaveEditProduct = async (e) => {
    e.preventDefault();
    try {
      let res = await editProductService(product);
      if (res && res.data.errCode !== 0) {
        alert(res.data.errMessage);
      } else {
        setProduct({
          id: "",
          title: "",
          author: "",
          publisher: "",
          priceOld: "",
          priceNew: "",
          desc: "",

          categoryId: "",
        });
        setUrlImage("");
        alert(res.data.errMessage);
        setIsCreate(true);

        getAllProduct();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleImage = (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      setUrlImage(objectUrl);
      setProduct({ ...product, image: `/assets/images/${file.name}` });
    }
  };
  return (
    <LayoutSystem>
      <div>
        <h2 className="text-center mt-3">Manage Products</h2>
      </div>
      <div className="container border rounded">
        {/* <div className="form-row mt-3">Create a new Product</div> */}

        <form>
          <span style={{ color: "red" }}>{errMessage}</span>

          <div className="form-row mt-3">
            <div className="form-group col-md-6">
              <label>Title:</label>
              <input
                id="edit"
                type="text"
                className="form-control shadow-sm"
                name="title"
                placeholder="Title product.."
                value={product.title}
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="form-group col-md-3">
              <label>Author:</label>
              <input
                type="text"
                className="form-control shadow-sm"
                name="author"
                placeholder="Author.."
                value={product.author}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="form-group col-md-3">
              <label>Publisher:</label>

              <input
                type="text"
                className="form-control shadow-sm"
                name="publisher"
                placeholder="Publisher.."
                value={product.publisher}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label>Price old:</label>

              <input
                type="text"
                className="form-control shadow-sm"
                name="priceOld"
                placeholder="Price old.."
                value={product.priceOld}
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="form-group col-md-3">
              <label>Price new:</label>

              <input
                type="text"
                className="form-control shadow-sm"
                name="priceNew"
                placeholder="Price new.."
                value={product.priceNew}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="form-group col-md-3">
              <label>Category:</label>

              <select
                defaultValue="C4"
                onChange={(e) => handleInput(e)}
                name="categoryId"
                className="form-control"
              >
                <option value="C1">Marketing - bán hàng</option>
                <option value="C2">Tâm lý - kỹ năng</option>
                <option value="C3">Tiểu thuyết</option>
                <option value="C4">Tiếng anh</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Image:</label>
              <br />

              <input
                hidden
                type="file"
                id="image-product"
                className="form-control shadow-sm"
                name="image"
                accept=".png, .jpg, .webp"
                // value={product.image}
                onChange={(e) => handleImage(e)}
              />
              <label className="lable-up-image" htmlFor="image-product">
                Tải ảnh
                <i className="bi bi-file-earmark-arrow-up-fill"></i>
              </label>
              {product.image}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-9">
              <label>Description:</label>

              <textarea
                rows="8"
                // cols="50"
                type="text"
                className="form-control shadow-sm"
                name="desc"
                placeholder="Description..."
                value={product.desc}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div
              className="preview-image form-group col-md-3"
              style={{ backgroundImage: `url(${urlImage})` }}
              // onClick={() => setIsOpen(true)}
            >
              {/* {console.log(urlImage)} */}
              {/* {isOpen === true && (
                <Lightbox
                  mainSrc={urlImage}
                  // onCloseRequest={() => setIsOpen(false)}
                />
              )} */}
            </div>
          </div>
          {isCreate ? (
            <button
              style={{ padding: "5px 25px" }}
              type="submit"
              className="hover-web btn-modal mb-3"
              onClick={(e) => handleCreateProduct(e)}
            >
              Create
            </button>
          ) : (
            <>
              <button
                style={{ padding: "5px 25px" }}
                type="submit"
                className="hover-web border rounded mb-3"
                onClick={(e) => handleClearInputEdit(e)}
              >
                Clear
              </button>
              <button
                style={{ padding: "5px 25px" }}
                type="submit"
                className="hover-web btn-modal mb-3 ml-3"
                onClick={(e) => handleSaveEditProduct(e)}
              >
                Save
              </button>
            </>
          )}
        </form>
      </div>

      {/* List product */}
      <div className="container-fruid mt-3 px-1">
        <table id="customers">
          <tbody>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Price old</th>
              <th>Price new</th>
              <th>Image</th>
              <th>Category</th>
              <th>Action</th>
            </tr>

            {productListPaginated?.map((item) => {
              let category = "";
              if (item.categoryId === "C1") {
                category = "Marketing - bán hàng";
              } else if (item.categoryId === "C2") {
                category = "Tâm lý - kỹ năng";
              } else if (item.categoryId === "C3") {
                category = "Tiểu thuyết";
              } else if (item.categoryId === "C4") {
                category = "Tiếng anh";
              } else {
                category = "Not category";
              }
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.publisher}</td>
                  <td>{item.priceOld}</td>
                  <td>{item.priceNew}</td>
                  <td>{item.image}</td>
                  <td>{category}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleShowEditProduct(item)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteProduct(item)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-3">
          <PaginatedItems
            onProductPaginated={handleProductPaginated}
            items={productList}
            itemsPerPage={5}
          />
        </div>
      </div>
      {/* *List product */}
    </LayoutSystem>
  );
};
export default ManageProducts;
