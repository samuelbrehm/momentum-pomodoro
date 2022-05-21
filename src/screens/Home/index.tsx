import React from 'react';

import styled from 'styled-components/native';

export function Home() {
  return (
    <Container>
      <Title>Home Screen</Title>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 24px;
  padding-right: 24px;
`;

const Title = styled.Text`
  font-size: 25px;
  color: #fff;
`;
