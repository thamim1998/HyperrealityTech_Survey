import React from 'react'

function Improve({formData, setFormData}) {
  return (
    <div className="form-group">
    <h4>
    5. What could we do to improve our service?
    </h4>
    <input
        type="text"
        placeholder="improve"
        value={formData.improve_rating}
        onChange={(e) => {
          setFormData({ ...formData, improve_rating: e.target.value });
        }}
      />
  </div>
  )
}

export default Improve