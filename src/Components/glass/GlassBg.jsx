import React from 'react';
import {ContainerDiv , RjDeveloper , Text} from "./styles";
import Courgette from '../../../src/assets/fonts/Courgette-Regular.ttf'
import DancingScript from '../../../src/assets/fonts/DancingScript-VariableFont_wght.ttf'

function GlassBg(props) {
    return (
        <ContainerDiv>
            <RjDeveloper font={Courgette}>RjDeveloper</RjDeveloper>
            <Text font={DancingScript}>Front-End Developer</Text>
        </ContainerDiv>
    );
}

export default GlassBg;