import React from "react";
import { useRecoilState } from "recoil";
import { audioFiles, currentStep, videoFiles } from "../recoil/atoms";

export default function FileUpload() {

  const [current, setCurrent] = useRecoilState(currentStep);
  const [audioFile, setAudioFile] = useRecoilState(audioFiles);
  const [videoFile, setVideoFile] = useRecoilState(videoFiles);
  const handleAudioFile = (e) => {
    var url = URL.createObjectURL(e.target.files[0]);
    setAudioFile({ url, originalFile: e.target.files[0] });
  };
  const handleVideoFile = (e) => {
    var url = URL.createObjectURL(e.target.files[0]);
    setVideoFile({ url, originalFile: e.target.files[0] });
  };

  const handleSubmit = () => {
    if (audioFile && videoFile) {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="container">
      <h3 className="text-center">Files Upload</h3>

      <div className="row">
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Upload Audio Clips
          </label>
          <input
            onChange={handleAudioFile}
            className="form-control"
            accept=".mp3"
            type="file"
            id="formFile"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Image/Video
          </label>
          <input
            onChange={handleVideoFile}
            className="form-control"
            type="file"
            id="formFile"
            accept=".mp4"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
          disabled={!audioFile || !videoFile}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
