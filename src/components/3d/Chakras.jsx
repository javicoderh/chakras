import React from "react";
import RootChakra from "./Root";
import SacralChakra from "./Sacral";
import SolarChakra from "./Solar";
import HeartChakra from "./Heart";
import ThroatChakra from "./Throat";
import ThirdEyeChakra from "./Eye";
import CrownChakra from "./Crown";

export default function Chakras() {

    return (
    <div className='chakraContainer'>
        <div className="alignedChakras">
         
        <CrownChakra /> 
        <ThirdEyeChakra />
        <ThroatChakra />
        <HeartChakra />
        <SolarChakra />
        <SacralChakra />
        <RootChakra />
        </div>
        <div className='imgFix'>
        <img className='meditatingSilouete' src='https://www.svgheart.com/wp-content/uploads/2021/11/black-woman-yoga-meditating-free-svg-file-SvgHeart.Com.png' />
        </div>
      </div>
    )
}