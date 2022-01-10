import { atom } from "recoil";
export const audioFiles = atom({
  key: "audioFiles", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const videoFiles = atom({
  key: "videoFiles", 
  default: "", 
});

export const currentStep = atom({
  key: "currentStep", 
  default: 0, 
});
export const paymentInfoAtoms = atom({
  key: "paymentInfoAtoms", 
  default: "", 
});
