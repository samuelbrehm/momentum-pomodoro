import React from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';

import AddTasks from '../../resources/assets/add_tasks.svg';

export function Home() {
  return (
    <Container>
      <ImageHome />
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
  padding-left: 24px;
  padding-right: 24px;
`;

const Title = styled.Text`
  font-size: 25px;
  color: #fff;
`;

const ImageHome = styled(AddTasks).attrs({
  width: '100%',
  height: `${RFValue(200)}`,
})`
  margin-bottom: 48px;
`;
