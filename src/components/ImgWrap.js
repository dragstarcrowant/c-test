import React from 'react';
import Img from 'react-image';

const ImgWrap = (props) => {
  const { imageUrl } = props;
  return <Img 
      src={`${imageUrl}&height=500 and/or &width=500`}
      className="block w-full flex-1 object-cover mb-2"
      loader={
        <div className="lds-dual-ring"></div>
      }
    />
}

export default ImgWrap;