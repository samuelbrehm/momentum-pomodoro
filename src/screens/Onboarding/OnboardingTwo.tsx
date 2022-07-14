import React from 'react'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

import { RouteNames, ScreenProps } from '../../navigation/INavigation'

import styled from 'styled-components/native'

import CompleteDesign from '../../resources/assets/complete_design.svg'
import { ContentSteps } from '../../components/ContentSteps'
import { ButtonOnboarding } from '../../components/ButtonOnboarding'

export type IOnboardingTwoProps = ScreenProps<RouteNames.OneboardingTwo>

export function OnboardingTwo({ navigation }: IOnboardingTwoProps) {
  return (
    <Container>
      <ImageTask />

      <ContentHeadingTitle>
        <HeadingTitle numberOfLines={1}>Seja produtivo</HeadingTitle>
        <HeadingTitle numberOfLines={1}>capturando facilmente</HeadingTitle>
        <HeadingTitle numberOfLines={1}>suas demandas</HeadingTitle>
      </ContentHeadingTitle>

      <ContentSteps numberStepActive={2} numberOfSteps={3} />

      <ButtonOnboarding
        text="Próximo"
        onPress={() => navigation.navigate(RouteNames.OneboardingThree)}
      />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: ${props => props.theme.colors.background};
`

const ImageTask = styled(props => <CompleteDesign {...props} />).attrs({
  height: `${RFValue(240)}`,
})`
  margin-top: ${getStatusBarHeight() + RFValue(24)}px;
`

const ContentHeadingTitle = styled.View`
  width: 100%;
  justify-content: space-around;
`

const HeadingTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: ${RFValue(3)}px;
`
