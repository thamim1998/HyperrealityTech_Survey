import React from "react";

function Recommend({ formData, setFormData }) {
  let currentRecommend = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className="form-group">
      <h4>
        4.On a scale of 1-10 how would you recommend us to your friends and
        family?
      </h4>
      <div className="d-flex justify-content-around">
        {currentRecommend.map((recommend, i) => (
          <div className="d-flex justify-content-around">
            <div key={i}>
              <input
                className="form-check-input"
                type="radio"
                value={recommend}
                id="defaultCheck1"
                name="program"
                onChange={(e) => {
                  setFormData({ ...formData, recommendation: e.target.value });
                }}
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                {recommend}
              </label>
            </div>
          </div>
        ))}
        <p> {formData.recommendation} </p>
      </div>
    </div>
  );
}

export default Recommend;
