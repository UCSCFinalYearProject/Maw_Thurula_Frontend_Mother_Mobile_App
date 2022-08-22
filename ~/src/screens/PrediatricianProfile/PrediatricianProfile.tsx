import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useData, useTheme, useTranslation } from '../../hooks';
import { IArticle, ICategory } from '../../constants/types';
import { Block, Button, Article, Text, Image, Input } from '../../components';
import TrendingArticleCard from '../../components/Articles/TrendingArticleCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import AllArticleList from '../MainArticles/AllArticleList';
import PostComponent from '../../components/community/Post';
import { Dimensions } from 'react-native';


const PrediatricianProfile = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const data = useData();
  const [post, setpost] = useState<IArticle[]>([]);
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
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  const months_sinhala = ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"];
  const d = new Date();
  let month = months_sinhala[d.getMonth()];
  let date = d.getDay();
  const p_weeks = [];
  for (let i = 1; i <= 40; i++) {
    p_weeks.push(i);
  }
  return (
    <Block scroll >
         <Block card color={colors.card} flex={0} align={"center"} justify="space-between" margin={10} column  gradient={gradients.dark}>
                <Block flex={0} align="center" >
                  <Image source={{uri: "https://www.odoc.life/wp-content/uploads/2020/10/doctor__circle_2.png"}} style={styles.profile} resizeMode="center" background radius={50} width={windowWidth-100} />
                  <Block flex={0} align="center" marginTop={-10}>
                    <Text color={colors.white} h5 font={fonts.bold} >  Dr. Sandamal jayaseekara</Text>
                    <Text color={colors.white} > {t('temp_user.name')} </Text>
                  </Block>
                </Block>
                <Block flex={0} align={"center"} radius={50}  style={{ borderColor: "green", borderWidth: 1 }} padding={5} marginTop={10}  >
                  <Text color={colors.white} >Akuressa Hospital</Text>
                </Block>
              </Block>


              <Block padding={sizes.padding}>
                <Text semibold size={18} > Details</Text>
                <Text >David Rubin, MD, MSCE, is an attending physician, director of PolicyLab and director of Population Health Innovation at Children's Hospital of Philadelphia.</Text>
              </Block>
              <Block padding={sizes.padding}>
                <Text semibold size={18} > Contact Details</Text>
                <Text > Mobile  +947 6100787</Text>
                <Text >Address
Wakwella Road, Galle.</Text>
              </Block>
              <Block padding={sizes.padding}>
                <Text semibold size={18} > Channeling Details</Text>
                <Text > Location : ASIRI CENTRAL HOSPITAL</Text>
                <Text > TimeSlot: AUGUST 14, 2022 SUN 11:00 AM</Text>
                <Text > TimeSlot: AUGUST 15, 2022 SUN 11:00 AM</Text>
                <Text > TimeSlot: AUGUST 16, 2022 SUN 11:00 AM</Text>
              </Block>

              <Block padding={sizes.padding}>
                <Text semibold size={18} > Gallery</Text>
                <Image source={{uri: "https://a.storyblok.com/f/80830/848x400/ad2ceeb638/gastro.jpg"}} style={styles.profile} resizeMode="center" background radius={50} width={windowWidth-100} />
                <Image source={{uri: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_e3e290de7c.jpg"}} style={styles.profile} resizeMode="center" background radius={50} width={windowWidth-100} />
                <Image source={{uri: "data:image/jpeg;base64,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"}} style={styles.profile} resizeMode="contain" background radius={50} width={400} />
               
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
   height: 300

  }
});

export default PrediatricianProfile;
