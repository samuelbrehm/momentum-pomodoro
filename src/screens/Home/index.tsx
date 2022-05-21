import React from 'react';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export function Home() {
  return (
    <Container>
      <Title>Home Screen</Title>

      <Icon name="users" size={60} color="#F22E63" />
      <Icon name="rocket" size={60} color="#521439" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: 25px;
  color: #fff;
`;
