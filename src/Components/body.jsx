import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Page from "./page";
const Body = ({data , handleClick}) => {
  const [datas, setData] = useState(Categories);
  const [searchTerm,setSearchTerm] = useState('')

  useEffect(() => {
    // const {datas} = axios
    // .get(Categories)
    // .then(({datas}) => 
    // setData(datas.results))
  },[])
  
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage,setUserPerPage] = useState(12)
  
  const lastIndex = currentPage * userPerPage
  const firstIndex = lastIndex - userPerPage
  const allUsers = datas.slice(firstIndex, lastIndex) 

  const filterProduct = (value) => {
      const result = Categories.filter((curData) => {
        return  curData.name === value
      })
      setData(result)
      // vi du thay doi code o day chang han
  }
  const handleSort = () => {
    // const result = datas.sort((a,b) => 
    //   a.priceNew > b.priceNew ? 1 : -1
    //   )  
    // setData(result)
  }
  return (
    <div>
        <div className="grid wide">
          <div className="row sm-gutter app-content">
            <div className="l-2 m-0 c-0 ">
              <nav className="category">
                <h3 className="category__heading" onClick={() => setData(Categories)}>Danh mục</h3>

                <ul className="category-list">
                  <li className="category-item category-item-active" onClick={() => filterProduct('laptop')}>
                    <a  className="category-item-link">
                      Laptop
                    </a>
                  </li>
                  <li className="category-item" onClick={() => filterProduct('tablet')} >
                    <a  className="category-item-link">
                      Tablet
                    </a>
                  </li>
                  <li className="category-item" onClick={() => filterProduct('mobile')}>
                    <a  className="category-item-link">
                      Mobile
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col l-10 m-12 c-12">
              
              <div className="home-filter hide-on-mobile-tablet">
                <div className="home-filter__title">
                <input className="form-control"
                placeholder="search Product"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}/>
                </div>
                <button className="home__filter-btn btn border-shadow--bottom">
                  Phổ biến
                </button>
                <button className="home__filter-btn btn btn--primary border-shadow--bottom">
                  Mới nhất
                </button>
                <button className="home__filter-btn btn border-shadow--bottom">
                  Bán chạy
                </button>

                <div className="select-input border-shadow--bottom">
                  <span className="select-input__label ">Giá</span>
                  <i className="select-input__icon fa-solid fa-down-long"></i>
                  <ul className="select-input__list">
                    <li className="select-input__item"
                    onClick={handleSort}>
                      <a href="" className="select-input__link">
                        Giá thấp đến cao
                      </a>
                    </li>
                    <li className="select-input__item"
                    onClick={() => handleSort()}>
                      <a href="" className="select-input__link">
                        Giá cao đến thấp
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="home-filter__page">
                  <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/10
                  </span>

                  <div className="home-filter__page-control border-shadow--bottom">
                    <a
                      href=""
                      className="home-filter__page-btn home-filter__page-btn--disable"
                    >
                      <i className="home-filter__icon fa-solid fa-angle-left"></i>
                    </a>
                    <a href="" className="home-filter__page-btn">
                      <i className="home-filter__icon fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="home-product">
                <div className="row sm-gutter">
                {allUsers.filter((data) => {
                  if (searchTerm == ''){
                    return data
                  }
                  else if (data.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return data
                  }
                }).map((data) => {
                  const { id, name, background, title, priceOld, priceNew ,origin,amount} =
                    data;
                  return (
                      <div className="col col-sm-3" key={id}>
                        <a className="home-product-item" >
                          <div
                            className="home-product-item__img"
                            style={{backgroundImage : `${data.background}` }}
                          ></div>
                          <h4 className="home-product-item__name">
                            {data.title}
                          </h4>
                          <div className="home-product-item__price">
                            <span className="home-product-item__price-old">
                              {data.priceOld} đ
                            </span>
                            <span className="home-product-item__price-new">
                              {data.priceNew} đ
                            </span>
                          </div>
                          <div className="home-product-item__action">
                            <span className="home-product-item__like home-product-item__like--liked">
                              <i className="home-product-item__like-icon-empty far fa-heart"></i>
                              <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                            </span>
                            <div className="home-product-item__star">
                              <i className="home-product-item__star-gold fas fa-star"></i>
                              <i className="home-product-item__star-gold fas fa-star"></i>
                              <i className="home-product-item__star-gold fas fa-star"></i>
                              <i className="home-product-item__star-gold fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <button className="home-product-item__sold"
                            onClick={() => handleClick(data)}>
                              Add to card
                            </button>
                          </div>

                          <div className="home-product-item__origin">
                            <span className="home-product-item__brand">
                              {data.name}
                            </span>
                            <span className="home-product-item__madein">
                              {data.origin}
                            </span>
                          </div>
                          <div className="home-product-item__favourite">
                            <i className="fas fa-check"></i>
                            <span>Yêu thích</span>
                          </div>
                          <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-percent">
                              10%
                            </span>
                            <span className="home-product-item__sale-off-label">
                              Giảm
                            </span>
                          </div>
                        </a>
                      </div>
                  );
                })}
                </div>
                
                <Page
                  totalUsers = {datas.length}
                  setCurrentPage={setCurrentPage}
                  userPerPage={userPerPage}
                />

              </div>
            </div>
          </div>
        </div> 
    </div>
  );
};

export default Body;
