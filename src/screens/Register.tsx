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

const isAndroid = Platform.OS === 'android';

interface IRegistration {
  fname: string;
  lname: string;
  email: string;
  password: string;
  cpassword: string;
  agreed: boolean;
  mobile: number;
}
interface IRegistrationValidation {
  fname: boolean;
  lname: boolean;
  email: boolean;
  password: boolean;
  cpassword: boolean;
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
    fname: false,
    lname: false,
    email: false,
    password: false,
    cpassword: false,
    agreed: false,
    mobile: false
  });
  const [registration, setRegistration] = useState<IRegistration>({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
    agreed: true,
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
    if (Etype == "1") temp.fname = data;
    if (Etype == "2") temp.lname = data;
    if (Etype == "3") temp.mobile = data;
    if (Etype == "4") temp.email = data;
    if (Etype == "5") temp.password = data;
    if (Etype == "6") temp.cpassword = data;
    if (Etype == "7") temp.agreed = data;
    console.log(temp)
    console.log(isValid)

    if (temp.cpassword != temp.password) {
      setpasswordErrorStatus("Password not match !")
    } else {
      setpasswordErrorStatus("")
    }
    setRegistration(temp);

    setIsValid((state) => ({
      ...state,
      fname: regex.name.test(registration.fname),
      lname: regex.name.test(registration.lname),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      cpassword: regex.password.test(registration.cpassword),
      agreed: registration.agreed,
      mobile: regex.mobile.test(registration.mobile.toString())
    }));

  }

  // useEffect(() => {
  //   setIsValid({
  //     fname: true,
  //     lname: true,
  //     email: true,
  //     password: true,
  //     cpassword: true,
  //     agreed: true,
  //     mobile: true
  //   })
  // }, [])
  

  const RegisterRequest = async () => {
    // {
    //   first_name: "Hansana",
    //   last_name: "Ranweera",
    //   password: "123qwe123",
    //   email: "hansana871@gmail.com",
    //   DP: "asdasdasdasdasda ",
    //   mobile: "726300787"
    // }
    axios.post(`${baseUrl}/mother/register/`,
      {
        first_name: registration.fname,
        last_name: registration.lname,
        password: registration.password,
        email: registration.email,
        DP: registration.fname,
        mobile: registration.mobile
      }
      //  {
      // first_name: "Hansana",
      // last_name: "Ranweera",
      // password: "123qwe123",
      // email: "hansana871@gmail.com",
      // DP: "asdasdasdasdasda ",
      // mobile: "726301787"
    // }
    ).then((response) => {
      console.log(response.data);
      setCurrentMode("otp");
    }).catch((error) => {
      if (error.response) {
        setErrorStatus(error.response.data.message)
        setErrorStatusVisibility(true);
        // setRegistration({
        //   fname: '',
        //   lname: '',
        //   email: '',
        //   password: '',
        //   cpassword: '',
        //   agreed: false,
        //   mobile: 0
        // })
        console.log(error.response.data.message);
        console.log(error.response.data.status);
      }
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState("register");
  const [optCount, setOptCount] = useState(59);

  const handleSignUp = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send/save registratin data */
      console.log('handleSignUp', registration);
      RegisterRequest();
    }
    // setCurrentMode("opt")
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
                        label={t('common.first_name')}
                        placeholder={t('common.firstNamePlaceholder')}
                        success={Boolean(registration.fname && isValid.fname)}
                        danger={Boolean(registration.fname && !isValid.fname)}
                        onChangeText={(value) => handleChange("1", value)}
                      />
                      <Input
                        autoCapitalize="none"
                        marginBottom={sizes.m}
                        label={t('common.last_name')}
                        placeholder={t('common.lastNamePlaceholder')}
                        success={Boolean(registration.lname && isValid.lname)}
                        danger={Boolean(registration.lname && !isValid.lname)}
                        onChangeText={(value) => handleChange("2", value)}
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
                        onChangeText={(value) => handleChange("3", value)}
                      />
                      <Input
                        autoCapitalize="none"
                        marginBottom={sizes.m}
                        label={t('common.email')}
                        keyboardType="email-address"
                        placeholder={t('common.emailPlaceholder')}
                        success={Boolean(registration.email && isValid.email)}
                        danger={Boolean(registration.email && !isValid.email)}
                        onChangeText={(value) => handleChange("4", value)}
                      />
                      <Input
                        secureTextEntry
                        autoCapitalize="none"
                        marginBottom={sizes.m}
                        label={t('common.password')}
                        placeholder={t('common.passwordPlaceholder')}
                        onChangeText={(value) => handleChange("5", value)}
                        success={Boolean(registration.cpassword && isValid.cpassword)}
                        danger={Boolean(registration.cpassword && !isValid.cpassword)}
                      />
                      <Input
                        secureTextEntry
                        autoCapitalize="none"
                        marginBottom={sizes.s}
                        label={t('common.confirm_password')}
                        placeholder={t('common.confirm_passwordPlaceholder')}
                        onChangeText={(value) => handleChange("6", value)}
                        success={Boolean(registration.cpassword && isValid.cpassword)}
                        danger={Boolean(registration.cpassword && !isValid.cpassword)}
                      />

                      <Text semibold
                        color={colors.danger}
                      >
                        {passwordErrorStatus}
                      </Text>
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
                          {errorStatus == "Email already used!" ? t('common.email_already_used') : ""}
                          {errorStatus == "Mobile already used!" ? t('common.mobile_already_used') : ""}
                          
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
                    <Block row flex={0} align="center" paddingHorizontal={sizes.sm}>
                      <Checkbox
                        marginRight={sizes.sm}
                        checked={registration?.agreed}
                        onPress={(value) => handleChange("7", value)}
                      />
                      <Text paddingRight={sizes.s}>
                        {t('common.terms')} {" "}
                        <Text
                          semibold
                          onPress={() => {
                            Linking.openURL('https://google.com');
                          }}>
                          {t('common.agree')}
                        </Text>
                      </Text>
                    </Block>
                    <Button
                      onPress={() => {
                        RegisterRequest();
                      }}
                      marginVertical={sizes.s}
                      marginHorizontal={sizes.sm}
                      gradient={gradients.primary}
                      >
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
                currentMode == 'otp' ?
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
                          onChangeText={(value) => handleChange( "7" , value)}
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
                          onChangeText={(value) => handleChange("8" , value)}
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
                          onChangeText={(value) => handleChange("9" , value)}
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
                          onChangeText={(value) => handleChange("10" , value)}
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
                          navigation.navigate("Signin");
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
