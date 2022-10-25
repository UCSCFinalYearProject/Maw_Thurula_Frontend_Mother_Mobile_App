import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Linking, Platform, StyleSheet, TextInput, TouchableHighlightBase } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useData, useTheme, useTranslation } from '../hooks/';
import * as regex from '../constants/regex';
import { Block, Button, Input, Image, Text, Checkbox } from '../components/';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { baseUrl } from '../API Services/Login_Registrationn';
import axios from 'axios';
import Modal from "react-native-modal";
import { ICONS } from '../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';


const isAndroid = Platform.OS === 'android';

interface IRegistration {
  password: string;
  mobile: number;
}
interface IRegistrationValidation {
  password: boolean;
  mobile: boolean;
}


const Login = (  props: DrawerContentComponentProps<DrawerContentOptions>
) => {
  const { isDark } = useData();
  const { t } = useTranslation();
  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    password: false,
    mobile: false
  });
  const [registration, setRegistration] = useState<IRegistration>({
    password: '',
    mobile: 0
  });

  // const [registration, setRegistration] = useState<IRegistration>({
  //   fname: 'Hansana',
  //   lname: 'Ranaweera',
  //   email: 'hansana876@gmail.com',
  //   password: 'Cybertcc123',
  //   cpassword: 'Cybertcc123',
  //   agreed: true,
  //   mobile: 0
  // });
  const { assets, colors, gradients, sizes } = useTheme();
  const [passwordErrorStatus, setpasswordErrorStatus] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [errorStatusVisibility, setErrorStatusVisibility] = useState(false);
  const handleChange = (Etype: string, data: any) => {
    let temp = registration;
    if (Etype == "3") temp.mobile = data;
    if (Etype == "5") temp.password = data;
    console.log(temp)
    console.log(isValid)


    setRegistration(temp);

    setIsValid((state) => ({
      ...state,
      password: regex.password.test(registration.password),
      mobile: regex.mobile.test(registration.mobile.toString())
    }));

  }
  const {navigation} = props;

  const handleNavigation = useCallback(
    (to) => {
      navigation.navigate("Home");
    },
    [navigation],
  );


  const LoginRequest = async () => {
    // {
    //   first_name: "Hansana",
    //   last_name: "Ranweera",
    //   password: "123qwe123",
    //   email: "hansana871@gmail.com",
    //   DP: "asdasdasdasdasda ",
    //   mobile: "726300787"
    // }
    axios.post(`${baseUrl}/mother/login/`,
      {
        password: registration.password,
        mobile: registration.mobile
      }
      // {
      //   password:"madhuni123455",
      //   mobile: "0726301776",
      // }
    ).then((response) => {
      console.log(response.data);
      storeData(response.data.token);
      // console.log(getData());
      handleNavigation("Home")
    }).catch((error) => {
      if (error.response) {

        setErrorStatus(error.response.data.message)
        setErrorStatusVisibility(true);
        // console.log(error.response.data.message);
        // console.log(error.response.data.status);
      }
    });
  };

  const storeKey = '@storage_Key'
const storeData = async (value : any) => {
  try {
    await AsyncStorage.setItem(storeKey, value)
  } catch (e) {
    // saving error
  }
}


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(storeKey)
    if(value !== null) {
      console.log(value)
      return value;

    }
  } catch(e) {
    // error reading value
  }
}

  const [isLoading, setIsLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState("register");

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
              <Text h3 align='center' paddingTop={10} paddingBottom={10} color="#555555"> {t("common.welcome")} </Text>
              <Text align='center'  >
                {t('common.already_have_an_account')}
              </Text>
              <Block paddingHorizontal={sizes.sm}>

                <Input
                  autoCapitalize="none"
                  maxLength={10}
                  keyboardType="numeric"
                  marginBottom={sizes.m}
                  label={t('common.mobile_number')}
                  placeholder={t('common.mobilePlaceholder')}
                  success={Boolean(registration.mobile && isValid.mobile)}
                  danger={Boolean(registration.mobile && !isValid.mobile)}
                  onChangeText={(value) => handleChange("3", value)}
                />

                <Input
                  secureTextEntry
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={t('common.password')}
                  placeholder={t('common.passwordPlaceholder')}
                  onChangeText={(value) => handleChange("5", value)}
                  success={Boolean(registration.password && isValid.password)}
                  danger={Boolean(registration.password && !isValid.password)}
                />

              </Block>
              {/* checkbox terms */}
              <Modal isVisible={errorStatusVisibility}>
                <Block radius={10} align='center' marginHorizontal={80} flex={0} gradient={gradients.white} paddingHorizontal={50} paddingVertical={20}>
                  <Image
                    background
                    resizeMode="contain"
                    padding={sizes.m}
                    source={ICONS.errorMessage}
                  ></Image>
                  <Text center bold h5 marginVertical={5}
                    color={colors.danger}>Error</Text>

                  <Text center semibold
                    color={colors.danger}
                  >
                    {/* {errorStatus} */}
                    { t('common.invalid_user_login') }

                  </Text >
                  <Button
                    onPress={() => {
                      setErrorStatusVisibility(false);
                    }}
                    height={50}
                    marginVertical={10}
                    paddingHorizontal={10}
                    color={colors.danger}>
                    <Text bold white transform="uppercase">
                      {t('common.try_again')}
                    </Text>
                  </Button>
                </Block>

              </Modal>

              <Button
                onPress={() => {
                  LoginRequest();
                }}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
              >
                <Text bold white transform="uppercase">
                  {t('common.signin')}
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
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
