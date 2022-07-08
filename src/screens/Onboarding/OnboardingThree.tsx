import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import CompleteDesign from '../../resources/assets/complete_design.svg';
import { ContentSteps } from '../../components/ContentSteps';
import { ButtonOnboarding } from '../../components/ButtonOnboarding';

export function OnboardingThree() {
  return (
    <Container>
      <ImageTask />

      <ContentHeadingTitle>
        <HeadingTitle numberOfLines={1}>Aumente sua produtividade</HeadingTitle>
        <HeadingTitle numberOfLines={1}>e tenha sucesso</HeadingTitle>
        <HeadingTitle numberOfLines={1}>nos seus projetos</HeadingTitle>
      </ContentHeadingTitle>

      <ContentSteps numberStepActive={3} numberOfSteps={3} />

      <ButtonOnboarding text="Começar" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ImageTask = styled(CompleteDesign).attrs({
  height: `${RFValue(240)}`,
})`
  margin-top: ${getStatusBarHeight() + RFValue(24)}px;
`;

const ContentHeadingTitle = styled.View`
  width: 100%;
  justify-content: space-around;
`;

const HeadingTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: ${RFValue(3)}px;
`;
