import React, { FC } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'
import IconFont from './IconFont'
import BackIconButton from './BackIconButton'

interface IProps {
  /**
   * 输入框占位文本
   */
  placeholder?: string
  /**
   * 输入绑定值
   */
  value?: string

  /**
   * 在 Input 值改变时触发
   * @param newValue 新值
   * @returns
   */
  onChangeText?: (newText: string) => void

  /**
   *
   *  点击查询
   */
  onSearch?: () => void
}

const SearchBar: FC<IProps> = props => {
  return (
    <View style={styles.searchWrapper}>
      <BackIconButton style={styles.leftWrapper} />
      <View style={styles.inputWrapper}>
        <IconFont name="sousuo" size={16} color={Colors.text.lightGray} />
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={Colors.input.placeholderTextColor}
          style={styles.inputStyle}
          value={props.value}
          onChangeText={props.onChangeText}
          autoComplete="off"
          returnKeyType="search"
          onSubmitEditing={props.onSearch}
        />
      </View>

      <TouchableOpacity activeOpacity={0.6} onPress={props.onSearch}>
        <CustomText fontFamily="Medium" style={styles.searchText}>
          收索
        </CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: 15,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.mintyGray,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: Colors.ultralightGray,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 8,
  },
  inputStyle: {
    color: Colors.text.primary,
    fontSize: 12,
    fontFamily: 'PingFang-SC-Regular',
    flex: 1,
  },
  leftWrapper: {
    paddingRight: 3,
  },
  searchText: {
    color: Colors.text.mediumGray,
    fontSize: 12,
    paddingLeft: 15,
  },
})
