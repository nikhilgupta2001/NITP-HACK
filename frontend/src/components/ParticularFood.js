import React from 'react';
import Spinner from './Spinner/Spinner';

function ParticularFood() {
    return (
        <div>
            
             {
                  <div className="productscreen">
                  {loading ? (
                     <Spinner/>
                  ) : error ? (
                    <h2>{error}</h2>
                  ) : (
                    <>
                      <div className="productscreen__left">
                        <div className="left__image">
                          <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="left__info">
                          <p className="left__name">PlayStation 5</p>
                          <p>Price: ${product.price}</p>
                          <p>Description: {product.description}</p>
                        </div>
                      </div>
                      <div className="productscreen__right">
                        <div className="right__info">
                          <p>
                            Price:
                            <span>${product.price}</span>
                          </p>
                          <p>
                            Status:
                            <span>
                              {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                            </span>
                          </p>
                          <p>
                            Qty
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                              {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </p>
                          <p>
                            <button type="button" onClick={addToCartHandler}>
                              Add To Cart
                            </button>
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
             }
        </div>
    )
}

export default ParticularFood
