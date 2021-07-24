arrTen = [""];

function them() {
  dem = 0;
  var ten = document.getElementById("TenSP").innerHTML;
  if (typeof Storage !== "undefined") {
    for (x = 0; x < arrTen.length; x++) {
      if (arrTen[x] == ten) {
        dem = dem + 1
      }
    }
    if (dem == 0) {
      arrTen.push(ten);
    }
    // Store
    localStorage.setItem(ten, arrTen);
    // Retrieve
    console.log(localStorage.getItem(ten));
  }
}

function xoa() {
  location.reload();
}

var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "public/root/trangchu.html",
      controller: "myTrangchu",
    })
    .when("/SP", {
      templateUrl: "public/root/sanpham.html",
      controller: "mySanpham",
    })
    .when("/CT", {
      templateUrl: "public/root/contact.html",
      controller: "myContact",
    })
    .when("/in4/:id", {
      templateUrl: "public/root/chitietsanpham.html",
      controller: "myChitiet",
    })
    .when("/shop/:ten/:gia", {
      templateUrl: "public/root/giohang.html",
      controller: "myShop",
    });
});

/*trang chu*/
app.controller("myTrangchu", function ($scope) {
  // Set of Photos
  $scope.hinh = "./public/img/slide/slide1.png";
  $scope.noibat = [{
      sanpham: "./public/img/PC/rog10X.png",
      ten: "Rog 10X",
      gia: 103990000
    },
    {
      sanpham: "./public/img/Laptop/macbook.png",
      ten: "Macbook",
      gia: 37090000,
    },
    {
      sanpham: "./public/img/PC/sekiraX.png",
      ten: "Sekira X",
      gia: 62490000
    },
  ];
  $scope.uachuong = [{
      sanpham: "./public/img/Laptop/HP.png",
      ten: "HP",
      gia: 10090000
    },
    {
      sanpham: "./public/img/Laptop/asus.png",
      ten: "Asus",
      gia: 19490000
    },
    {
      sanpham: "./public/img/Laptop/MSI.png",
      ten: "MSI",
      gia: 24500000
    },
  ];
});

/*Sản phẩm*/
app.controller("mySanpham", function ($scope) {
  $scope.caption = "danh mục sản phẩm";
  $scope.itemPC = [{
      sanpham: "./public/img/PC/yuumiM.png",
      ten: "Yuumi M",
      gia: 24490000
    },
    {
      sanpham: "./public/img/PC/sekiraX.png",
      ten: "Sekira X",
      gia: 62490000
    },
    {
      sanpham: "./public/img/PC/phantomS.png",
      ten: "Phantom S",
      gia: 33190000,
    },
    {
      sanpham: "./public/img/PC/hextechS.png",
      ten: "Hextech S",
      gia: 22990000,
    },
    {
      sanpham: "./public/img/PC/rog10X.png",
      ten: "Rog 10X",
      gia: 103990000
    },
    {
      sanpham: "./public/img/PC/phoenix10Z.png",
      ten: "Phoenix 10Z",
      gia: 60290000,
    },
  ];
  $scope.itemLaptop = [{
      sanpham: "./public/img/Laptop/dell.png",
      ten: "Dell",
      gia: 29990000
    },
    {
      sanpham: "./public/img/Laptop/macbook.png",
      ten: "Macbook",
      gia: 37090000,
    },
    {
      sanpham: "./public/img/Laptop/MSI.png",
      ten: "MSI",
      gia: 24500000
    },
    {
      sanpham: "./public/img/Laptop/asus.png",
      ten: "Asus",
      gia: 19490000
    },
    {
      sanpham: "./public/img/Laptop/acer.png",
      ten: "Acer",
      gia: 18490000
    },
    {
      sanpham: "./public/img/Laptop/HP.png",
      ten: "HP",
      gia: 10090000
    },
  ];
  $scope.items = [{
      sanpham: "./public/img/PC/yuumiM.png",
      ten: "Yuumi M",
      gia: 24490000,
    },
    {
      sanpham: "./public/img/PC/sekiraX.png",
      ten: "Sekira X",
      gia: 62490000,
    },
    {
      sanpham: "./public/img/PC/phantomS.png",
      ten: "Phantom S",
      gia: 33190000,
    },
    {
      sanpham: "./public/img/PC/hextechS.png",
      ten: "Hextech S",
      gia: 22990000,
    },
    {
      sanpham: "./public/img/PC/rog10X.png",
      ten: "Rog 10X",
      gia: 103990000,
    },
    {
      sanpham: "./public/img/PC/phoenix10Z.png",
      ten: "Phoenix 10Z",
      gia: 60290000,
    },
    {
      sanpham: "./public/img/Laptop/dell.png",
      ten: "Dell",
      gia: 29990000,
    },
    {
      sanpham: "./public/img/Laptop/macbook.png",
      ten: "Macbook",
      gia: 37090000,
    },
    {
      sanpham: "./public/img/Laptop/MSI.png",
      ten: "MSI",
      gia: 24500000,
    },
    {
      sanpham: "./public/img/Laptop/asus.png",
      ten: "Asus",
      gia: 19490000,
    },
    {
      sanpham: "./public/img/Laptop/acer.png",
      ten: "Acer",
      gia: 18490000,
    },
    {
      sanpham: "./public/img/Laptop/HP.png",
      ten: "HP",
      gia: 10090000
    },
  ];
});

/*chi tiet san pham */
app.controller("myChitiet", function ($scope, $routeParams, $rootScope) {
  $rootScope.allSP = "cmm";
  $scope.caption = "Chi tiết sản phẩm";
  $scope.items = [{
      sanpham: "./public/img/PC/yuumiM.png",
      ten: "Yuumi M",
      gia: 24490000,
    },
    {
      sanpham: "./public/img/PC/sekiraX.png",
      ten: "Sekira X",
      gia: 62490000,
    },
    {
      sanpham: "./public/img/PC/phantomS.png",
      ten: "Phantom S",
      gia: 33190000,
    },
    {
      sanpham: "./public/img/PC/hextechS.png",
      ten: "Hextech S",
      gia: 22990000,
    },
    {
      sanpham: "./public/img/PC/rog10X.png",
      ten: "Rog 10X",
      gia: 103990000,
    },
    {
      sanpham: "./public/img/PC/phoenix10Z.png",
      ten: "Phoenix 10Z",
      gia: 60290000,
    },
    {
      sanpham: "./public/img/Laptop/dell.png",
      ten: "Dell",
      gia: 29990000,
    },
    {
      sanpham: "./public/img/Laptop/macbook.png",
      ten: "Macbook",
      gia: 37090000,
    },
    {
      sanpham: "./public/img/Laptop/MSI.png",
      ten: "MSI",
      gia: 24500000,
    },
    {
      sanpham: "./public/img/Laptop/asus.png",
      ten: "Asus",
      gia: 19490000,
    },
    {
      sanpham: "./public/img/Laptop/acer.png",
      ten: "Acer",
      gia: 18490000,
    },
    {
      sanpham: "./public/img/Laptop/HP.png",
      ten: "HP",
      gia: 10090000
    },
  ];
  $scope.noibat = [{
      sanpham: "./public/img/PC/rog10X.png",
      ten: "Rog 10X",
      gia: 103990000
    },
    {
      sanpham: "./public/img/Laptop/macbook.png",
      ten: "Macbook",
      gia: 37090000,
    },
    {
      sanpham: "./public/img/PC/sekiraX.png",
      ten: "Sekira X",
      gia: 62490000
    },
  ];
  $scope.id = $routeParams.id;
  $scope.tragiatri = function () {
    for (i = 0; i < $scope.items.length; i++) {
      if ($scope.id == $scope.items[i].ten) {
        $scope.ketqua = $scope.items[i];
        break;
      }
    }
  };
});

/*Contacts*/
app.controller("myContact", function ($scope) {
  $scope.caption = "Liên hệ với chúng tôi";
  $scope.xacnhan = function () {
    if ($scope.mail != null) {
      if ($scope.hoTen != null) {
        if ($scope.ghiChu != null && $scope.ghiChu.length > 4) {
          $scope.ketqua = "Đã xác nhận. Hệ thống sẽ phản hồi trong vài ngày";
        } else {
          $scope.ketqua = "Vui lòng nhập ghi chú nhiều hơn 4 chữ";
        }
      } else {
        $scope.ketqua = "Vui lòng nhập Họ-Tên";
      }
    } else {
      $scope.ketqua = "Vui lòng nhập Email đúng điều kiện";
    }
  };
});

/*gio hang*/
app.controller("myShop", function ($scope, $routeParams) {
  $scope.caption = "Giỏ hàng";
  $scope.items = [];
  $scope.SP = [{
      ten: "Yuumi M",
      gia: 24490000
    },
    {
      ten: "Phantom S",
      gia: 33190000
    },
    {
      ten: "Sekira X",
      gia: 62490000
    },
    {
      ten: "Hextech S",
      gia: 22990000
    },
    {
      ten: "Rog 10X",
      gia: 103990000
    },
    {
      ten: "Phoenix 10Z",
      gia: 60290000
    },
    {
      ten: "Dell",
      gia: 29990000
    },
    {
      ten: "Macbook",
      gia: 37090000
    },
    {
      ten: "MSI",
      gia: 24500000
    },
    {
      ten: "Asus",
      gia: 19490000
    },
    {
      ten: "Acer",
      gia: 18490000
    },
    {
      ten: "HP",
      gia: 10090000
    },
  ];
  $scope.total = 0;
  $scope.change = function () {
    $scope.total = 0;
    $scope.items.forEach((e) => {
      if (e.checked == true) {
        $scope.total += e.gia * e.soluong;
      }
    });
  };
  $scope.themhang = function () {
    for (i = 0; i < arrTen.length; i++) {
      for (j = 0; j < $scope.SP.length; j++) {
        if (arrTen[i] == $scope.SP[j].ten) {
          $scope.items.push({
            ten: $scope.SP[j].ten,
            gia: $scope.SP[j].gia
          });
        }
      }
    }
  };
});

/* chỉ đãn */
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});