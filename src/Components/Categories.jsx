const Categories = [
    {
        id: 1,
        name: "laptop",
        background: `url(https://maytinhanphat.vn/img/image/tin/283/sinh-vien-nen-chon-laptop-van-phong-moi-hay-cu-3.jpg)`,
        img : "https://maytinhanphat.vn/img/image/tin/283/sinh-vien-nen-chon-laptop-van-phong-moi-hay-cu-3.jpg",
        title: "SURFACE LAPTOP 3 (15-INCH) | AMD RYZEN 5 / RAM 8GB / SSD 128GB",
        priceOld: 31999999 ,
        priceNew: 29999999,
        origin: "VietNam"
        , amount: 1
    }, {
        id: 2,
        name: "laptop",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Jh9cB5FAMSnxjDJNLxAeAx4jJZQvaJo4g&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Jh9cB5FAMSnxjDJNLxAeAx4jJZQvaJo4g&usqp=CAU",
        title: "Laptop Asus Gaming TUF FX506HC-HN144W (i5 11400H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win11/Đen)",
        priceOld: 19799000,
        priceNew: 19499000,
        origin: "VietNam"
        , amount: 1
    }, {
        id: 3,
        name: "laptop",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU",
        title: "Laptop HP ProBook 450 G8 (51X27PA) (i5 1135G7/8GB RAM/256GB SSD/15.6 FHD/Win/Bạc)",
        priceOld: 18599000,
        priceNew: 18299000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 4,
        name: "laptop",
        background: `url(https://hanoicomputercdn.com/media/product/56566_macbook_air_m1__4_.png)`,
        img : "https://hanoicomputercdn.com/media/product/56566_macbook_air_m1__4_.png",
        title: "Apple Macbook Air 13 (MGNE3SA/A) (Apple M1/8GB RAM/512GB SSD/13.3 inch IPS/Mac OS/Vàng) (NEW)",
        priceOld: 31399999,
        priceNew: 31199999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 5,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
        title: "Điện thoại iPhone 13 Pro Max 128GB",
        priceOld: 29999999,
        priceNew: 28999999,
        origin: "USA"
        , amount: 1
    },

    {
        id: 6,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg",
        title: "Xiaomi Redmi Note 11 Pro",
        priceOld: 7490000,
        priceNew: 6990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 7,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg",
        title: "Điện thoại OPPO Find X5 Pro 5G",
        priceOld: 32990000,
        priceNew: 30990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 8,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg",
        title: "Điện thoại Samsung Galaxy S22+ 5G 128GB ",
        priceOld: 25990000,
        priceNew: 22990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 9,
        name: "tablet",
        background: `url(https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg)`,
        img : "https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg",
        title: "Samsung Galaxy Tab A8 chip xử lý UniSOC T618, RAM 4 GB",
        priceOld: 20999999,
        priceNew: 18999999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 10,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU",
        title: "Samsung Galaxy Tab S8",
        priceOld: 20990000,
        priceNew: 18990000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 11,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU",
        title: "iPad Pro M1 12.9 inch 5G",
        priceOld: 34990000,
        priceNew: 29290000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 12,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 13,
        name: "laptop",
        background: `url(https://hanoicomputercdn.com/media/product/250_64219_laptop_asus_vivobook_m3500qc_12.jpg)`,
        img : "https://hanoicomputercdn.com/media/product/250_64219_laptop_asus_vivobook_m3500qc_12.jpg",
        title: "SURFACE LAPTOP 3 (15-INCH) | AMD RYZEN 5 / RAM 8GB / SSD 128GB",
        priceOld: 31999999 ,
        priceNew: 29999999,
        origin: "VietNam"
        , amount: 1

    }, {
        id: 14,
        name: "laptop",
        background: `url(https://hanoicomputercdn.com/media/product/250_64858_laptop_asus_gaming_tuf_fx517zc_5.png)`,
        img : "https://hanoicomputercdn.com/media/product/250_64858_laptop_asus_gaming_tuf_fx517zc_5.png",
        title: "Laptop Asus Gaming TUF FX506HC-HN144W (i5 11400H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win11/Đen)",
        priceOld: 19799000,
        priceNew: 19499000,
        origin: "VietNam"
        , amount: 1
    }, {
        id: 15,
        name: "laptop",
        background: `url(https://hanoicomputercdn.com/media/product/250_63588_laptop_msi_alpha_15_18.jpg)`,
        img : "https://hanoicomputercdn.com/media/product/250_63588_laptop_msi_alpha_15_18.jpg",
        title: "Laptop HP ProBook 450 G8 (51X27PA) (i5 1135G7/8GB RAM/256GB SSD/15.6 FHD/Win/Bạc)",
        priceOld: 18599000,
        priceNew: 18299000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 16,
        name: "laptop",
        background: `url(https://hanoicomputercdn.com/media/product/250_64218_laptop_asus_vivobook_m3500qc_12.jpg)`,
        img : "https://hanoicomputercdn.com/media/product/250_64218_laptop_asus_vivobook_m3500qc_12.jpg",
        title: "Apple Macbook Air 13 (MGNE3SA/A) (Apple M1/8GB RAM/512GB SSD/13.3 inch IPS/Mac OS/Vàng) (NEW)",
        priceOld: 31399999,
        priceNew: 31199999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 17,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/115343/vivo-y21-white-01-1-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/115343/vivo-y21-white-01-1-600x600.jpg",
        title: "Điện thoại iPhone 13 Pro Max 128GB",
        priceOld: 29999999,
        priceNew: 28999999,
        origin: "USA"
        , amount: 1
    },

    {
        id: 18,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg",
        title: "Xiaomi Redmi Note 11 Pro",
        priceOld: 7490000,
        priceNew: 6990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 19,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/249429/vivo-y21s-blue-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/249429/vivo-y21s-blue-600x600.jpg",
        title: "Điện thoại OPPO Find X5 Pro 5G",
        priceOld: 32990000,
        priceNew: 30990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 20,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/235838/Galaxy-S22-Ultra-Burgundy-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/235838/Galaxy-S22-Ultra-Burgundy-600x600.jpg",
        title: "Điện thoại Samsung Galaxy S22+ 5G 128GB ",
        priceOld: 25990000,
        priceNew: 22990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 21,
        name: "tablet",
        background: `url(https://cdn.tgdd.vn/Products/Images/522/247513/samsung-galaxy-tab-s8-ultra-1-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/522/247513/samsung-galaxy-tab-s8-ultra-1-600x600.jpg",
        title: "Samsung Galaxy Tab A8 chip xử lý UniSOC T618, RAM 4 GB",
        priceOld: 20999999,
        priceNew: 18999999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 22,
        name: "tablet",
        background: `url(https://cdn.tgdd.vn/Products/Images/522/238649/ipad-pro-2021-129-inch-gray-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/522/238649/ipad-pro-2021-129-inch-gray-600x600.jpg",
        title: "Samsung Galaxy Tab S8",
        priceOld: 20990000,
        priceNew: 18990000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 23,
        name: "tablet",
        background: `url(https://cdn.tgdd.vn/Products/Images/522/247512/Tab-S8+-Black-1-600x600.jpeg)`,
        img : "https://cdn.tgdd.vn/Products/Images/522/247512/Tab-S8+-Black-1-600x600.jpeg",
        title: "iPad Pro M1 12.9 inch 5G",
        priceOld: 34990000,
        priceNew: 29290000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 24,
        name: "tablet",
        background: `url(https://cdn.tgdd.vn/Products/Images/522/225031/samsung-galaxy-tab-s7-thumb-xanh-600x600-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/522/225031/samsung-galaxy-tab-s7-thumb-xanh-600x600-600x600.jpg",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 25,
        name: "laptop",
        background: `url(https://maytinhanphat.vn/img/image/tin/283/sinh-vien-nen-chon-laptop-van-phong-moi-hay-cu-3.jpg)`,
        img : "https://maytinhanphat.vn/img/image/tin/283/sinh-vien-nen-chon-laptop-van-phong-moi-hay-cu-3.jpg",
        title: "SURFACE LAPTOP 3 (15-INCH) | AMD RYZEN 5 / RAM 8GB / SSD 128GB",
        priceOld: 31999999 ,
        priceNew: 29999999,
        origin: "VietNam"
        , amount: 1

    }, {
        id: 26,
        name: "laptop",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Jh9cB5FAMSnxjDJNLxAeAx4jJZQvaJo4g&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Jh9cB5FAMSnxjDJNLxAeAx4jJZQvaJo4g&usqp=CAU",
        title: "Laptop Asus Gaming TUF FX506HC-HN144W (i5 11400H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win11/Đen)",
        priceOld: 19799000,
        priceNew: 19499000,
        origin: "VietNam"
        , amount: 1
    }, {
        id: 27,
        name: "laptop",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU",
        title: "Laptop HP ProBook 450 G8 (51X27PA) (i5 1135G7/8GB RAM/256GB SSD/15.6 FHD/Win/Bạc)",
        priceOld: 18599000,
        priceNew: 18299000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 28,
        name: "laptop",
        background: `url(https://hanoicomputercdn.com/media/product/56566_macbook_air_m1__4_.png)`,
        img : "https://hanoicomputercdn.com/media/product/56566_macbook_air_m1__4_.png",
        title: "Apple Macbook Air 13 (MGNE3SA/A) (Apple M1/8GB RAM/512GB SSD/13.3 inch IPS/Mac OS/Vàng) (NEW)",
        priceOld: 31399999,
        priceNew: 31199999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 29,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
        title: "Điện thoại iPhone 13 Pro Max 128GB",
        priceOld: 29999999,
        priceNew: 28999999,
        origin: "USA"
        , amount: 1
    },

    {
        id: 30,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg",
        title: "Xiaomi Redmi Note 11 Pro",
        priceOld: 7490000,
        priceNew: 6990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 31,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg",
        title: "Điện thoại OPPO Find X5 Pro 5G",
        priceOld: 32990000,
        priceNew: 30990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 32,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg",
        title: "Điện thoại Samsung Galaxy S22+ 5G 128GB ",
        priceOld: 25990000,
        priceNew: 22990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 33,
        name: "tablet",
        background: `url(https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg)`,
        img : "https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg",
        title: "Samsung Galaxy Tab A8 chip xử lý UniSOC T618, RAM 4 GB",
        priceOld: 20999999,
        priceNew: 18999999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 34,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU",
        title: "Samsung Galaxy Tab S8",
        priceOld: 20990000,
        priceNew: 18990000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 35,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU",
        title: "iPad Pro M1 12.9 inch 5G",
        priceOld: 34990000,
        priceNew: 29290000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 36,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 37,
        name: "laptop",
        background: `url(https://maytinhanphat.vn/img/image/tin/283/sinh-vien-nen-chon-laptop-van-phong-moi-hay-cu-3.jpg)`,
        img : "https://maytinhanphat.vn/img/image/tin/283/sinh-vien-nen-chon-laptop-van-phong-moi-hay-cu-3.jpg",
        title: "SURFACE LAPTOP 3 (15-INCH) | AMD RYZEN 5 / RAM 8GB / SSD 128GB",
        priceOld: 31999999 ,
        priceNew: 29999999,
        origin: "VietNam"
        , amount: 1

    }, {
        id: 38,
        name: "laptop",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Jh9cB5FAMSnxjDJNLxAeAx4jJZQvaJo4g&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Jh9cB5FAMSnxjDJNLxAeAx4jJZQvaJo4g&usqp=CAU",
        title: "Laptop Asus Gaming TUF FX506HC-HN144W (i5 11400H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win11/Đen)",
        priceOld: 19799000,
        priceNew: 19499000,
        origin: "VietNam"
        , amount: 1
    }, {
        id: 39,
        name: "laptop",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU",
        title: "Laptop HP ProBook 450 G8 (51X27PA) (i5 1135G7/8GB RAM/256GB SSD/15.6 FHD/Win/Bạc)",
        priceOld: 18599000,
        priceNew: 18299000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 40,
        name: "laptop",
        background: `url(https://hanoicomputercdn.com/media/product/56566_macbook_air_m1__4_.png)`,
        img : "https://hanoicomputercdn.com/media/product/56566_macbook_air_m1__4_.png",
        title: "Apple Macbook Air 13 (MGNE3SA/A) (Apple M1/8GB RAM/512GB SSD/13.3 inch IPS/Mac OS/Vàng) (NEW)",
        priceOld: 31399999,
        priceNew: 31199999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 41,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
        title: "Điện thoại iPhone 13 Pro Max 128GB",
        priceOld: 29999999,
        priceNew: 28999999,
        origin: "USA"
        , amount: 1
    },

    {
        id: 42,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg",
        title: "Xiaomi Redmi Note 11 Pro",
        priceOld: 7490000,
        priceNew: 6990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 43,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg",
        title: "Điện thoại OPPO Find X5 Pro 5G",
        priceOld: 32990000,
        priceNew: 30990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 44,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg",
        title: "Điện thoại Samsung Galaxy S22+ 5G 128GB ",
        priceOld: 25990000,
        priceNew: 22990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 45,
        name: "tablet",
        background: `url(https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg)`,
        img : "https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg",
        title: "Samsung Galaxy Tab A8 chip xử lý UniSOC T618, RAM 4 GB",
        priceOld: 20999999,
        priceNew: 18999999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 46,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU",
        title: "Samsung Galaxy Tab S8",
        priceOld: 20990000,
        priceNew: 18990000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 47,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU",
        title: "iPad Pro M1 12.9 inch 5G",
        priceOld: 34990000,
        priceNew: 29290000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 48,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 49,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 50,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg",
        title: "Điện thoại OPPO Find X5 Pro 5G",
        priceOld: 32990000,
        priceNew: 30990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 51,
        name: "mobile",
        background: `url(https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg)`,
        img : "https://cdn.tgdd.vn/Products/Images/42/242439/Galaxy-S22-Plus-White-600x600.jpg",
        title: "Điện thoại Samsung Galaxy S22+ 5G 128GB ",
        priceOld: 25990000,
        priceNew: 22990000,
        origin: "USA"
        , amount: 1
    },
    {
        id: 52,
        name: "tablet",
        background: `url(https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg)`,
        img : "https://i-sohoa.vnecdn.net/2022/02/05/45456-p11-plus-01-1644070136_m_460x0.jpg",
        title: "Samsung Galaxy Tab A8 chip xử lý UniSOC T618, RAM 4 GB",
        priceOld: 20999999,
        priceNew: 18999999,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 53,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyBV34w_ataxbwaE_bcmdQgJtpp-A_2Qbpg&usqp=CAU",
        title: "Samsung Galaxy Tab S8",
        priceOld: 20990000,
        priceNew: 18990000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 54,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU",
        title: "iPad Pro M1 12.9 inch 5G",
        priceOld: 34990000,
        priceNew: 29290000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 55,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 56,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 57,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuyWhbvW5rsSXv-juKC7ATev630N3QVEKpQ&usqp=CAU",
        title: "iPad Pro M1 12.9 inch 5G",
        priceOld: 34990000,
        priceNew: 29290000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 58,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    },
    {
        id: 59,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    }, {
        id: 60,
        name: "tablet",
        background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU)`,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uv4Ll2q9VSkNiVhWh9GUOfveHGVlrsmkCw&usqp=CAU",
        title: "iPad Air 4 Wifi Cellular 256GB (2020)",
        priceOld: 25990000,
        priceNew: 23999000,
        origin: "VietNam"
        , amount: 1
    }
]
export default Categories