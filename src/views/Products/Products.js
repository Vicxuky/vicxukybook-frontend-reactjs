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
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState("All Product:");

  const [sort, setSort] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [quantityFilter, setQuantityFilter] = useState();

  useEffect(() => {
    if (search) {
      setMessage(`Results for keyword: "${search}"`);
    }
  }, [search]);

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
    let productListFilter = productList.filter((item) => {
      if (search) {
        return item.title.toLowerCase().includes(search.toLowerCase());
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
    });
    setQuantityFilter(productListFilter.length);
    setCurrentItems(productListFilter.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(productListFilter.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, productList, category, search]);

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
                    setMessage("S??ch marketing:");
                    setCategory("C1");
                  }}
                >
                  S??ch Marketing
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("T??m l?? - K??? n??ng:");
                    setCategory("C2");
                  }}
                >
                  T??m L?? - K??? N??ng
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("Ti???u thuy???t:");
                    setCategory("C3");
                  }}
                >
                  Ti???u Thuy???t
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("S??ch h???c ti???ng anh:");
                    setCategory("C4");
                  }}
                >
                  S??ch H???c Ti???ng Anh
                </li>
                <li
                  onClick={() => {
                    dispatch(deleteSearchStore());
                    setMessage("All Product:");
                    setCategory("");
                  }}
                >
                  T???t c??? s???n ph???m
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
                    <option value="az">Theo t??n: A - Z</option>
                    <option value="low">Theo gi??: th???p &gt;&gt; cao</option>
                    <option value="high">Theo gi??: cao &gt;&gt; th???p</option>
                  </select>
                </div>
              </div>

              <hr />
              <div className="product-list mt-1 d-flex flex-wrap justify-content-between">
                {currentItems
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
              {quantityFilter > itemsPerPage && (
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
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Products;
// https://stackoverflow.com/questions/70946170/how-to-implement-pagination-with-filter-in-react fixNavigated
