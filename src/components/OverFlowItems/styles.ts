import { Dimensions } from 'react-native';
import styled from 'styled-components/native';



const {width} = Dimensions.get('screen');
const OVERFLOW_HEIGHT = '80px';
const SPACING = 10;

//OverFlow

export const OverFlowContainer = styled.View`
  height: ${OVERFLOW_HEIGHT};
  overflow: hidden;
  margin-bottom: 80px;
   
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: #3e3e3e;
  text-align:center;
`;

export const ItemContainer = styled.View`
  height: ${OVERFLOW_HEIGHT};
  padding: ${SPACING * 2 + 'px'};
`;

