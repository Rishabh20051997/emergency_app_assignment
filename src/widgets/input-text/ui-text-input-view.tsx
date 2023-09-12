import React from 'react';
import {View, TextInput} from 'react-native';




import {styles} from './ui-text-input-styles';
import UIText from '../ui-text';
import colors from '../../resources/colors';


/**
 * Widget to render customizable text
 * @param {IUITextInputViewProps} props
 * @returns
 */
const UITextInput: React.FunctionComponent<IUITextInputViewProps> = ({
  containerStyle,
  label,
  text,
  setText,
  defaultValue='',
  placeholder,
  ref,
  keyboardType = 'default',
  secureTextEntry = false,
  maxLength = 1024,
  returnKeyType = 'done',
  icon = <></>,
  onFocus = () => {},
  onChangeText,
  onSubmitEditing = () => {},
}) => {
  return (
    <View style={containerStyle}>
      {label && (
        <UIText

          color={colors.gray_scale.mine_shaft}>
          {label}
        </UIText>
      )}
      <View style={styles.textInputComponent}>
        <TextInput
          style={[
            styles.textInputStyle,
          ]}
          value={text}
          onChangeText={setText ? setText : onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          ref={ref}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          defaultValue={defaultValue}
          placeholderTextColor={colors.gray_scale.boulder}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
        />
        {icon}
      </View>
    </View>
  );
};

export default UITextInput;
