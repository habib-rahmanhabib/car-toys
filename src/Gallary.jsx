import React from 'react';
import Marquee from "react-fast-marquee";

const Gallary = ({toy}) => {
    const {picture}= toy
    return (
        <div>
          <img src={picture}  className='w-full h-[60vh]' alt="" />
        </div>
    );
};

export default Gallary;