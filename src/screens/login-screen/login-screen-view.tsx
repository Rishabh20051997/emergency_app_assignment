

import React, { ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './login-screen-style';

import UIText from '../../widgets/ui-text';
import colors from '../../resources/colors';
import UIPressable from '../../widgets/ui-pressable';
import UITextInput from '../../widgets/input-text';

const LoginScreenView = ({
    userName = '',
    password = '',
    enableUpdateButton = false,
    onUserNameTextChanged = () => { },
    onLogin = () => { },
    onPasswordChangeText = () => { },
}) => {

  /**
   * page Title component - to add the heading/subHeading of the page
   */
  const PageTitleComponent = (): ReactElement => {
    return (
      <View style={styles.headingComponent}>
        <UIText >Welcome Back!</UIText>
        <UIText color={colors.gray_scale.dove_gray}>
          Please Login
        </UIText>
      </View>
    );
  };

  /**
   *
   * @returns login button ui
   */
  const LoginButton = (): ReactElement => {
    return (
      <UIPressable
        disabled={!enableUpdateButton || false}
        onPress={onLogin}
        style={!enableUpdateButton ? styles.loginBtnDisabledElementWrapper:  styles.loginBtnElementWrapper}
      // styles.loginBtnOuterWrapper
      >
        <UIText
          text={'Login'}
          color={colors.gray_scale.white}
        />
      </UIPressable>
    );
  };


  return (
    <View style={styles.rootComponent}>
      
      <ScrollView
        style={styles.component}
        contentContainerStyle={styles.scrollViewContainerStyle}
        contentInsetAdjustmentBehavior="scrollableAxes"
        showsVerticalScrollIndicator={false}>
        <PageTitleComponent />
        {/* phone input */}
        <View>
          <UITextInput
            label={'User Name'}
            keyboardType={"ascii-capable"}
            text={userName}
            onChangeText={onUserNameTextChanged}
            placeholder={'Enter User Name'}
            returnKeyType="next"
            containerStyle={styles.mobileNumberInputTextStyle}
          />
          <UITextInput
            label={'Password'}
            keyboardType="ascii-capable"
            secureTextEntry={true}
            placeholder={'Enter Password'}
            text={password}
            returnKeyType="done"
            onChangeText={onPasswordChangeText}
            containerStyle={styles.passwordInputTextStyle}
          />
        </View>
      </ScrollView>
      <LoginButton />
    </View>
  );
};

export default LoginScreenView;
