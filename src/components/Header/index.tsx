import React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import {HeaderContainer} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  function handleGoTo(name: any) {
    navigation.navigate(name);
  }

  return (
    <HeaderContainer>
      <BorderlessButton onPress={() => handleGoTo('dashboard')}>
        <Feather name="star" size={24} color="#15b6d6" />
      </BorderlessButton>
      <BorderlessButton onPress={() => handleGoTo('anime')}>
        <Feather name="smile" size={24} color="#15b6d6" />
      </BorderlessButton>
      <BorderlessButton onPress={() => handleGoTo('search')}>
        <Feather name="search" size={24} color="#15b6d6" />
      </BorderlessButton>
    </HeaderContainer>
  );
};

export default Header;
