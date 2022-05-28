// function viEn(str) {
//   str = str.toLowerCase();
//   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//   str = str.replace(/đ/g, "d");

//   str = str.replace(/\W+/g, " ");
//   str = str.replace(/\s/g, "-");
//   return str;
// }
export default Data = {
  Users: [
    {
      userName: "admin",
      passWord: "admin",
    },
    {
      userName: "test",
      passWord: "test",
    },
  ],
  Products: [
    {
      id: "book-01",
      image: "../assets/images/dac-nhan-tam.webp",
      title: "Đắc Nhân Tâm",
      desc: "Top những cuốn sách bán chạy nhất mọi thời đại",
      price: 92000,
    },
    {
      id: "book-02",
      image: "../assets/images/",
      title: "Thói Quen Nguyên Tử",
      desc: "Top những cuốn sách bán chạy nhất mọi thời đại",
      price: 135000,
      url: "thoi-quen-nguyen-tu",
    },
    {
      id: "book-03",
      image: "../assets/images/",
      title: "Nhà Giả Kim",
      desc: "Top những cuốn sách bán chạy nhất mọi thời đại",
      price: 52000,
    },
    {
      id: "book-04",
      image: "../assets/images/",
      title: "Tiếng Anh Giao Tiếp Trong 30 Ngày",
      desc: "Top những cuốn sách bán chạy nhất mọi thời đại",
      price: 219000,
    },
    {
      id: "book-05",
      image: "../assets/images/",
      title: "Tuổi Trẻ Đáng Giá bao Nhiêu",
      desc: "Top những cuốn sách bán chạy nhất mọi thời đại",
      price: 199000,
    },
  ],
};
