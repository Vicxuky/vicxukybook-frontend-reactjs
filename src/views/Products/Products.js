import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import { deleteSearchStore } from "../../redux/searchSlice";
import { viEn } from "../../functionsStore";
import { getAllProductService } from "../../services/productService";
import Card3 from "./Card3";
import "./Products.scss";
// import PaginatedItems from "../../components/Paginate/Paginate";
import ReactPaginate from "react-paginate";

const Products = () => {
  const search = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState("All Product:");

  const [sort, setSort] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const navigate = useNavigate();

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  // get All product
  const getAllProduct = async () => {
    let res = await getAllProductService("ALL");
    if (res && res.data.errCode === 0) {
      setProductList(res.data.products);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  // Paginated
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 11;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(productList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(productList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, productList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Layout>
        <div className="container-fruid px-3">
          <div className="row">
            <div className="col-lg-2 p-0 side-bar shadow">
              <ul>
                <h2 className="mt-3">Category:</h2>
                <li
                  className="active"
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("Sách marketing:");
                    setCategory("C1");
                  }}
                >
                  Sách Marketing
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("Tâm lý - Kỹ năng:");
                    setCategory("C2");
                  }}
                >
                  Tâm Lý - Kỹ Năng
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("Tiểu thuyết:");
                    setCategory("C3");
                  }}
                >
                  Tiểu Thuyết
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("Sách học tiếng anh:");
                    setCategory("C4");
                  }}
                >
                  Sách Học Tiếng Anh
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("All Product:");
                    setCategory("");
                  }}
                >
                  Tất cả sản phẩm
                </li>
              </ul>
              <div className="product-new">
                <h2>New Books:</h2>
                {productList.slice(0, 6).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="mt-3"
                      onClick={() => handleProductDetail(item.id)}
                    >
                      <img width={100} alt={item.image} src={item.image} />
                      <div>{item.title}</div>
                    </div>
                  );
                })}
              </div>
              <div className="top-sale">
                <h2>TOP sale:</h2>
                {productList.slice(0, 6).map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleProductDetail(item.id)}
                    >
                      <img width={100} alt={item.image} src={item.image} />
                      <div>{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="container-products col-lg-10 p-0">
              <div className="d-flex justify-content-between">
                <h1 className="mt-3 ml-3">{message}</h1>

                <div className="sort mt-3">
                  <label htmlFor="sort">Sort: </label>
                  <select
                    name="sort"
                    id="sort"
                    className="sort-select"
                    onChange={(e) => handleSort(e)}
                  >
                    <option value="ALL"></option>
                    <option value="az">Theo tên: A - Z</option>
                    <option value="low">Theo giá: thấp &gt;&gt; cao</option>
                    <option value="high">Theo giá: cao &gt;&gt; thấp</option>
                  </select>
                </div>
              </div>

              <hr />
              <div className="product-list mt-1 d-flex flex-wrap justify-content-between">
                {currentItems
                  .filter((item) => {
                    if (search) {
                      return item.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    }
                    if (category === "C1") {
                      return item.categoryId === "C1";
                    } else if (category === "C2") {
                      return item.categoryId === "C2";
                    } else if (category === "C3") {
                      return item.categoryId === "C3";
                    } else if (category === "C4") {
                      return item.categoryId === "C4";
                    }
                    return 1;
                  })
                  .sort((a, b) => {
                    if (sort === "low") {
                      return a.priceNew - b.priceNew;
                    } else if (sort === "high") {
                      return b.priceNew - a.priceNew;
                    } else if (sort === "az") {
                      return a.title > b.title ? 1 : -1;
                    }
                    return 1;
                  })
                  .map((item) => {
                    return (
                      <div key={item.id} className="col-12 col-lg-3 mr-0 mb-5">
                        <Card3
                          width="15.5rem"
                          id={item.id}
                          url={viEn(item.title)}
                          image={item.image}
                          title={item.title}
                          priceOld={item.priceOld}
                          priceNew={item.priceNew}
                        />
                      </div>
                    );
                  })}
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Products;
