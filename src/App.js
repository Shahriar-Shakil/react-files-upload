import Steps from "rc-steps";
import "rc-steps/assets/iconfont.css";
import "rc-steps/assets/index.css";
import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import CreditCardInformation from "./components/CreditCardInformation";
import FileUpload from "./components/FileUpload";
import Final from "./components/Final";
import PaymentInformation from "./components/PaymentInformation";
import PreviewFiles from "./components/PreviewFiles";
import { currentStep } from "./recoil/atoms";

// import 'rc-steps/assets/iconfont.css'

function App() {
  const current = useRecoilValue(currentStep);
  let steps = [
    { title: "Upload Files", content: <FileUpload /> },
    { title: "Preview", content: <PreviewFiles /> },
    { title: "Personal Information", content: <PaymentInformation /> },
    { title: "Account Information", content: <CreditCardInformation /> },
    { title: "Final", content: <Final /> },
  ];
  return (
    <div className="container py-5">
      <Steps current={current}>
        {steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
       
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
}

export default App;
