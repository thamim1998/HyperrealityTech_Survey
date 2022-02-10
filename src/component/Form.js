import { useState } from "react";
import Improve from "./Improve";
import Price from "./Price";
import Product from "./Product";
import Recommend from "./Recommend";
import Value from "./Value";
import { Button, Modal } from "react-bootstrap";
import Welcome from "./Welcome";

function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    product_rating: "",
    price_rating: "",
    value_rating: "",
    recommendation: "",
    improve_rating: "",
  });

  const isAttended = localStorage.getItem("surveyData");

  const titles = [
    "Welcome",
    "Product Satisfation",
    "Price",
    "Value for Money",
    "Recommended to family members",
    "Improve",
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("surveyData", JSON.stringify(formData));
    setTimeout(() => {
      localStorage.removeItem("surveyData");
    }, 2000);
  };

  const modalClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Welcome />;
    } else if (page === 1) {
      return <Product formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Price formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Value formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Recommend formData={formData} setFormData={setFormData} />;
    } else {
      return <Improve formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      {!isAttended ? (
        <div>
          <div className="form">
            <div className="form-container">
              <h1> {titles[page]} </h1>
              <div className="container">{PageDisplay()}</div>
              {page === 0 ? (
                <Button
                  variant="danger"
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Start
                </Button>
              ) : null}
              {page !== 0 ? (
                <div>
                  <Button
                    variant="primary"
                    disabled={page === 0}
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="primary"
                    disabled={page === titles.length - 1}
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  >
                    Next
                  </Button>{" "}
                </div>
              ) : null}
              {page === titles.length - 1 ? (
                <Button variant="danger" onClick={handleShow}>
                  Finish
                </Button>
              ) : null}
            </div>
          </div>

          <Modal show={show} onHide={modalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Submission</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to submit</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={modalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p> Thank you for attending survey. </p>
      )}
    </>
  );
}

export default Form;
