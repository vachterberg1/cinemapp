import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #355C7D;
`;

export const SearchContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Procure filmes por título...',
})`
  background: #e6e7eb;
  flex: 1;
  height: 45px;
  border-radius: 4px;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #ff671a;
  height: 45px;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 4px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ResultsContainer = styled.View`
  flex: 1;
`;

export const ItemView = styled.View`
  background-color: #eeff;
  margin-top: 10px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const Poster = styled.Image`
  background: #666;
  width: 60px;
  height: 80px;
  border-radius: 4px;
`;

export const DescriptionBox = styled.View`
  margin: 0 10px;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const FavIcon = styled(Icon).attrs((props) => ({
  color: props.favorited ? '#65376A' : '#fff',
}))`
  margin: 0 10px;
`;
