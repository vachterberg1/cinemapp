import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Welcome } from './styles';

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Welcome>Bem-vindo ao mundo espetacular do cinema</Welcome>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
