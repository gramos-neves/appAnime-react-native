import React, {useEffect, useState} from 'react';
import {Container, Title} from './styles';
//import Data from '../../data';
import Card from '../../components/Card';
import api from '../../service/api';
import {View} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
//import { CardImg } from '../Details/styles';
//import data from '../../data';

/*
interface DataProp {
  Data: Array<{
    id: Number;
    attributes:{
      averageRating: String;
      youtubeVideoId: String;
      episodeCount: Number;
      canonicalTitle: String;
      synopsis: String;
      posterImage: {
        medium: String;
      };
   }
 }>;
}*/



const Dashboard = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function load() {
      await api
        .get(`trending/anime`)
        .then((resp) => {
          setData(resp.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    load();
  }, []);

  if (!data) {
    return (
      <View>
        <Container>
          <Title>Popular</Title>
        </Container>
      </View>
    );
  }

  return (
    <>
      <Container>
        <Title>Popular</Title>
      </Container>

       <Card Data={data}  />
    </>
  );
};

export default Dashboard;
