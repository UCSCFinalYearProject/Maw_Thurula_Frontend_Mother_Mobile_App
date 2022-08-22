import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableHighlightBase } from 'react-native';

import { useData, useTheme, useTranslation } from '../../hooks';
import { IArticle, ICategory } from '../../constants/types';
import { Block, Button, Article, Text, Image, Input, Product } from '../../components';
import TrendingArticleCard from '../../components/Articles/TrendingArticleCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import AllArticleList from '../MainArticles/AllArticleList';
import PostComponent from '../../components/community/Post';
import { Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const Tools = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
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

  const [topArticles, settopArticles] = useState([{
    id: 1,
    type: 'vertical',
    title: 'ඇස්තමේන්තුගත ඩිලිවරි දිනය සොයාගන්න',
    image:
      'https://www.verywellfamily.com/thmb/h2OarVPI1fr8hQ18dh5HwEXcadE=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-149262782-56a772375f9b58b7d0ea9430.jpg',
    to: "edd"
  },
  {
    id: 2,
    type: 'vertical',
    title: 'සාරවත් දින කැල්ක්යුලේටරය.',
    image:
      'https://www.carefreearabia.com/sites/carefree_menap/files/monthly-essentials/35-how-to-calculate-the-date-of-ovulation-760-638.jpg',
      to: "ovulation"
  },
  {
    id: 3,
    type: 'horizontal',
    title: 'හොඳ සහ සුදුසු ගැලපෙන ළදරු නමක් තෝරා ගැනීම.',
    image:
      'https://i.postimg.cc/HsrGgqD6/651478996-H-696x476.jpg',
  }])
  return (
    <Block  >
     <Block
          flex={0}
          align={"center"}
          row
          justify='space-between'
          gradients={gradients.tertiary}
        >
        </Block>

        <Block
          scroll
          paddingHorizontal={sizes.padding}
          showsVerticalScrollIndicator={false}
          marginBottom={10}>
          <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>

            <Block
              flex={0}
              align={"center"}
              justify="center"
              width={"100%"}
              paddingBottom={20}
            >
              <Block
                flex={0}
                align={"center"}
              >
                <Text
                  font={fonts.bold} size={sizes.sm} color={colors.dribbble} > මෙවලම්
                </Text>
              </Block>
            </Block>
            {topArticles?.map((article: any, index: Number) => (
              <Button onPress={ () => {
                handleNavigation(article.to)
              }}>
                <Product {...article} key={`card-${article?.id + index}`} />
              </Button>
            ))}
          </Block>
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

export default Tools;
