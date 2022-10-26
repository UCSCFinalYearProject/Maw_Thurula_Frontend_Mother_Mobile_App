import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useData, useTheme, useTranslation } from '../../hooks';
import { IArticle, IArticleCategory, ICategory, IUser } from '../../constants/types';
import { Block, Button, Article, Text, Image, Input } from '../../components';
import TrendingArticleCard from '../../components/Articles/TrendingArticleCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import AllArticleList from '../MainArticles/AllArticleList';
import PostComponent from '../../components/community/Post';
import { Dimensions } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import { baseUrl } from '../../API Services/Login_Registrationn';

const Community = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const data = useData();
  const [post, setpost] = useState<IArticle[]>([]);
  const { navigation } = props;
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const { following, trending } = useData();
  const [products, setProducts] = useState(following);
  const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
  const windowWidth = Dimensions.get('window').width;


  const [loginData, setLoginData] = useState<null | IUser>(null);
  const storeKey = '@storage_Key';
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(storeKey)
      if (value !== null) {
        var decoded: IUser = jwt_decode(value);
        setLoginData(decoded);
        // console.log(loginData)  
      } else {
        navigation.navigate("Signin");
      }
    } catch (e) {
      navigation.navigate("Signin");
    }
  }

  const [ArticleCategory, setArticleCategory] = useState<IArticleCategory[]>([]);
  const [searchText, setsearchText] = useState("");


  const ArticlesRequest = async () => {

    axios.get(`${baseUrl}/mother/Mother_Article_category_list`,
    ).then((response) => {

      let temp: IArticleCategory[] = response.data.paediatrician;
      console.log(temp)
      setArticleCategory(temp);

    }).catch((error) => {
      if (error.response) { }
    });
  };
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    getData();
    ArticlesRequest();
    return () => {
      setArticles([]); // This worked for me
    };
  }, [])

  // init post
  // useEffect(() => {
  //   setpost([{
  //     type: 1,
  //     user: {
  //       avatar: "https://i.postimg.cc/jSf77yrR/2.png",
  //       id: 27,
  //       name: "Risini Piyathma",
  //     },
  //     caption: `ඔබට තෙහෙට්ටුව අඩු වූයේ  කවදාද? මට සති 7 යි, මට දිවා කාලයේදී යන්තම්වත්  යහනෙන් පිටව යා නොහැක.
  //     මට මූලික වශයෙන් ගෑස් හැර වෙනත් රෝග ලක්ෂණ නොමැත`,
  //     category: [
       
  //       {
  //         tag:"mother",
  //       },
  //       {
  //         tag:"pregnacy",
  //       }
  //     ],
  //     content: {
  //       image: {url:"https://i.postimg.cc/V6MWR2tH/i2.jpgh"},
  //       video: [],
  //     },
  //     like: 4,
  //     time: "08:17:30",
  //     comment: [
  //        {
  //         id: 30,
  //         name: "HirumaliGamage",
  //         avatar: "https://i.postimg.cc/1RHtbJyg/3.png",
  //         comment: "ඔබ වාසනාවන්තයි! මට සති 4ක ඉඳන් තෙහෙට්ටුව, හිසරදය, ඔක්කාරය, බඩ පිපුම සහ කකුල් නොසන්සුන්ව තියෙනවා..... සෝඩා එකක් බීලා බලන්න.",
  //         reply: [
  //           {
  //             id: 32,
  //             name: "Minuli Nulansa",
  //             avatar: "https://i.postimg.cc/5tL9gmP2/4.png",
  //             comment: `ඔව්! මම දැන් මගේ දවස් වලින් වැඩි හරියක් නිදාගන්නවා. මේක පිස්සුවක්. මට අදට සති 9යි. මට හැම වෙලාවෙම ලොකු මහන්සියක් දැනෙනවා.`,
  //             reply: [
                
  //             ]
  //           }, 
  //         ]
  //       },    
  //     ]
  //   },
  //   {
  //     type: 2,
  //     user: {
  //       avatar: `https://i.postimg.cc/5tL9gmP2/4.png`,
  //       id: 27,
  //       name: "Geethma wanniarachchi",
  //     },
  //     caption: "ඔන්න යාලුවනේ... ගිය ඉරිදා මම ඇහැරුනේ උගුරේ අමාරුවක් සහ හිසරදයක් සහ කැස්සක් එක්ක. ඒ ගැන කිසිම දෙයක් හිතුවේ නැහැ. මම සතිය පුරාම ඒ වගේ අසනීප වුණා. අද මට මගේ සුවඳ සහ රසය නැති වී ඇත… එබැවින් මම ගොස් නිවසේදී කොවිඩ් පරීක්ෂණයක් මිලදී ගත්තා. එය ඉතා ධනාත්මක ය. මේ ගැබ් ගැනීම කොවිඩ් වැළඳුණු දෙවෙනි අවස්ථාවයි... මා තවමත් ගැබ්ගෙන ඇති බව මා නොදැන සිටි අතර ජනවාරි මාසයේදී බව මා නොදැන සිටි පළමු අවස්ථාව මෙයයි... මගේ දරුවාට යමක් සිදුවනු ඇතැයි මම දැඩි ලෙස සිතමි . කොවිඩ් නිසා ළදරුවන් මැරී ඉපදීම සහ මව්වරුන් නොමේරූ දරු ප්‍රසූතියට පත්වීම… ඇත්තෙන්ම එය සති අන්තයක් බැවින් මට මගේ වෛද්‍ය කාර්යාලයට යාමට නොහැක. මම ඇත්තටම බයයි",
  //     category: [
       
  //       {
  //         tag:"mother",
  //       },
  //       {
  //         tag:"covid",
  //       }
  //     ],
  //     content: {
  //       image: {url:"https://i.postimg.cc/3r65cvPM/i3.jpg"},
  //       video: [],
  //     },
  //     like: 6,
  //     time: "08:17:30",
  //     comment: [
  //        {
  //         id: 30,
  //         name: "HirumaliGamage",
  //         avatar: "https://i.postimg.cc/MHF8qcsL/5.png",
  //         comment: `සමාජ මාධ්‍ය/අන්තර්ජාලයේ ඇති සියල්ල විශ්වාස නොකරන්න. ගර්භණී සමයේදී COVID සහ අතුරු ආබාධ පිළිබඳ වැඩි පර්යේෂණ නොමැත. ගැබ්ගැනීමේ "හොඳ" දෙය නම් ඔබට ප්‍රතිවෛරස් ලබා ගත හැක්කේ ඔබ ප්‍රතිශක්තිකරණයෙන් පෙළෙන අය ලෙස සලකන බැවිනි. මම 27 වැනි සතියේ කළා. ඔබ හදිසි ER ප්‍රතිකාරයකට ගොස් ඔබට ප්‍රතිවෛරස් ලබා ගත හැකි දැයි බලන්න. බොහෝ මිනිසුන්ට උණ සමඟ නරක අතට හැරේ. කලබල වෙන්න එපා!`,
  //         reply: [
  //           {
  //             id: 32,
  //             name: "Minuli Nulansa",
  //             avatar: "",
  //             comment: "",
  //             reply: [
                
  //             ]
  //           }, 
  //         ]
  //       },    
  //     ]
  //   }]);
  // }, [data, data.categories]);
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
    <Block >
      {/* search input */}
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
        <Block flex={0} align={"center"} radius={50} width={150} style={{ backgroundColor: "green", borderWidth: 1 }} padding={sizes.s}>
          <Text color={"white"}> {t("community.post_a_post")}   </Text>
        </Block>
      </Block>
      <Block color={colors.card} flex={0} padding={sizes.padding} paddingTop={1}>
        <Input search placeholder={t('common.search')} />
      </Block>

      <Block width={windowWidth} scroll>
        {
          post.map( (postItem:any, index:number) => {
            return (
              <PostComponent {...postItem} />
            )
          })
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
  post_content: {
    backgroundColor: "gray",
    height: 400,

  }
});

export default Community;
