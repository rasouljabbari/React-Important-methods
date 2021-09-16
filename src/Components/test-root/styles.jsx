import styled from "styled-components";

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
export const Wrapper = styled.section`
  padding: 4em;
  background: #fcebd2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Title = styled.h1`
  font-size: 34px;
  color: palevioletred;
  font-family: Roboto;
`;

// Create a <Text> react component that renders an <p> which is
// centered, #61dafb and sized at 16px
export const Text = styled.div`
  color: #61dafb;
  font-size: 20px;
`;
export const Description = styled.p`
  color: #212121;
  font-size: 16px;
  margin-bottom: 2rem;
`;
export const ButtonRed = styled.button`
  background-color: lightpink;
  color: red;
  padding: 1rem 3rem;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 2rem;
  width: fit-content;
`
export const ButtonBgRed = styled.button`
  background-color: red;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 2rem;
  width: fit-content;
`

export const ButtonBlue = styled.button`
  background-color: lightblue;
  color: Blue;
  padding: 1rem 3rem;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 2rem;
  width: fit-content;
`