import React from 'react';
import { SvgProps } from 'react-native-svg';
import GasolineSvg from '../../assets/gasoline.svg';

import {
    Container,
    Title

} from './styles';

interface Props {

    title: string;
    color?: string;
    onPress: () => void;
}

export function Button({ 
    title, 
    color,
    ...rest
}: Props) {

    return (

        <Container {...rest} color={color} >
            <Title>{title}</Title>
        </Container>

    );

}