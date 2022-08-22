import React, { useLayoutEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useHeaderHeight } from '@react-navigation/stack';

import { useTheme, useTranslation } from '../../hooks';
import { Block, Button, Input, Image, Switch, Modal, Text } from '../../components';
import { Dimensions } from 'react-native';

// Photo gallery example

const LandingCoursol = () => {
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
      <Block
        flex={0}
        paddingTop={2}
        paddingBottom={10}>
        <Text
          p semibold marginBottom={sizes.s}
          size={sizes.sm} color={colors.dribbble} >
          {t('home.this_week')} {t('home.trending')} {t('home.article')}
        </Text>
      </Block>
      {/* carousel example */}
      <Block marginBottom={sizes.xxl}>
        <Image
          resizeMode="cover"
          height={200}
          source={{ uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs" }}
          style={{ width: '100%' }}
        />
        <Text p secondary marginTop={sizes.sm}>
          Private Room • 1 Guests • 1 Sofa
        </Text>
        <Text h4 marginVertical={sizes.s}>
          Single room in center
        </Text>
        <Text p lineHeight={26}>
          As Uber works through a huge amount of internal management turmoil,
          the company is also consolidating.
        </Text>
      </Block>
    </Block>
  );
};
export default LandingCoursol;
