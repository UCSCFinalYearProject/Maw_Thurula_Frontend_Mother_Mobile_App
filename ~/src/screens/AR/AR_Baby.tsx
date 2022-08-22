import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback, Linking, Alert, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import AppLink from 'react-native-app-link';

import { useData, useTheme, useTranslation } from "../../hooks";
import { Block, Button, Article, Text } from '../../components/';

import { ViroARSceneNavigator } from '@viro-community/react-viro';
import HelloWorldSceneAR from './imageDetect';
import { useLinking } from '@react-navigation/native';
const AR_Baby = () => {
    const { t } = useTranslation();
    const { following, trending } = useData();
    const [products, setProducts] = useState(following);
    const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
    const data = useData();
    const windowWidth = Dimensions.get('window').width;

    const gotoAR = async (url1: string) => {

        // AppLink.maybeOpenURL("whatsapp", { appName: "", appStoreId: 0, appStoreLocale:"", playStoreId:"" }).then(() => {
        //     // do stuff
        // })
        // .catch((err) => {
        //     // handle error
        // });
        let url = "whatsapp://send"
        Linking.openURL(url)
            .then(data => {
                console.log("WhatsApp Opened successfully " + data);  //<---Success
            })
            .catch(() => {
                alert("Make sure WhatsApp installed on your device");  //<---Error
            });
    }

    return (
        <Block>
            {/* categories list */}

            <Block
                color={colors.card}
                flex={0}
                align={"center"}
                padding={sizes.padding}
                row
                justify='space-between'
                gradients={gradients.tertiary}
            >
                <Block color={colors.card} flex={0} align={"center"} row >
                    <Block flex={0} >
                        <Text font={fonts.bold} >  AR තාක්ෂණය භාවිතයෙන් ඔබේ දරුවා බලන්න </Text>
                        <Text> {t('temp_user.name')} </Text>
                    </Block>
                </Block>
            </Block>

            <Block flex={1} align={"center"}  justify="center" width={windowWidth} style={{ borderColor: "gray", borderWidth: 0 }}  padding={sizes.s}>
                <Block flex={0} align={"center"} radius={50}  style={{ borderColor: "green", borderWidth: 1, backgroundColor: "green"}} padding={sizes.s}>
                    <Text h5 color={"white"}> ආරම්භ කරන්න  </Text>
                </Block>
            </Block>
        </Block>
    );
};

const styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

export default AR_Baby;
