import React from 'react';
import './ImagePattern.scss';

const ImagePattern = () => (
  <div className="image-pattern">
    <div className="image-patter-mobile">
      <img className="top-layer-mobile" src={process.env.PUBLIC_URL + 'images/illustration-woman-online-mobile.svg'}></img>
      <img className="bottom-layer-mobile" src={process.env.PUBLIC_URL + 'images/bg-pattern-mobile.svg'}></img>
    </div>

    {/* to be fixed */}
    <div className="image-pattern-desktop">
      <img className="top-layer-desktop" src={process.env.PUBLIC_URL + 'images/illustration-box-desktop.svg'}></img>
      <img className="middle-layer-desktop" src={process.env.PUBLIC_URL + 'images/illustration-woman-online-desktop.svg'}></img>
      <img className="bottom-layer-desktop" src={process.env.PUBLIC_URL + 'images/bg-pattern-desktop.svg'}></img>
    </div>
  </div>
);

export default ImagePattern;
