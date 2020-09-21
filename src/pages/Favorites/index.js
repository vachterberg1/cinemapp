import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, FlatList } from 'react-native';
import { removeFromFavorite } from '../../store/modules/favorites/actions';

import {
  Container,
  ResultsContainer,
  ItemView,
  Poster,
  DescriptionBox,
  Title,
  FavIcon,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Favorites = ({ navigation }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const toggleFavorited = async (clickedMovie) => {
    dispatch(removeFromFavorite(clickedMovie.imdbID));
  };

  const isFavorited = (imdbID) => {
    return favorites.find((favorite) => {
      return favorite.imdbID === imdbID;
    });
  };

  return (
    <Container>
      <Header title="Cinema APP - Favoritos" />
      <ResultsContainer>
        <FlatList
          // style={{ marginTop: 5 }}
          data={favorites}
          renderItem={({ item }) => (
            <ItemView>
              <Poster source={{ uri: item.Poster }} />
              <DescriptionBox>
                <Title>{item.Title}</Title>
                <Text>Ano: {item.Year}</Text>
              </DescriptionBox>
              <FavIcon
                name="grade"
                size={30}
                favorited={isFavorited(item.imdbID)}
                onPress={() => {
                  toggleFavorited(item);
                }}
              />
            </ItemView>
          )}
          keyExtractor={(item) => item.imdbID}
        />
      </ResultsContainer>
      <Footer navigation={navigation} />
    </Container>
  );
};

Favorites.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Favorites;
