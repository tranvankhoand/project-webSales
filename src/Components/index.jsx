import React, { useState } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Cart from './cart';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../utils/firebase.config';
import { async } from '@firebase/util';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import Avatar from '../assets/img/Avatar.png'
const Index = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const [{ user }, dispatch] = useStateValue()
  const [isMenu, setIsMenu] = useState(false)
  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      })
    } else {
      setIsMenu(!isMenu)
    }
  }
  const logOut = () => {
    setIsMenu(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }
  const [shows, setShows] = useState(true)
  const [cart, setCart] = useState([])
  const handleClick = (data) => {
    if (cart.indexOf(data) !== -1) return;
    setCart([...cart, data])
  }
  const handleChange = (data, d) => {
    const ind = cart.indexOf(data);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1
    setCart([...arr])
  }


  return (
    <div className='app'>
      <header className="header">
        <div className="grid wide">
          <nav className="header__navbar hide-on-mobile-tablet">
            <ul className="header__navbar-list">
              <li className="header__navbar-item">
                <a href="#" className="header__navbar-item-link border-right-2px">
                  Kênh người bán
                </a>
              </li>

              <li className="header__navbar-item">
                <a href="#" className="header__navbar-item-link border-right-2px padding-left-8px">
                  Khách cá nhân
                </a>
              </li>
              <li className="header__navbar-item header__navbar-item-link-hover">
                <a href="#" className="header__navbar-item-link  border-right-2px padding-left-8px">
                  Khách doanh nghiệp
                </a>
                <div className="header__qr">
                  <img
                    className="header__qr-img"
                    src='data:image/png;base64,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'
                    alt="QR Code"
                  />
                  <div className="header__qr-apps">
                    <a href="#" className="header__qr-link">
                      <img
                        src="data:image/png;base64,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"
                        alt="appstore"
                        className="header__qr-dowload-img"
                      />
                    </a>
                    <a href="#" className="header__qr-link">
                      <img
                        src="data:image/png;base64,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"
                        alt="ggPlay"
                        className="header__qr-dowload-img"
                      />
                    </a>
                  </div>
                  <div className="header__qr-apps">
                    <a href="#" className="header__qr-link">
                      <img
                        src="data:image/png;base64,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"
                        alt="AppGallery"
                        className="header__qr-dowload-img"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item padding-left-8px">
                Kết nối
                <i className="header__<Linknavbar-item-icon fab fa-facebook"></i>
                <i className="header__navbar-item-icon fab fa-instagram"></i>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item--notify">
                <i className="header__navbar-item-icon fa-solid fa-cart-shopping"></i>
                <a href="#" className="header__navbar-item-link">
                  Giỏ hàng
                </a>
                <div className="header__notify">
                  <header>
                    <h3 className="header__notify-header">
                      Thông báo mới nhận
                    </h3>
                  </header>
                  <ul className="header__notify-list header__notify-list--viewed">
                    <img
                      src="https://maytinhanphat.vn/img/image/tin/283/sinh-vien-nen-chon-laptop-van-phong-moi-hay-cu-3.jpg"
                      alt="Latop"
                      className="header__notify-img"
                    />
                    <li className="header__notify-item  ">
                      <a href="#" className="header__notify-link">
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            SURFACE LAPTOP 3 (15-INCH) | AMD RYZEN 5 / RAM 8GB / SSD 128GB
                          </span>
                          <span className="header__notify-decription">
                            Đánh giá Máy tính SURFACE LAPTOP 3 (15-INCH) | AMD RYZEN 5 / RAM 8GB / SSD 128GB
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul className="header__notify-list header__notify-list--viewed">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Jh9cB5FAMSnxjDJNLxAeAx4jJZQvaJo4g&usqp=CAU"
                      alt="OHUI"
                      className="header__notify-img"
                    />
                    <li className="header__notify-item">
                      <a href="#" className="header__notify-link">
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Laptop Asus Gaming TUF FX506HC-HN144W (i5 11400H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win11/Đen)
                          </span>
                          <span className="header__notify-decription">
                            Laptop Asus Gaming TUF FX506HC-HN144W (i5 11400H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win11/Đen)
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul className="header__notify-list">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZStwb55Wwqok8ojF1z5Oc5FaP0BCrQN3evA&usqp=CAU"
                      alt="OHUI"
                      className="header__notify-img"
                    />
                    <li className="header__notify-item">
                      <a href="#" className="header__notify-link">
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Laptop HP ProBook 450 G8 (51X27PA) (i5 1135G7/8GB RAM/256GB SSD/15.6 FHD/Win/Bạc)
                          </span>
                          <span className="header__notify-decription">
                            Laptop HP ProBook 450 G8 (51X27PA) (i5 1135G7/8GB RAM/256GB SSD/15.6 FHD/Win/Bạc)
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <footer className="header__notify-footer">
                    <a href="#" className="header__notify-footer-btn">
                      Xem tất cả
                    </a>
                  </footer>
                </div>
              </li>
              <li className="header__navbar-item padding-left-8px">
                <i className="header__navbar-item-icon far fa-question-circle"></i>
                <a href="#" className="header__navbar-item-link ">
                  Hỗ trợ
                </a>
              </li>
              <li className="header__navbar-item padding-left-8px">
                <i className="ti-world"></i>
                <Link to="/contact" className="header__navbar-item-link">
                  Liên hệ
                  <i className="header__navbar-item-icon ti-angle-down"></i>
                </Link>
              </li>
              <li className="header__navbar-item padding-left-8px">
                <a href="#" className="header__navbar-item-link border-right-2px">
                  Đăng ký
                </a>
              </li>
              <li className="header__navbar-item" onClick={login}>
                <a className="header__navbar-item-link padding-left-8px" style={{marginTop:'8px'}}
                > Đăng nhập
                </a>
              
              
                <img
                  src={user ? user.photoURL : Avatar}
                  alt="Avatar"
                  className="header__navbar-user-img"
                />
                
                {
                  isMenu && (

                    <ul className="header__navbar-user-menu">
                      {
                        user && user.email === 'dokhoapa@gmail.com' && (
                          <Link style={{ textDecoration: 'none' }} to={'/'}>
                            <li className="header__navbar-user-item" >
                              <a style={{ color: '#333' }} href="#">Tài khoản của tôi</a>
                            </li>
                          </Link>
                        )
                      }
                      <li className="header__navbar-user-item">
                        <a href="#">Địa chỉ của tôi</a>
                      </li>
                      <li className="header__navbar-user-item">
                        <a href="#">Bên mua</a>
                      </li>
                      <li onClick={logOut} className="header__navbar-user-item">
                        <a href="#">Đăng xuất</a>
                      </li>
                    </ul>
                  )
                }
                </li>
            </ul>
          </nav>
          <Header setShows={setShows} size={cart.length} />

        </div>
      </header>

      <ul className="header-sort-bar">
        <li className="header-sort-item">
          <a href="" className="header-sort-title">
            Liên quan
          </a>
        </li>
        <li className="header-sort-item header-sort-item-active">
          <a href="" className="header-sort-title">
            Mới nhất
          </a>
        </li>
        <li className="header-sort-item">
          <a href="" className="header-sort-title">
            Bán chạy
          </a>
        </li>
        <li className="header-sort-item">
          <a href="" className="header-sort-title">
            Giá
          </a>
        </li>
      </ul>
      <div className="app__container">
        <div className="mobile-category">
          <ul className="mobile-category__list">
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                laptop
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                mobile
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                tablet
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                laptop
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                mobile
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                tablet
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                laptop
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                mobile
              </a>
            </li>
            <li className="mobile-category__item">
              <a href="" className="mobile-category__link">
                tablet
              </a>
            </li>
          </ul>
        </div>
        {
          shows ? (<Body handleClick={handleClick} />) :
            (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )
        }
      </div>
      <Footer />
    </div>
  )
}

export default Index