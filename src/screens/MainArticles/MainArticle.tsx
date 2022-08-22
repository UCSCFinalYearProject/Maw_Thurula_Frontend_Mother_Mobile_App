import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useData, useTheme, useTranslation } from '../../hooks';
import { IArticle, ICategory } from '../../constants/types';
import { Block, Button, Article, Text, Image, Input } from '../../components';
import TrendingArticleCard from '../../components/Articles/TrendingArticleCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import AllArticleList from './AllArticleList';


const PrediatrcianArticle = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const data = useData();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const { navigation } = props;
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const { following, trending } = useData();
  const [products, setProducts] = useState(following);
  const { assets, colors, fonts, gradients, sizes, icons } = useTheme();


  // init articles
  useEffect(() => {
    setArticles(data?.articles);
    setArticles([
      {
        id: 22,
        title: "ග්‍රාමීය ශ්‍රී ලංකාවේ නව යොවුන් වියේ ගැබ්ගැනීම් වල සැඟවුණු බර;ss",
        description: "කොරොන වයිරස් රෝගය 2019 (COVID-19) ශ්‍රී ලංකාව ඇතුළු ලොව පුරා මිනිසුන් දහස් ගණනකට බලපා ඇත. දෙමව්පියන් හෝ මව්වරුන් වශයෙන්, මෙම වෛරසය ගැන කනස්සල්ලට පත්වීම ස්වභාවිකය. කෙසේ වෙතත්, COVID-19 පිළිබඳ දැනුමෙන් සන්නද්ධ වීමෙන් - ඔබ ගැබ්ගෙන සිටියත්, හෝ මව්කිරි දෙන මව්වරුන් ඇතුළු දෙමාපියෙකු වුවත් - ඔබට මෙම රෝගය පැතිරීම හේතුවෙන් ඔබට අත්විඳිය හැකි ඕනෑම කාංසාවක් වඩාත් හොඳින් කළමනාකරණය කිරීමට හෝ වළක්වා ගැනීමට හැකිය.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs",
        category: { "id": 2, "name": "Popular" },
        rating: 1,
        location: { id: 2, city: "Matara", country: "Sri Lanka" },
        timestamp: 1660020477,
        user: { "about": "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).", "avatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80", "department": "Marketing Manager", "id": 1, "name": "ප්‍රසනන් රණවීර", "social": [], "stats": [] },
      },
      {
        id: 12,
        title: "ග්‍රාමීය ශ්‍රී ලංකාවේ නව යොවුන් වියේ ගැබ්ගැනීම් වල සැasdඟවුණු බර;",
        description: "කොරොන වයිරස් රෝගය 2019 (COVID-19) ශ්‍රී ලංකාව ඇතුළු ලොව පුරා මිනිසුන් දහස් ගණනකට බලපා ඇත. දෙමව්පියන් හෝ මව්වරුන් වශයෙන්, මෙම වෛරසය ගැන කනස්සල්ලට පත්වීම ස්වභාවිකය. කෙසේ වෙතත්, COVID-19 පිළිබඳ දැනුමෙන් සන්නද්ධ වීමෙන් - ඔබ ගැබ්ගෙන සිටියත්, හෝ මව්කිරි දෙන මව්වරුන් ඇතුළු දෙමාපියෙකු වුවත් - ඔබට මෙම රෝගය පැතිරීම හේතුවෙන් ඔබට අත්විඳිය හැකි ඕනෑම කාංසාවක් වඩාත් හොඳින් කළමනාකරණය කිරීමට හෝ වළක්වා ගැනීමට හැකිය.",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs",
        category: { "id": 2, "name": "Popular" },
        rating: 1,
        location: { id: 2, city: "Matara", country: "Sri Lanka" },
        timestamp: 1660020477,
        user: { "about": "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).", "avatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80", "department": "Marketing Manager", "id": 1, "name": "ප්‍රසනන් රණවීර", "social": [], "stats": [] },
      }
    ]);
  }, [data.articles, data.categories]);
  const handleNavigation = (name: string) => {
    navigation.navigate(name);
  }
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );
  return (
    <Block >
      {/* search input */}

      <Block
        color={colors.card}
        flex={0}
        align={"center"}
        padding={sizes.padding}
        flexDirection="row"
        justify='space-between'
        gradients={gradients.tertiary}
      >
        <Block color={colors.card} flex={0} align={"center"} flexDirection="row" >
          <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
          <Block flex={0} >
            <Text font={fonts.bold} >  {t('home.welcome')}</Text>
            <Text> {t('temp_user.name')} </Text>
          </Block>
        </Block>

        <Button onPress={() => handleNavigation("Pregnancy_Tracking")}>
          <Block flex={0} align={"center"} radius={50} width={100} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}
          >
            <Text> {t("screens.home")}  </Text>
          </Block>
        </Button>
      </Block>

      <Block
        row
        flex={0}
        align="center"
        justify="center"
        color={colors.card}
        scrollEnabled={true}
        paddingBottom={sizes.sm}>

        <Button onPress={() => handleProducts(1)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 1 ? 'primary' : 'secondary']}>
              <Image source={icons.mother} color={colors.white} style={{ width: 18, height: 18 }} radius={0} />
            </Block>
            <Text p font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
              {t('articles.mother')}
            </Text>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
        <Button onPress={() => handleProducts(0)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 0 ? 'primary' : 'secondary']}>
              <Image source={icons.father} color={colors.white} style={{ width: 20, height: 20 }} radius={0} />
            </Block>
            <Text p font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
              {t('articles.father')}
            </Text>
          </Block>
        </Button>
      </Block>

      <Block color={colors.card} flex={0} padding={sizes.padding} paddingTop={1}>
        <Input search placeholder={t('common.search')} /> 
      </Block>
      <Block flex={1} align="center" justify="center">
        {
          tab == 0 ? <AllArticleList /> : <></>
        }
         {
          tab == 1 ? <AllArticleList /> : <></>
        }
      </Block>



      {/*    {
      tab == 1 ? <HomeContent /> : <></>
    }

    {
      tab == 2 ? <MusicTracksPlayer /> : <></>
    } */}

    </Block>
  );
};
const styles = StyleSheet.create({
  user_avatart: {
    height: 40,
    width: 40
  }
});

export default PrediatrcianArticle;