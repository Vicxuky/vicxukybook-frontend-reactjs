import Card2 from "./Card2";
import Cardproduct from "./Cardproduct";

const ContentHomePage = () => {
  return (
    <>
      <div className="banner container-fruid mt-3 ml-3 mr-3">
        <div className="row banner">
          <div className="col-12 col-lg-8 pl-0 pr-1 img-banner1">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/magentothem/banner7/TTN_840x320.jpg"
            />
          </div>
          <div className="col-12 col-lg-4 p-0 ">
            <div className="row mr-0 ml-0  img-banner1">
              <img
                alt="123"
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/fsale_bigsale2_392x156.jpg"
              />
            </div>
            <div className="row pt-1 mr-0 ml-0  img-banner1">
              <img
                alt="123"
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/fsale_bigsale2_392x156.jpg"
              />
            </div>
          </div>
        </div>
        <div className="row pt-1">
          <div className="col-lg-3 pl-0 pr-1 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          <div className="col-lg-3 pl-0 pr-1 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/salelon_bigsale2_310x210.jpg"
            />
          </div>
          <div className="col-lg-3 pl-0 pr-1 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          <div className="col-lg-3 p-0 img-banner2 ">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/salelon_bigsale2_310x210.jpg"
            />
          </div>
        </div>
      </div>
      <div className="container text-center category mt-3 ">
        <h3 className=" pt-3">Danh Mục Sản Phẩm:</h3>
        <div className=" row mt-3 mb-3">
          <div className="col-lg-3 category-items">
            <img
              alt="123"
              src={"/assets/images/marketing/marketing-can-ban.jpg"}
            />
            Marketing
          </div>
          <div className="col-lg-3 category-items">
            <img
              alt="111"
              src={
                "/assets/images/tam-ly-ky-nang-song/ky-nang-song/hieu-ve-trai-tim.jpg"
              }
            />
            Tâm lý - Kỹ năng
          </div>
          <div className="col-lg-3 category-items">
            <img
              alt="111"
              src={"/assets/images/vanhoc-tieu-thuyet/mat-biec.jpg"}
            />
            Tiểu thuyết
          </div>
          <div className="col-lg-3 category-items">
            <img
              alt="111"
              src={
                "/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
              }
            />
            Tiếng anh
          </div>
        </div>
      </div>
      {/* marketing -ban hang */}
      <div className="container-fruid category-marketing mt-3 ">
        <div className="d-flex justify-content-between">
          <h3 className="pt-3 pl-3 title-marketing">
            Sách marketing - bán hàng:
          </h3>
          <span className="pt-3 pr-3">Xem tất cả..</span>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
      </div>
      {/* tam ly ky nang song */}
      <div className="container-fruid category-marketing mt-3 ">
        <h3 className="pt-3 pl-3 title-marketing">Tâm lý - kỹ năng sống</h3>
        <div className="row">
          <div className="col-lg-4 p-0 img-banner2">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          <div className="col-lg-8 p-0">
            <div className="d-flex flex-wrap justify-content-around">
              <Card2
                // width="10.5rem"
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <Card2
                // width="10.5rem"
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <Card2
                // width="10.5rem"
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <Card2
                // width="10.5rem"
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <button className="btn-web mt-3 mb-3">Xem Thêm</button>
            </div>
          </div>
        </div>
      </div>
      {/* Tieu thuyet */}
      <div className="container-fruid category-marketing mt-3 ">
        <div className="d-flex justify-content-between">
          <h3 className="pt-3 pl-3 title-marketing">Tiểu thuyết</h3>
          <span className="pt-3 pr-3">Xem tất cả..</span>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
          <Cardproduct
            width="13.6rem"
            image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
            title="Marketing căn bản"
            desc="123"
          />
        </div>
      </div>
      {/* sach hoc tieng anh */}
      <div className="container-fruid category-marketing mt-3 ">
        <h3 className="pt-3 pl-3 title-marketing">Sách học tiếng anh</h3>
        <div className="row">
          <div className="col-lg-4 p-0 img-banner2">
            <img
              alt="123"
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg"
            />
          </div>
          <div className="col-lg-8 p-0">
            <div className="d-flex flex-wrap justify-content-around">
              <Card2
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <Card2
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <Card2
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <Card2
                image="/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
                title="Marketing căn bản"
                price="123000"
              />
              <button className="btn-web mt-3 mb-3">Xem Thêm</button>
            </div>
          </div>
        </div>
      </div>
      {/* NXB */}
      <div className="container">
        <div className="row mt-3 mb-3">
          <div className="col-lg-3 category-items nxb-book">
            <img
              alt="123"
              src={"/assets/images/marketing/marketing-can-ban.jpg"}
            />
            Thanh Niên
          </div>
          <div className="col-lg-3 category-items nxb-book">
            <img
              alt="111"
              src={
                "/assets/images/tam-ly-ky-nang-song/ky-nang-song/hieu-ve-trai-tim.jpg"
              }
            />
            Kim Đồng
          </div>
          <div className="col-lg-3 category-items nxb-book">
            <img
              alt="111"
              src={"/assets/images/vanhoc-tieu-thuyet/mat-biec.jpg"}
            />
            Nhà xuất bản trẻ
          </div>
          <div className="col-lg-3 category-items nxb-book">
            <img
              alt="111"
              src={
                "/assets/images/sach-hoc-tieng-anh/30-chu-de-tu-vung-tieng-anh.jpg"
              }
            />
            Lao Động
          </div>
        </div>
      </div>
    </>
  );
};
export default ContentHomePage;
