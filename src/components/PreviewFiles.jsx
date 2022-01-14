import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { audioFiles, currentStep, videoFiles } from "../recoil/atoms";

export default function PreviewFiles() {
  const audioFile = useRecoilValue(audioFiles);
  const videoFile = useRecoilValue(videoFiles);
  const [current, setCurrent] = useRecoilState(currentStep);
  const [merged, setMerged] = useState(false);

  const handleBack = () => {
    setCurrent(current - 1);
  };
  const handleSubmit = () => {
    setCurrent(current + 1);
  };
  const handleMerge = () => {
    setMerged(true);
  };
  return (
    <div className="container">
      <button onClick={handleBack} className="btn btn-secondary mt-5">
        Back
      </button>

      <div className="row text-center align-items-center h-100">
        <div className="col-md-5">
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
        </div>
        <div className="col-md-2 ">
          <button onClick={handleMerge} type="submit" class="btn btn-info">
            {merged ? "Merged" : "Merge"}
          </button>
        </div>
        <div className="col-md-5">
          {!merged ? (
            <div className="bg-white p-5  d-flex align-items-center justify-content-center border border-secondary border-1">
              <p className="m-0">Click Merge to combine the files</p>
            </div>
          ) : (
            <iframe
              src="https://player.vimeo.com/video/56187728?h=a994f796b4"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!merged}
          type="submit"
          class="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}
