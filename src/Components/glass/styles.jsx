import styled from "styled-components";
import Image from '../../../src/assets/images/download.jpg'
export const BackgroundDiv = styled.div`
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
`

export const ContainerDiv = styled.div`
  background-image: url(${Image});
  //background-image: url(https://d33wubrfki0l68.cloudfront.net/b4759e96fa9ada8ee8caa4c771fcd503f289d791/6de77/static/triangle_background-9df4fa2e10f0e294779511e99083c2bc.jpg);
  //background-image: linear-gradient(to right, #8360c3, #2ebf91);
  //background-image: linear-gradient(to right, #ff6e7f, #bfe9ff);
  background-size: cover;
  //background-color: red;
  opacity: 0.85;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(5px);
    background: inherit;
    width: 100%;
    height: 100%;
    //@media (max-width: 992px) {
    //  width: 100%;
    //  height: 600px;
    //}
`

export const RjDeveloper = styled.h1`
  @font-face {
    font-family: Courgette;
    //src: url(../../../src/assets/fonts/DancingScript-VariableFont_wght.ttf);
    src: url(${props => props.font});
  }
  font-family: Courgette !important;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 150px;
  color: #000;
`
export const Text = styled.h1`
  @font-face {
    font-family: DancingScript;
    //src: url(../../../src/assets/fonts/DancingScript-VariableFont_wght.ttf);
    src: url(${props => props.font});
  }
  font-family: DancingScript !important;
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
`