import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import {AnimationDivParent} from "./style";

function AosAnimation(props) {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <AnimationDivParent>
            <div className={'float-left'} data-aos="fade-up"></div>
            <div className={'float-right'} data-aos="fade-down"></div>
            <div className={'float-left'} data-aos="fade-right"></div>

            <div className={'float-right'} data-aos="fade-left"></div>
            <div className={'float-left'} data-aos="fade-up-right"></div>
            <div className={'float-right'} data-aos="fade-up-left"></div>
            <div className={'float-left'} data-aos="fade-down-right"></div>
            <div className={'float-right'} data-aos="fade-down-left"></div>

            <div className={'float-left'} data-aos="flip-left"></div>
            <div className={'float-right'} data-aos="flip-right"></div>
            <div className={'float-left'} data-aos="flip-up"></div>
            <div className={'float-right'} data-aos="flip-down"></div>


        </AnimationDivParent>
    );
}

export default AosAnimation;