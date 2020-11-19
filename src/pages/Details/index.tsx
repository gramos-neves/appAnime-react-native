import React, {useEffect, useState} from 'react';
import {View, Text, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Container,
  CardContainerImg,
  CardImg,
  BodyContainer,
  TextDescription,
  ContainerText,
  ContainerTextBody,
  LabelText
} from './styles';
import {Link, useRoute} from '@react-navigation/native';

interface DataProps {
  Data: {
    id: Number;
    attributes: {
      averageRating: String;
      youtubeVideoId: String;
      episodeCount: Number;
      canonicalTitle: String;
      synopsis: String;
      posterImage: {
        medium: String;
      };
    };
  };
}

const Details = () => {
  const route = useRoute();
  const params = route.params as DataProps;
  const [data, setData] = useState(params.Data);

  /*
  useEffect(() => {
    console.log(data.attributes.posterImage.medium)
  }, []);
  */

  return (
    <ScrollView>
      <Container>
        <CardContainerImg>
          <CardImg
            resizeMode="stretch"
            source={{uri: data.attributes.posterImage.medium}}
          />
        </CardContainerImg>
        <BodyContainer>
          <TextDescription>{data.attributes.synopsis}</TextDescription>

          <ContainerTextBody>
            <ContainerText>
              <LabelText>Episode </LabelText>
              <Text>{data.attributes.episodeCount}</Text>
            </ContainerText>
            <ContainerText>
              <LabelText>Average Rating </LabelText>
              <Text>{data.attributes.averageRating}</Text>
            </ContainerText>
            <ContainerText>
              <LabelText  >Youtube </LabelText>
              <Text onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${data.attributes.youtubeVideoId}`)} > {data.attributes.canonicalTitle}</Text>
            </ContainerText>
          </ContainerTextBody>
        </BodyContainer>
      </Container>
    </ScrollView>
  );
};

export default Details;
