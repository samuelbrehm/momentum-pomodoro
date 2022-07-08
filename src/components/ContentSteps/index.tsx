import React from 'react'

import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type LessThan<N extends number, A extends any[] = []> = N extends A['length']
  ? A[number]
  : LessThan<N, [...A, A['length']]>

type NumericRange<F extends number, T extends number> = Exclude<
  T | LessThan<T>,
  LessThan<F>
>

type NumberStep = NumericRange<1, 3>

interface Props {
  numberStepActive: NumberStep
  numberOfSteps: NumberStep
}

function populateArrayWithSteps(param: number): Array<number> {
  const arr = Array.from(Array(param).keys()).map(x => x + 1)
  return arr
}

export function ContentSteps({ numberStepActive, numberOfSteps }: Props) {
  const stepIteractor = populateArrayWithSteps(numberOfSteps)

  return (
    <Container>
      {stepIteractor.map((value, index) => (
        <Step
          key={index}
          isActive={value === numberStepActive ? true : false}
        />
      ))}
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(6)}px ${RFValue(24)}px;
`

interface StepProps {
  isActive: boolean
}

const Step = styled.View<StepProps>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.primary_disabled};
  height: ${RFValue(12)}px;
  width: ${({ isActive }) => (isActive ? RFValue(36) : RFValue(12))}px;
  border-radius: ${RFValue(12 / 2)}px;
  margin-left: ${RFValue(6)}px;
  margin-right: ${RFValue(6)}px;
`
