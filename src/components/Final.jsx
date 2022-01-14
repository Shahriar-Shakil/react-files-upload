import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  audioFiles,
  currentStep,
  paymentInfoAtoms,
  videoFiles,
} from "../recoil/atoms";

export default function Final() {
  const audioFile = useRecoilValue(audioFiles);
  const videoFile = useRecoilValue(videoFiles);
  const paymentInfo = useRecoilValue(paymentInfoAtoms);

  const [current, setCurrent] = useRecoilState(currentStep);

  const handleBack = () => {
    setCurrent(current - 1);
  };
  const handleSubmit = () => {
    setCurrent(current + 1);
  };
  return (
    <div className="container">
      <button onClick={handleBack} className="btn btn-secondary mt-5">
        Back
      </button>

      <div className="row text-center">
        <div className=" my-3">
          <h3>name: {paymentInfo?.name}</h3>
          <h4>price: {paymentInfo?.amount}</h4>
          <p>{paymentInfo?.description}</p>
        </div>

        <div className="py-4">
          <iframe
            src="https://player.vimeo.com/video/56187728?h=a994f796b4"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* <button onClick={handleSubmit} type="submit" class="btn btn-primary">
          Submit
        </button> */}
      </div>
    </div>
  );
}
