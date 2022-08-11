import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import { useData, useTheme, useTranslation } from "../../hooks";
import {Block, Button, Article, Text} from '../../components/';

const PregnancyTracker = () => {
    const { t } = useTranslation();
    const { following, trending } = useData();
    const [products, setProducts] = useState(following);
    const { assets, colors, fonts, gradients, sizes } = useTheme();
    const data = useData();

  return (
    <Block>
      {/* categories list */}
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: -sizes.padding, y: 0}}>
          
        </Block>
      </Block>

      {/* <FlatList
        data={articles}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item?.id}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => <Article {...item} />}
      /> */}
    </Block>
  );
};

export default PregnancyTracker;
