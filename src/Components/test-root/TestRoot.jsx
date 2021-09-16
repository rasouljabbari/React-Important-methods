import React from 'react';
import {Text, Title, Wrapper, ButtonRed, ButtonBlue, ButtonBGBlue, ButtonBgRed , Description} from "./styles";

function TestRoot(props) {
    const formHandler = () => {
        console.log('click btn')
    }
    return (
        <>
        <Wrapper>
            <Title>Hello Rasoul Jabbari</Title>
            <Text>Are you a web developer ?</Text>
            <Description>Yes I'm a website <b>Front-End</b> developer. </Description>
            <ButtonRed onClick={formHandler}>Happy programmer day.</ButtonRed>
            <ButtonBgRed onClick={formHandler}>Happy programmer day.</ButtonBgRed>
            <ButtonBlue onClick={formHandler}>Blue Button</ButtonBlue>
            {/*<ButtonBGBlue onClick={formHandler}>Blue Button</ButtonBGBlue>*/}
        </Wrapper>
        </>

    );
}

export default TestRoot;