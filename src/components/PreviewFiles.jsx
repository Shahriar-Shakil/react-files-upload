import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { audioFiles, currentStep, videoFiles } from "../recoil/atoms";

export default function PreviewFiles() {
  const audioFile = useRecoilValue(audioFiles);
  const videoFile = useRecoilValue(videoFiles);
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
        <div className="py-4">
          {audioFile && videoFile ? (
            <>
              <h3>Preview</h3>
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
        <button onClick={handleSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
