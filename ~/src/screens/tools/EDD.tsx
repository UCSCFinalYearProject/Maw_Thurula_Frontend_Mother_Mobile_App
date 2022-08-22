import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableHighlightBase, View } from 'react-native';

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


const EDD = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
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

  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");

  const calc = () => {
    console.log("hi")
    var monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
		var day = f1;
		var month =f2;
		var year = f3;
		var nextday = day + 280;
		var predicted = new Date(Date.UTC( year, month, nextday, 0, 0, 0));
		var formated = monthNames[predicted.getMonth()] + ' ' + predicted.getDate() + ', ' + predicted.getFullYear();
		setF4 ('Your estimated due date is ' + formated);
  }

  return (
    <View>
      <Block flex={0}
        gradients={gradients.primary}
      >
        <Input placeholder="Date" style={{margin: 10}} onChangeText={ ( e ) => { setF1}} ></Input>
        <Input placeholder="Month" style={{margin: 10}} onChangeText={ ( e ) => { setF2}}></Input>
        <Input placeholder="Year" style={{margin: 10}} onChangeText={ ( e ) => { setF3}}></Input>
        <Button primary margin={10}>
          <Text color={"white"}> Calculate EDD</Text>
        </Button>
      </Block>
      <Block onPress={ () => { calc() }}>
        <Text color={"white"}> Calculate EDD</Text>
      </Block>

    </View>
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

export default EDD;
