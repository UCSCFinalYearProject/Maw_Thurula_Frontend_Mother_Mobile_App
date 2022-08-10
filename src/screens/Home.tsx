import React, { useCallback, useEffect, useState } from 'react';

import { useData, useTheme, useTranslation } from '../hooks/';
import { Block, Button, Image, Input, Product, Text } from '../components/';
import { StyleSheet, View } from 'react-native';
import TrendingArticle from './Articles/TrendingArticle';
import { Dimensions } from 'react-native';
import PhotoGallery from './PhotoGallary';
import LandingCoursol from '../components/Home/LandingCoursol';
import MusicTracksPlayer from './MusicTracksPlayer/MusicTracksPlayer';

const Home = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const { following, trending } = useData();
  const [products, setProducts] = useState(following);
  const { assets, colors, fonts, gradients, sizes , icons } = useTheme();
  const windowWidth = Dimensions.get('window').width;

  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  const [topArticles, settopArticles] = useState([{
    id: 1,
    type: 'vertical',
    title: 'ගැබිනි මව සඳහා වටිනා මෙවලම් සහ කැල්ක්යුලේටරය',
    image:
      'https://i.postimg.cc/qqr01QZ8/tools-set.png',
  },
  {
    id: 2,
    type: 'vertical',
    title: 'සුදුසු ළමා රෝග විශේෂඥයින් තෝරා ගැනීම.',
    image:
      'https://i.postimg.cc/cC9NmZqn/download.jpg',
  },
  {
    id: 3,
    type: 'horizontal',
    title: 'හොඳ සහ සුදුසු ගැලපෙන ළදරු නමක් තෝරා ගැනීම.',
    image:
      'https://i.postimg.cc/HsrGgqD6/651478996-H-696x476.jpg',
  }])

  const HomeContent = () => {
    return (
      <Block
        scroll
        showsVerticalScrollIndicator={false}>
        {/* products list */}
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
                  font={fonts.bold} size={sizes.sm} color={colors.dribbble} > {t('home.common')} {t('home.articles')}
                </Text>
              </Block>
            </Block>
            {topArticles?.map((article: any, index: Number) => (
              <Product {...article} key={`card-${article?.id + index}`} />
            ))}
          </Block>
        </Block>
        {/* <LandingCoursol /> */}
        <Block
          flex={0}
          align={"center"} >
          <Text
            font={fonts.bold} size={sizes.sm} color={colors.dribbble} style={{ width: windowWidth, textAlign: "center" }}>
            {t('home.this_week')} {t('home.trending')} {t('home.articles')}
          </Text>
        </Block>
        <Block row wrap="wrap" justify="space-between">
          <TrendingArticle />
        </Block>


      </Block>
    )
  }
  const GallaryContent = () => {
    return (
      <Block
        scroll
        showsVerticalScrollIndicator={false}>
        <Block row wrap="wrap" justify="space-between">
          <PhotoGallery />
        </Block>
      </Block>
    )
  }
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

        <Block flex={0} align={"center"} radius={50} width={100} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}>
          <Text> {t("home.diary")}  </Text>
        </Block>
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
              <Image source={icons.home} color={colors.white} style={{width: 13, height: 13}}  radius={0} />
            </Block>
            <Text p font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
              {t('screens.home')}
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
              <Image source={icons.gallery} color={colors.white} style={{width: 20, height: 20}} radius={0} />
            </Block>
            <Text p font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
              {t('home.photos')}
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
        <Button onPress={() => handleProducts(2)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 2 ? 'primary' : 'secondary']}>
              <Image source={icons.earbuds} color={colors.white} style={{width: 15, height: 15}}  />
            </Block>
            <Text p font={fonts?.[tab === 2 ? 'medium' : 'normal']}>
              {t('home.music')}
            </Text>
          </Block>
        </Button>

      </Block>

      {
        tab == 0 ? <GallaryContent /> : <></>
      }

      {
        tab == 1 ? <HomeContent /> : <></>
      }

{
        tab == 2 ? <MusicTracksPlayer /> : <></>
      }

    </Block>
  );
};

const styles = StyleSheet.create({
  user_avatart: {
    height: 40,
    width: 40
  }
});




export default Home;
