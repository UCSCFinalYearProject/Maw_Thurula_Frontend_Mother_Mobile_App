import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native';

import { useData, useTheme, useTranslation } from "../../hooks";
import { Block, Button, Article, Text } from '../../components/';

import {ViroARSceneNavigator } from '@viro-community/react-viro';
import HelloWorldSceneAR from './imageDetect';
const AR_Baby = () => {
    const { t } = useTranslation();
    const { following, trending } = useData();
    const [products, setProducts] = useState(following);
    const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
    const data = useData();
    const windowWidth = Dimensions.get('window').width;
   

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
                        <Text font={fonts.bold} >  {t('pregnancy_tracker.Pregnancy_Tracking')}</Text>
                        <Text> {t('temp_user.name')} </Text>
                    </Block>
                </Block>
                <Block flex={0} align={"center"} radius={50} width={150} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}>
                    <Text> AR  </Text>
                </Block>
            </Block>

            <Block>
            
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
