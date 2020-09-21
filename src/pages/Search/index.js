import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, FlatList } from 'react-native';

import api from 'axios';

import {
  Container,
  SearchContainer,
  ResultsContainer,
  SearchInput,
  SearchButton,
  ButtonLabel,
  ItemView,
  Poster,
  DescriptionBox,
  Title,
  FavIcon,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  addFavorite,
  removeFromFavorite,
} from '../../store/modules/favorites/actions';

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searching, setSearching] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [favorites, setFavorites] = useState([]);
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const isFavorited = (imdbID) => {
    return favorites.find((favorite) => {
      return favorite.imdbID === imdbID;
    });
  };

  useEffect(() => {
    async function getMovieData() {
      try {
        const response = await api.get(
          `http://www.omdbapi.com/?apikey=925eba28&s=${searchText}&page=${page}`
        );
        const searchResult = response.data.Response ? response.data.Search : [];

        setMovies([...movies, ...searchResult]);

        setSearching(false);
        setPage(page + 1);
      } catch (error) {
        setSearching(false);
      }
    }

    if (searching) {
      getMovieData();
    }
  }, [searching, page]);

  const toggleFavorited = (item) => {
    const favorited = isFavorited(item.imdbID);

    if (favorited) {
      dispatch(removeFromFavorite(item.imdbID));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <Container>
      <Header title="Cinema App - Shtima" />
      <SearchContainer>
        <SearchInput
          onChangeText={(value) => {
            setSearchText(value);
          }}
        />
        <SearchButton
          onPress={() => {
            setMovies([]);
            setSearching(true);
            setPage(1);
          }}
        >
          <ButtonLabel>Buscar</ButtonLabel>
        </SearchButton>
      </SearchContainer>
      <ResultsContainer>
        <FlatList
          style={{ marginTop: 10 }}
          data={movies}
          onEndReached={() => {
            setSearching(true);
          }}
          onEndReachedThreshold={0.1}
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

Search.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Search;
