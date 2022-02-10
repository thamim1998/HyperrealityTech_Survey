import React from "react";

function Value({ formData, setFormData }) {
  let currentValue = ["1", "2", "3", "4", "5"];
  return (
    <div className="form-group">
      <h4>
        3.How satisfied are you with the value for money of your purchase?
      </h4>
      <div className="d-flex justify-content-around">
        {currentValue.map((value, i) => (
          <div key={i}>
            <input
              className="form-check-input"
              type="radio"
              value={value}
              id="defaultCheck1"
              name="value"
              onChange={(e) => {
                setFormData({ ...formData, value_rating: e.target.value });
              }}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {value}
            </label>
          </div>
        ))}
      </div>
      <p> {formData.value_rating} </p>
    </div>
  );
}

export default Value;
