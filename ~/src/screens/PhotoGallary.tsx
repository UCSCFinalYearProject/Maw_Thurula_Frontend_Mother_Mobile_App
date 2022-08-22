import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme, useTranslation} from '../hooks';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components';
import { Dimensions } from 'react-native';

// Photo gallery example

const PhotoGallery = () => {
  const { t } = useTranslation();
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const windowWidth = Dimensions.get('window').width;

  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;

  return (
    <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
      
      <Block>
        <Block row align="center" justify="space-between">
          <Text h5 semibold style={{ paddingBottom: 10}}>
            {t("home.mothers_and_newborns")}
          </Text>
        </Block>
        <Block row justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/nLJZLxyY/fb4c80db7638983ea1d8076a0ff86c72.jpg"}}
            style={{
              width: IMAGE_VERTICAL_SIZE + IMAGE_MARGIN / 2,
              height: IMAGE_VERTICAL_SIZE * 2 + IMAGE_VERTICAL_MARGIN,
            }}
          />
          <Block marginLeft={sizes.m}>
            <Image
              resizeMode="cover"
              source={{uri: "https://i.postimg.cc/4N4q3d21/m2.png"}}
              marginBottom={IMAGE_VERTICAL_MARGIN}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
            <Image
              resizeMode="cover"
              source={{uri: "https://i.postimg.cc/wM2rV8MJ/m3.jpg"}}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
          </Block>
        </Block>
      </Block>
      <Block>
        <Block row paddingTop={20} justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/8kmxDW45/m4.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
           <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/x1gnxhJ0/m11.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/rmS3DtLf/m5.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
         
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/jSRRhtjg/m10.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
         
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/HLxHfzXb/m8.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
           <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/tCrfnjLG/m6.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
        </Block>
        <Block row align="center" justify="center">
          <Button>
            <Text p primary semibold>
              {t('home.load_more')} {t('home.click_here')}...
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};
export default PhotoGallery;
