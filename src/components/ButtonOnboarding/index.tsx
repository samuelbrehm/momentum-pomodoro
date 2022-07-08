import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

import styled from 'styled-components/native'

interface ButtonOnboardingProps extends RectButtonProps {
  text: string
}

export function ButtonOnboarding({ onPress, text }: ButtonOnboardingProps) {
  return (
    <NextButton onPress={onPress}>
      <TextButton>{text}</TextButton>
    </NextButton>
  )
}

const NextButton = styled(RectButton)`
  padding: ${RFValue(24)}px ${RFValue(90)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(65 / 2)}px;

  margin-bottom: ${getBottomSpace() + 24}px;
`

const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.text_primary};
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`
