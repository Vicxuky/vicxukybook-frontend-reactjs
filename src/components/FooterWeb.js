import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FooterWeb.scss";

const FooterWeb = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Kết nối với chúng tôi:</span>
          <ProgressBar animated now={55} />
        </div>
        <div className="social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i
              className="bi bi-facebook c-facebook hcursor mr-5 ml-5"
              title="Facebook"
            ></i>
          </a>
          <a href="https://Twitter.com" target="_blank" rel="noreferrer">
            <i
              className="bi bi-twitter c-twitter hcursor mr-5"
              title="Twitter"
            ></i>
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <i
              className="bi bi-google c-google hcursor mr-5"
              title="Google"
            ></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i
              className="bi bi-instagram c-instagram hcursor mr-5"
              title="instagram"
            ></i>
          </a>
          <a href="https://Github.com" target="_blank" rel="noreferrer">
            <i
              className="bi bi-github c-github hcursor mr-3"
              title="Github"
            ></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="bi bi-book"></i>&nbsp;Vicxuky Book
              </h6>
              <p>Sách có tất cả những thứ bạn cần...</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Danh mục sách</h6>
              <p>
                <Link to="/a" className="text-reset">
                  Sách Marketing
                </Link>
              </p>
              <p>
                <Link to="/a" className="text-reset">
                  Tâm lý - kỹ năng sống
                </Link>
              </p>
              <p>
                <Link to="/a" className="text-reset">
                  Tiểu thuyết
                </Link>
              </p>
              <p>
                <Link to="/a" className="text-reset">
                  Sách học tiếng anh
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên kết</h6>

              <p>
                <a href="#!" className="text-reset">
                  Vicxuky Family
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vicxuky Baby
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vicxuky Man
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Xink Girl
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <i className="bi bi-house-fill me-3"></i>&nbsp;123 Việt Nam
              </p>
              <p>
                <i className="bi bi-envelope-fill me-3"></i>
                &nbsp;vicxuky@gmail.com
              </p>
              <p>
                <i className="bi bi-telephone-fill me-3"></i>&nbsp;+84 983 959
                923
              </p>
              <p>
                <i className="bi bi-printer-fill me-3"></i>&nbsp;+000 YURi JgyRT
                OIhT
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center text-dark p-4 bg-navbar">
        © 2022 Copyright:
        <a className="text-reset fw-bold me-3" href="/">
          &nbsp;VicxukyBook.com <br />
        </a>
        <a className="text-reset" href="https://vicxuky.vn">
          From Vicxuky.vn/com
        </a>
      </div>
    </footer>
  );
};
export default FooterWeb;
