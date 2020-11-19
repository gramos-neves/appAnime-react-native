import { Dimensions } from 'react-native';
import styled from 'styled-components/native';



const {width} = Dimensions.get('screen');
const ITEM_HEIGHT = 450;


export const Container = styled.View`
         background: #f5f3f4;

`

export const CardContainerImg = styled.View`
      height: ${ITEM_HEIGHT + 'px'};
      width: ${width + 'px'};
    
`

export const CardImg = styled.Image`
     flex:1;
`



export const BodyContainer = styled.View`
      padding: 15px;

`

export const TextDescription = styled.Text`
     color: #3e3e3e;
     font-size:15px;
     text-align: justify;
     
`


export const ContainerText = styled.View`
     flex-direction: row;
`


export const ContainerTextBody = styled.View`
     margin-top: 20px;
`

export const LabelText = styled.Text`
     font-weight:bold;
     color:#15b6d6;        
`