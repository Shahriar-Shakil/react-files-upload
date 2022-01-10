import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { audioFiles, currentStep, paymentInfoAtoms, videoFiles } from "../recoil/atoms";

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
        <div>
        <h3>name: {paymentInfo?.name}</h3>
        <h4>price: {paymentInfo?.amount}</h4>
        </div>
        
        <div className="py-4">
          {audioFile && videoFile ? (
            <>
              <p>{audioFile.originalFile.name}</p>
              {audioFile ? (
                <audio controls>
                  <source src={audioFile.url} />
                  Your browser does not support the audio element.
                </audio>
              ) : null}
              <br />
              <br />
              <br />
              <p>{videoFile.originalFile.name}</p>
              {videoFile ? (
                <video
                  width="520"
                  height="240"
                  controls
                  autostart
                  autoPlay={false}
                  src={videoFile.url}
                />
              ) : null}
            </>
          ) : (
            <></>
          )}
        </div>
        {/* <button onClick={handleSubmit} type="submit" class="btn btn-primary">
          Submit
        </button> */}
      </div>
    </div>
  );
}
