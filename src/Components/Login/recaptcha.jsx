import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { secretKey, siteKey } from "../../Services/reCaptcha";

export const ReCaptchaComponent = ({setValid}) => {
    const ref = useRef(null)
    const handleSubmit = () =>{
        if(ref.current.getValue()){
            return setValid(true)
        }else{
            return setValid(false)
        }
    }
  return (
    <div
      className="g-recaptcha"
      style={{
        "transform": "scale(1)",
        "WebkitTransform": " scale(0.87)",
        "transformOrigin": "0 0",
        "WebkitTransformOrigin": "0 0",
      }}
      data-theme="light"
      data-sitekey={siteKey}
    >
      <ReCAPTCHA ref={ref} sitekey={siteKey} onChange={handleSubmit} />
    </div>
  );
};
