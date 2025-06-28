import React, { FC, Fragment } from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '@/constants/Colors'

import CustomRadio from './CustomRadio'
import CustomText from './CustomText'

const Line: FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <View
      style={{
        flex: 1,
        height: 1,
        backgroundColor: isActive ? Colors.jungleGreen : Colors.text.glacier,
      }}
    ></View>
  )
}

interface IStepProps {
  /**
   * 当前进度步骤
   */
  currentStepNum: number
  /**
   * 步骤列表
   */
  stepList: string[]
}

const Steps: FC<IStepProps> = ({ currentStepNum, stepList }) => {
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {stepList.map((_, index) => {
          return (
            <Fragment key={index}>
              <CustomRadio checked={currentStepNum > index} />
              {index === stepList.length - 1 ? null : (
                <Line isActive={currentStepNum > index} />
              )}
            </Fragment>
          )
        })}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {stepList.map((stepName, index) => {
          return (
            <CustomText
              style={[
                styles.stepText,
                {
                  color:
                    currentStepNum > index
                      ? Colors.jungleGreen
                      : Colors.text.glacier,
                },
              ]}
              key={index}
            >
              {stepName}
            </CustomText>
          )
        })}
      </View>
    </>
  )
}

export default Steps

const styles = StyleSheet.create({
  stepText: {
    fontSize: 12,
    color: Colors.jungleGreen,
  },
})
