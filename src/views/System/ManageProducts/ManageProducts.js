import LayoutSystem from "../LayoutSystem";
import { useEffect, useState } from "react";

const ManageProducts = () => {
  const [errMessage, setErrMessage] = useState("");

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
  const handleInput = (e) => {
    const copyData = { ...product };
    const { name, value } = e.target;
    setProduct({ ...copyData, [name]: value });
  };

  const checkInput = () => {
    let isCheck = true;
    setErrMessage("");
    let arrInput = ["title", "priceOld", "priceNew", "desc"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!product[arrInput[i]]) {
        isCheck = false;
        setErrMessage("Missing parameters " + arrInput[i]);
        break;
      }
    }
    return isCheck;
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let isValid = checkInput();
    if (isValid === true) {
      //call API >> Manage
      // props.editUser(product);
    }
  };

  useEffect(() => {
    // let copyUser = { ...props.currentUser };
    // setData({ ...copyUser });
  }, []);
  console.log("product: ", product);

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
              <input
                type="text"
                className="form-control shadow-sm"
                name="title"
                placeholder="Title product.."
                value={product.title}
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="form-group col-md-3">
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
              <input
                type="file"
                className="form-control shadow-sm cursor-p"
                name="image"
                accept=".png, .jpg, .webp"
                value={product.image}
                onChange={(e) => handleInput(e)}
              />
              {/* <label class="custom-file-label" for="customFile">
                Choose file
              </label> */}
            </div>

            <div className="form-group col-md-3">
              <select
                defaultValue={product.roleId}
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
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <textarea
                rows="5"
                // cols="50"
                type="text"
                className="form-control shadow-sm"
                name="desc"
                placeholder="Description..."
                value={product.desc}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <button
            style={{ padding: "5px 25px" }}
            type="submit"
            className="hover-web btn-modal mb-3"
            onClick={(e) => handleCreateProduct(e)}
          >
            Create
          </button>
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

            {/* {listUser.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.email}</td>
                  <td>{item.fullName}</td>
                  <td>{item.address}</td>
                  <td>{item.phoneNumber}</td>
                  <td>
                    <button
                      className="btn-edit "
                      onClick={() => handleShowEdit(item)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteUser(item)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
      {/* *List product */}
    </LayoutSystem>
  );
};
export default ManageProducts;
