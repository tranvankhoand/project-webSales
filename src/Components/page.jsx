import React from 'react'

const Page = ({ userPerPage, setCurrentPage, totalUsers }) => {
  let pageNumbers = []
  for (let i = 1; i <= (totalUsers / userPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul className="pagination home-product__pagination">
      <li class="pagination-item">
        <a class="pagination-item__link">
          <i class="pagination-item__icon ti-angle-left"></i>
        </a>
      </li>

      {
        pageNumbers.map((number, index) =>
          <div key={index} style={{border:'1px solid #ccc' , margin: '0 10px',backgroundColor:'#f94646' }}>
            <li 
              className="pagination-item pagination-item__active"  onClick={() => setCurrentPage(number)}>
              <a className="paginatioan-item__link" style={{textDecoration : 'none', color : '#000'}}>
                {number}
              </a>
            </li>
          </div>
        )
      }

      <li className="pagination-item">
        <a className="pagination-item__link">
          <i className="pagination-item__icon ti-angle-right"></i>
        </a>
      </li>
    </ul>


  )
}

export default Page