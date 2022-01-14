import React from "react";
import { useRecoilState } from "recoil";
import { currentStep, paymentInfoAtoms } from "../recoil/atoms";
export default function CreditCardInformation() {
  const [current, setCurrent] = useRecoilState(currentStep);
  const [paymentInfo, setPaymentInfo] = useRecoilState(paymentInfoAtoms);

  const handleBack = () => {
    setCurrent(current - 1);
  };
  const handleOrderNow = () => {
    setCurrent(current + 1);
  };
  return (
    <section>
      <button onClick={handleBack} className="btn btn-secondary mt-5">
        Back
      </button>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex justify-content-between mb-0">
                  <p className="text-muted mb-0">Total Amount</p>
                  <p className="mb-0">${paymentInfo?.amount}</p>
                </div>
              </div>
              <div
                className="rounded-bottom"
                style={{ backgroundColor: "#eee" }}
              >
                <div className="card-body">
                  <p className="mb-4">Your payment details</p>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="formControlLgXM8"
                      className="form-control"
                      placeholder="1234 5678 1234 5678"
                    />
                    <label className="form-label" htmlFor="formControlLgXM8">
                      Card Number
                    </label>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="formControlLgExpk8"
                          className="form-control"
                          placeholder="MM/YYYY"
                        />
                        <label
                          className="form-label"
                          htmlFor="formControlLgExpk8"
                        >
                          Expire
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="formControlLgcvv8"
                          className="form-control"
                          placeholder="Cvv"
                        />
                        <label
                          className="form-label"
                          htmlFor="formControlLgcvv8"
                        >
                          Cvv
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleOrderNow}
                    className="btn btn-info btn-block"
                  >
                    Order now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
