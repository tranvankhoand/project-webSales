import React, { useState } from "react";


const Header = ({setShows,size}) => {
  const [valueInput, setValueInput] = useState("");
  const [items, setItem] = useState([]);

  const handleSearch = () => {
    const item = [...items];
    const schema = valueInput;
    item.push(schema);
    setItem(item);
    setValueInput("");
  };
  const handleDelete = (index) => {
    const item = [...items];
    item.splice(index, 1);

    setItem(item);
  };

  
  return (
    <div>     
          <div className="header__with-search">
            <div className="header__mobile-icon hide-on-tablet">
              <label htmlFor="check-bars" className="header__mobile-icon-bars">
                <i className="header__with-search-icon fas fa-bars"></i>
              </label>
              <input
                type="checkbox"
                hidden
                className="header-check-bars"
                id="check-bars"
              />

              <label
                htmlFor="check-search"
                className="header__mobile-icon-search"
              >
                <i className="header__with-search-icon fas fa-search"></i>
              </label>
            </div>
            <div className="header__logo hide-on-tablet" onClick={() => setShows(true)}>
              <a href="/" className="header__logo-link">
                <img src=" https://hanoicomputercdn.com/media/lib/19-02-2022/logo-hacomtrangch.png"/>
              </a>
            </div>
            <input
              type="checkbox"
              hidden
              className="header__check-search"
              id="check-search"
            />
            <div className="header__search">
              <div className="header__search-input-wrap">
                <input
                  type="text"
                  placeholder="Tim kiem san pham"
                  className="header__search-input"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
                />
                <div className="header__search-history">
                  <ul className="header__search-history-list">
                    {items.map((item, index) => {
                      return (
                        <li className="header__search-history-item" key={index}>
                          <a>{item}</a>
                          <span className="header__delete"
                            style={{
                              float: "right",
                              fontSize: "26px",
                              border: "10px",
                            }}
                            onClick={() => handleDelete(index)}
                          >
                            &times;
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="header__search-select">
                <div className="header__search-select-label">
                  <span>Trong shop</span>
                </div>
                <i className="header__search-select-icon fas fa-chevron-down"></i>

                <ul className="header__search-option">
                  <li className="header__search-option-item header__search-option-item--active">
                    <span>Trong Shop </span>
                    <i className="fas fa-check"></i>
                  </li>
                  <li className="header__search-option-item">
                    <span>Ngoài Shop </span>
                    <i className="fas fa-check"></i>
                  </li>
                </ul>
              </div>
              <div className="header__search-btn" onClick={handleSearch}>
                <i className="header__search-btn-icon fas fa-search"></i>
              </div>
            </div>
            <div className="header__cart">
              <div className="header__cart-wrap" >
                
                <i className=" fa-solid fa-cart-shopping"
                style={{fontSize:'30px',color:'var(--white-color)'}}
                onClick={() => setShows(false)}>
                  
                </i>
                <span className="header__cart-notice">{size}</span>

                <div className="header__cart-list ">
                  <img
                    src="/Web/assets/img/cart/cart1.jpg"
                    alt=""
                    className="header__cart-no-cart-img"
                  />
                  <span className="header__cart-no-cart-msg">
                    Chưa có sản phẩm
                  </span>

                  <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                  <ul className="header__cart-list-item">
                    <li className="header__cart-item">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                          Laptop HP ProBook 450 G8
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                            18.299.000đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">1</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-dec">
                            Phân loại : màu bạc
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>

                    <li className="header__cart-item">
                      <img
                        src="https://hanoicomputercdn.com/media/product/56566_macbook_air_m1__4_.png"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                          Apple Macbook Air 13
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                            31.199.999đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">1</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-dec">
                            Phân loại : trắng
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>

                    <li className="header__cart-item">
                      <img
                        src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                          iPhone 13 Pro Max 128GB
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                              28.999.999đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">1</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-dec">
                            Phân loại : màu hồng
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>

                    <li className="header__cart-item">
                      <img
                        src="https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg"
                        alt=""
                        className="header__cart-img"
                      />
                      <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                          <h5 className="header__cart-item-name">
                          Xiaomi Redmi Note 11 Pro
                          </h5>
                          <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">
                              6.990.000đ
                            </span>
                            <span className="header__cart-item-multiply">
                              x
                            </span>
                            <span className="header__cart-item-qnt">1</span>
                          </div>
                        </div>
                        <div className="header__cart-item-body">
                          <span className="header__cart-item-dec">
                            Phân loại : màu bạc
                          </span>
                          <span className="header__cart-item-remove">Xóa</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <a href="#" className="header__cart-btn btn btn--primary">
                    Xem giỏ hàng
                  </a>
                </div>
              </div>
            </div>
         </div>      
    </div>
  );
};

export default Header;
