import React from 'react'
import images from "../../assets/images/images";
import '../../scss/header.scss'

const Header = (props) => {
  const { details, cartCount } = props;
  return (
    <>
      <section className='headersection'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="left-component" >{details?.restaurant_name}</span>

            </div>
            <div className="col-md-6">
              <span className="right-component">
                My Orders
                <div className="cart-icon">
                  <img src={images.cart.default} alt="" />
                  <span className="cart-count">{cartCount}</span>
                </div>
              </span>

            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Header