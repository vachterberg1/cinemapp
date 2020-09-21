import * as React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Button, FooterText } from './styles';

const Footer = ({ navigation }) => {
  return (
    <Container>
      <Button
        type="search"
        onPress={() => {
          navigation.navigate('Search');
        }}
      >
        <Icon name="search" size={20} color="#fff" />
        <FooterText>Buscar</FooterText>
      </Button>
      <Button
        type="favorites"
        onPress={() => {
          navigation.navigate('Favorites');
        }}
      >
        <Icon name="grade" size={20} color="#fff" />
        <FooterText>Favoritos</FooterText>
      </Button>
    </Container>
  );
};

Footer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Footer;
