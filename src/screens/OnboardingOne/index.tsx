import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import CompleteDesign from '../../resources/assets/complete_design.svg';

export function OnboardingOne() {
  return (
    <Container>
      <ImageTask />

      <ContentHeadingTitle>
        <HeadingTitle numberOfLines={1}>Gerencie facilmente</HeadingTitle>
        <HeadingTitle numberOfLines={1}>seu tempo e</HeadingTitle>
        <HeadingTitle numberOfLines={1}>suas tarefas com</HeadingTitle>
        <HeadingTitle numberOfLines={1}>Momentum</HeadingTitle>
      </ContentHeadingTitle>

      <ContentSteps>
        <Step isActive={true} />
        <Step isActive={false} />
        <Step isActive={false} />
      </ContentSteps>

      <NextButton>
        <TextButton>Próximo</TextButton>
      </NextButton>
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

const ContentSteps = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(6)}px ${RFValue(24)}px;
`;

interface StepProps {
  isActive: boolean;
}

const Step = styled.View<StepProps>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.primary_disabled};
  height: ${RFValue(12)}px;
  width: ${({ isActive }) => (isActive ? RFValue(36) : RFValue(12))}px;
  border-radius: ${RFValue(12 / 2)}px;
  margin-left: ${RFValue(6)}px;
  margin-right: ${RFValue(6)}px;
`;

const NextButton = styled(RectButton)`
  height: ${RFValue(65)}px;
  width: ${RFValue(240)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(65 / 2)}px;

  margin-bottom: ${getBottomSpace() + 24}px;
`;

const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.text_primary};
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
