import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/CardAnime';
import data from '../../data';
import { Container, Title } from './styles';


const Anime = () => {

    return (
        <>
        <Container>
             <Title>Classicos</Title>
        </Container>
  
  
          <Card />
  
      </>
    )
}



export default Anime