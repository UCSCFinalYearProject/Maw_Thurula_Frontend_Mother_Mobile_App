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


const Prediatrician = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const data = useData();
  const [Prediatrician, setPrediatrician] = useState<IArticle[]>([]);
  const { navigation } = props;
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const { following, trending } = useData();
  const [products, setProducts] = useState(following);
  const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
  const windowWidth = Dimensions.get('window').width;


  // init Prediatrician
  useEffect(() => {
    setPrediatrician([
      {
        id: 1,
        name: "sadanama; aasdasd",
        specialist: "Cardiologist",
        desc: "",
        profile: "",
        hospital:"Hospital- Polonnaruwa",
        constact_no: "",
        email: "",
        mediacl_center: [
          {
            center_name: " ASIRI CENTRAL HOSPITAL - NORRIS CANAL ROAD-COLOMBO 10 SESSIONS ",
            address: "",
            contact_no: "",
            website: "",
            timeSlot: [
              {
                date: "",
                start_time: "",
                end_time: ""
              }
            ]
          }
        ],
        articles: [
          1, 2,3
        ],
        gallary: [
          {
            title: "",
            photo: ""
          }
        ]
      },
      {
        id: 1,
        name: "sadanama; aasdasd",
        specialist: "",
        desc: "",
        profile: "",
        hospital:"",
        constact_no: "",
        email: "",
        mediacl_center: [
          {
            center_name: "",
            address: "",
            contact_no: "",
            website: "",
            timeSlot: [
              {
                date: "",
                start_time: "",
                end_time: ""
              }
            ]
          }
        ],
        articles: [
          1, 2,3
        ],
        gallary: [
          {
            title: "",
            photo: ""
          }
        ]
      },
      {
        id: 1,
        name: "sadanama; aasdasd",
        specialist: "",
        desc: "",
        profile: "",
        hospital:"",
        constact_no: "",
        email: "",
        mediacl_center: [
          {
            center_name: "",
            address: "",
            contact_no: "",
            website: "",
            timeSlot: [
              {
                date: "",
                start_time: "",
                end_time: ""
              }
            ]
          }
        ],
        articles: [
          1, 2,3
        ],
        gallary: [
          {
            title: "",
            photo: ""
          }
        ]
      },
      {
        id: 1,
        name: "sadanama; aasdasd",
        specialist: "",
        desc: "",
        profile: "",
        hospital:"",
        constact_no: "",
        email: "",
        mediacl_center: [
          {
            center_name: "",
            address: "",
            contact_no: "",
            website: "",
            timeSlot: [
              {
                date: "",
                start_time: "",
                end_time: ""
              }
            ]
          }
        ],
        articles: [
          1, 2,3
        ],
        gallary: [
          {
            title: "",
            photo: ""
          }
        ]
      }
      
    ]);
  }, [data, data.categories]);
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
    <Block  >
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
            <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
            <Block flex={0} >
              <Text> {t('temp_user.name')} </Text>
              <Text font={fonts.bold} >  {month} {date} </Text>
            </Block>
          </Block>

        </Block>
       
        <Block color={colors.card} flex={0} padding={sizes.padding} paddingTop={1}>
          <Input search placeholder={t('common.search')} />
        </Block>

      
     
      <Block scroll>
      {
        Prediatrician ? Prediatrician.map((p: any) => {
          return (
           <Button onPress={() => handleNavigation("preProfile")}>
             <Block card color={colors.card} flex={0} align={"center"} justify="space-between" margin={10} flexDirection="row" >
                <Block flex={0} align="center" row marginRight={15}>
                  <Image source={assets.avatar} style={styles.profile} radius={50} />
                  <Block flex={0} align="center">
                    <Text h5 font={fonts.bold} >  Dr. Sandamal jayaseekara</Text>
                    <Text> {t('temp_user.name')} </Text>
                  </Block>
                </Block>
                <Block flex={0} align={"center"} radius={50} width={100} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s} >
                  <Text> see  </Text>
                </Block>
              </Block>
           </Button>
          )
        }) : null
      }
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

export default Prediatrician;
