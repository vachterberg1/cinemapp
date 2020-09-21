import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding: 10px 0 0 0;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.type === 'search' ? '#EE7182' : '#725A7A'};
  height: 50px;
  border-radius: 4px;
  margin-left: ${(props) => (props.type === 'favorites' ? '10px' : '0')};
`;

export const FooterText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
`;
