import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Linking, Platform, StyleSheet, TextInput, TouchableHighlightBase } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useData, useTheme, useTranslation } from '../hooks/';
import * as regex from '../constants/regex';
import { Block, Button, Input, Image, Text, Checkbox } from '../components/';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';


const isAndroid = Platform.OS === 'android';

interface IRegistration {
  name: string;
  email: string;
  password: string;
  agreed: boolean;
  mobile: number;
}
interface IRegistrationValidation {
  name: boolean;
  email: boolean;
  password: boolean;
  agreed: boolean;
  mobile: boolean;

}

const Register = (  
  ) => {
    // const {navigation} = props;
  const { isDark } = useData();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    name: false,
    email: false,
    password: false,
    agreed: false,
    mobile: false
  });
  const [registration, setRegistration] = useState<IRegistration>({
    name: '',
    email: '',
    password: '',
    agreed: false,
    mobile: 0
  });
  const { assets, colors, gradients, sizes } = useTheme();

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({ ...state, ...value }));
    },
    [setRegistration],
  );
  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.name.test(registration.name),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
      mobile: regex.mobile.test(registration.mobile.toString())
    }));
  }, [registration, setIsValid]);

  const [isLoading, setIsLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState("register");
  const [optCount, setOptCount] = useState(59);


  const handleSignUp = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send/save registratin data */
      console.log('handleSignUp', registration);
    }
    setCurrentMode("opt")
  }, [isValid, registration]);




  const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },

    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },

    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },

    optInput: {
      borderColor: colors.gray,
      borderWidth: 2,
      borderRadius: 15,
      height: 80,
      fontSize: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"

    }
  });
  const refInput2 = React.useRef();
  const refInput3 = React.useRef();
  const refInput4 = React.useRef();
  return (
    <Block safe  >
      <Block scroll>
        <Block flex={0} style={{ zIndex: 0 }}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            source={assets.background}
            height={sizes.height * 0.55}>

            {/* <Text h4 center white marginBottom={sizes.md}>
              {t('register.title')}
            </Text> */}

            <Block
              flex={0}
              paddingTop={30}
              justify={"center"}
              align={"center"}
            >

              <Image
                radius={0}
                width={300}
                height={300}
                source={assets.logoWithLable}
              >
              </Image>
            </Block>
          </Image>
        </Block>
        {/* register form */}
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          marginTop={-(sizes.height * 0.2 - sizes.l)}>
          <Block
            flex={0}
            radius={sizes.sm}
            // marginHorizontal="8%"
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
          >
            <Block
              card
              flex={0}
              intensity={90}
              overflow="hidden"
              justify="space-evenly"
              paddingVertical={sizes.sm}>

              {
                currentMode == "register" ?
                  <>
                    <Text h3 align='center' paddingTop={10} paddingBottom={10} color="#555555"> {t("common.welcome")} </Text>
                    <Text align='center'  >
                      {t('common.already_have_an_account')}
                    </Text>
                    <Block paddingHorizontal={sizes.sm}>
                      <Input
                        autoCapitalize="none"
                        marginBottom={sizes.m}
                        label={t('common.name')}
                        placeholder={t('common.namePlaceholder')}
                        success={Boolean(registration.name && isValid.name)}
                        danger={Boolean(registration.name && !isValid.name)}
                        onChangeText={(value) => handleChange({ name: value })}
                      />
                      <Input
                        autoCapitalize="none"
                        maxLength={10}
                        keyboardType="numeric"
                        marginBottom={sizes.m}
                        label={t('common.mobile_number')}
                        placeholder={t('common.mobilePlaceholder')}
                        success={Boolean(registration.mobile && isValid.mobile)}
                        danger={Boolean(registration.mobile && !isValid.mobile)}
                        onChangeText={(value) => handleChange({ mobile: value })}
                      />
                      <Input
                        autoCapitalize="none"
                        marginBottom={sizes.m}
                        label={t('common.email')}
                        keyboardType="email-address"
                        placeholder={t('common.emailPlaceholder')}
                        success={Boolean(registration.email && isValid.email)}
                        danger={Boolean(registration.email && !isValid.email)}
                        onChangeText={(value) => handleChange({ email: value })}
                      />
                      <Input
                        secureTextEntry
                        autoCapitalize="none"
                        marginBottom={sizes.m}
                        label={t('common.password')}
                        placeholder={t('common.passwordPlaceholder')}
                        onChangeText={(value) => handleChange({ password: value })}
                        success={Boolean(registration.password && isValid.password)}
                        danger={Boolean(registration.password && !isValid.password)}
                      />
                    </Block>
                    {/* checkbox terms */}
                    <Block row flex={0} align="center" paddingHorizontal={sizes.sm}>
                      <Checkbox
                        marginRight={sizes.sm}
                        checked={registration?.agreed}
                        onPress={(value) => handleChange({ agreed: value })}
                      />
                      <Text paddingRight={sizes.s}>
                        {t('common.terms')} {" "}
                        <Text
                          semibold
                          onPress={() => {
                            Linking.openURL('https://www.creative-tim.com/terms');
                          }}>
                          {t('common.agree')}
                        </Text>
                      </Text>
                    </Block>
                    <Button
                      onPress={() => {
                        handleSignUp();
                      }}
                      marginVertical={sizes.s}
                      marginHorizontal={sizes.sm}
                      gradient={gradients.primary}
                      disabled={Object.values(isValid).includes(false)}>
                      <Text bold white transform="uppercase">
                        {t('common.signup')}
                      </Text>
                    </Button>
                    <Block
                      row
                      flex={0}
                      align="center"
                      justify="center"
                      marginBottom={sizes.sm}
                      paddingHorizontal={sizes.xxl}
                      marginTop={15}>

                      <Block
                        flex={0}
                        height={1}
                        width="50%"
                        end={[1, 0]}
                        start={[0, 1]}
                        gradient={gradients.divider}

                      />
                      <Text center marginHorizontal={sizes.s} >
                        {/* {t('common.or')} */} All right reserved. (2022)
                      </Text>
                      <Block
                        flex={0}
                        height={1}
                        width="50%"
                        end={[0, 1]}
                        start={[1, 0]}
                        gradient={gradients.divider}
                      />
                    </Block>
                  </> : null
              }
              {
                currentMode == 'opt' ?
                  <>
                    <Text h3 align='center' paddingTop={50} paddingBottom={10} color="#555555"> {t("common.otp_varification")} </Text>
                    <Text align='center' paddingHorizontal={10}  >
                      {t('common.enter_opt')}
                    </Text>
                    <Block flex={1} paddingVertical={80} justify="center" paddingHorizontal={sizes.sm} row >
                      <Block margin={10} >
                        <TextInput
                          maxLength={1}
                          style={styles.optInput}
                          textAlign={'center'}
                          keyboardType="number-pad"
                          onChangeText={(value) => handleChange({ name: value })}
                          autoFocus={true}
                          returnKeyType="next"
                          onSubmitEditing={() => refInput2.current.focus()}
                        />
                      </Block>
                      <Block margin={10}>
                        <TextInput
                          textAlign={'center'}
                          style={styles.optInput}
                          maxLength={1}
                          keyboardType="number-pad"
                          onChangeText={(value) => handleChange({ name: value })}
                          returnKeyType="next"
                          onSubmitEditing={() => refInput3.current.focus()}
                          ref={refInput2}
                        />
                      </Block>
                      <Block margin={10}>
                        <TextInput
                          textAlign={'center'}
                          style={styles.optInput}
                          maxLength={1}
                          keyboardType="number-pad"
                          onChangeText={(value) => handleChange({ name: value })}
                          returnKeyType="next"
                          onSubmitEditing={() => refInput4.current.focus()}
                          ref={refInput3}
                        />
                      </Block>
                      <Block margin={10}>
                        <TextInput
                          textAlign={'center'}
                          style={styles.optInput}
                          maxLength={1}
                          keyboardType="number-pad"
                          onChangeText={(value) => handleChange({ name: value })}
                          ref={refInput4}
                        />
                      </Block>

                    </Block>
                    <Block paddingBottom={100}>
                      <Text align='center' transform="uppercase">
                        {t('common.resend')} 00:{optCount}
                      </Text>
                      <Button
                        marginVertical={sizes.s}
                        marginHorizontal={sizes.sm}
                        gradient={gradients.primary}
                        onPress={() => {
                          setCurrentMode("welcome")
                        }}
                      >
                        <Text bold white transform="uppercase">
                          {t('common.confim_otp')}
                        </Text>
                      </Button>
                    </Block>
                  </> : null
              }
              {
                currentMode == 'welcome' ?
                  <>
                    <Text h3 align='center' paddingTop={100} paddingBottom={10} color="#555555">{t("app.name")} {t("common.welcome_to_mawthurula")} </Text>
                    <Text align='center' paddingHorizontal={10}  >
                      {t('common.welcome_sub_text')}
                    </Text>
                    {/* <Block flex={1} paddingVertical={80} justify="center" paddingHorizontal={sizes.sm} row > </Block> */}
                    <Block paddingBottom={202} paddingTop={50}>

                      <Button
                        marginVertical={sizes.s}
                        marginHorizontal={sizes.sm}
                        gradient={gradients.primary}
                        onPress={() => {
                          navigation.navigate("Home");
                        }}
                      >
                        <Text bold white transform="uppercase">
                          {t('common.to_home_page')}
                        </Text>
                      </Button>
                    </Block>
                    <Block
                      row
                      flex={0}
                      align="center"
                      justify="center"
                      marginBottom={sizes.sm}
                      paddingHorizontal={sizes.xxl}
                      marginTop={15}>

                      <Block
                        flex={0}
                        height={1}
                        width="50%"
                        end={[1, 0]}
                        start={[0, 1]}
                        gradient={gradients.divider}

                      />
                      <Text center marginHorizontal={sizes.s} >
                        {/* {t('common.or')} */} All right reserved. (2022)
                      </Text>
                      <Block
                        flex={0}
                        height={1}
                        width="50%"
                        end={[0, 1]}
                        start={[1, 0]}
                        gradient={gradients.divider}
                      />
                    </Block>
                  </> : null

              }
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Register;
