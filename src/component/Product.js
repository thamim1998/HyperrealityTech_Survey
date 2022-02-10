import React from "react";

function Product({ formData, setFormData }) {
  let currentProduct = ["1", "2", "3", "4", "5"];

  return (
    <div className="form-group">
      <h4>1.How satisfied are you with our products?</h4>
      <div className="d-flex justify-content-around">
        {currentProduct.map((product, i) => (
          <div key={i}>
            <input
              className="form-check-input"
              type="radio"
              value={product}
              id="defaultCheck1"
              name="product_rating"
              onChange={(e) => {
                setFormData({ ...formData, product_rating: e.target.value });
              }}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {product}
            </label>
          </div>
        ))}
      </div>

      <p> {formData.product_rating} </p>
    </div>
  );
}

export default Product;
