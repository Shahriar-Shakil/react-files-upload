import React from "react";
import { useRecoilState } from "recoil";
import { currentStep, paymentInfoAtoms } from "../recoil/atoms";

export default function PaymentInformation() {
  const [current, setCurrent] = useRecoilState(currentStep);
  const [paymentInfo, setPaymentInfo] = useRecoilState(paymentInfoAtoms);
  
  const handleBack = () => {
    setCurrent(current - 1);
  };
  const handleSubmit = () => {
    setCurrent(current + 1);
  };
  const onChange = (e)=> {
      const {name,value} = e.target
      console.log(name,value)
      setPaymentInfo(prev=>{
          return {
              ...prev,
              [name]:value
          }
      })
  }
  console.log(paymentInfo)
  return (
    <div className="container">
      <button onClick={handleBack} className="btn btn-secondary mt-5">
        Back
      </button>
      <div className="row">
        <h3 className="text-center">Payment Information</h3>
        <div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input value={paymentInfo?.name} onChange={onChange} name="name" type="text" className="form-control" placeholder="" />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input value={paymentInfo?.amount} onChange={onChange} type="text" name="amount" className="form-control" placeholder="" />
          </div>
         
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
