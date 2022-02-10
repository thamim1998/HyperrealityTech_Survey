import React from "react";

function Price({ formData, setFormData }) {
  let currentPrice = ["1", "2", "3", "4", "5"];
  return (
    <div className="form-group">
      <h4>2. How fair are the prices compared to similar retailers?</h4>
      <div className="d-flex justify-content-around">
        {currentPrice.map((price, i) => (
          <div key={i}>
            <input
              className="form-check-input"
              type="radio"
              value={price}
              id="defaultCheck1"
              name="price"
              onChange={(e) => {
                setFormData({ ...formData, price_rating: e.target.value });
              }}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {price}
            </label>
          </div>
        ))}
      </div>

      <p> {formData.price_rating} </p>
    </div>
  );
}

export default Price;
