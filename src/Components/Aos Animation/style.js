import styled from "styled-components";

export const AnimationDivParent = styled.div`
  width: 100%;

  div {
    width: 300px;
    height: 200px;
    border: 10px solid #61dafb;
    background: #101f42;
    display: block;
    margin-bottom: 10rem;

    &.float-left {
      margin-left: 0;
      margin-right: auto;
    }

    &.float-right{
      margin-left: auto;
      margin-right: 0;
    }
`