import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableHighlightBase } from 'react-native';

import { useData, useTheme, useTranslation } from '../../hooks';
import { IArticle, ICategory } from '../../constants/types';
import { Block, Button, Article, Text, Image, Input } from '../../components';
import TrendingArticleCard from '../../components/Articles/TrendingArticleCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import AllArticleList from '../MainArticles/AllArticleList';
import PostComponent from '../../components/community/Post';
import { Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const WeightGainCal = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const data = useData();
  const [Prediatrician, setPrediatrician] = useState<IArticle[]>([]);
  const { navigation } = props;
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const { following, trending } = useData();
  const [products, setProducts] = useState(following);
  const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
  const windowWidth = Dimensions.get('window').width;

  const handleNavigation = (name: string) => {
    navigation.navigate(name);
  }
  const months_sinhala = ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"];
  const d = new Date();
  let month = months_sinhala[d.getMonth()];
  let date = d.getDay();
  const p_weeks = [];
  for (let i = 1; i <= 40; i++) {
    p_weeks.push(i);
  }
  return (
    <Block  >
     <Block
          flex={0}
          align={"center"}
          padding={sizes.padding}
          row
          justify='space-between'
          gradients={gradients.tertiary}
        >
        </Block>
    </Block>
  );
};


const styles = StyleSheet.create({
  user_avatart: {
    height: 40,
    width: 40
  },
  profile: {
    height: 70,
    width: 70
  },
  post_content: {
    backgroundColor: "gray",
    height: 400,

  }
});

export default WeightGainCal;
