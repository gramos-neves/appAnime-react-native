import React from 'react';
import { Animated } from 'react-native';
import { ItemContainer, OverFlowContainer, Title } from './styles';

interface Datav {
    data: Array<{
      attributes:{
         canonicalTitle: String
      }
        }>;
    scrollXAnimated: any;
  }


const OverFlowItems = ({data, scrollXAnimated}: Datav) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [80, 0, -80],
  });
     

    return (
        <OverFlowContainer>
          <Animated.View style={{transform: [{translateY}]}}>
            {data.map((item, index) => {
              return (
                <ItemContainer key={index}>
                  <Title>{item.attributes.canonicalTitle}</Title>
                </ItemContainer>
              );
            })}
          </Animated.View>
        </OverFlowContainer>
      );
}


export default OverFlowItems