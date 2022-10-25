import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {useData, useTheme} from '../../hooks';
import {IArticle, ICategory, ITopArticle} from '../../constants/types';
import {Block, Button, Article, Text} from '../../components';
import TrendingArticleCard from '../../components/Articles/TrendingArticleCard';
import axios from 'axios';
import { baseUrl } from '../../API Services/Login_Registrationn';


const TrendingArticle = () => {
  const data = useData();
  const [articles, setArticles] = useState<ITopArticle[]>([]);
  const {colors, gradients, sizes} = useTheme();

 
  const [TopArticle, setTopArticle] = useState<ITopArticle[]>([]);

 
  
  const TopArticlesRequest = async () => {
  
    axios.get(`${baseUrl}/mother/mother_post_top_five`,
    ).then((response) => {
      
      let temp : ITopArticle[] = response.data.paediatrician.map( (item :ITopArticle ) => {
        item.cardType = { id : 1, name: "Popular"}
        return item;
      });
      // console.log(temp)
      setTopArticle(temp);

    }).catch((error) => {
      if (error.response) {    }
    });
  };
    
  useEffect(() => {
    TopArticlesRequest();
    return () => {
      setArticles([]); // This worked for me
    };
  }, [])

  // useEffect(() => {
  //   console.log(TopArticle)
  // }, [TopArticle])
  
  // // init articles
  // useEffect(() => {
  //   setArticles(data?.articles);
  //   setArticles([
  //     {
  //       id: 22,
  //       title : "ග්‍රාමීය ශ්‍රී ලංකාවේ නව යොවුන් වියේ ගැබ්ගැනීම් වල සැඟවුණු බර;ss",
  //       description: "කොරොන වයිරස් රෝගය 2019 (COVID-19) ශ්‍රී ලංකාව ඇතුළු ලොව පුරා මිනිසුන් දහස් ගණනකට බලපා ඇත. දෙමව්පියන් හෝ මව්වරුන් වශයෙන්, මෙම වෛරසය ගැන කනස්සල්ලට පත්වීම ස්වභාවිකය. කෙසේ වෙතත්, COVID-19 පිළිබඳ දැනුමෙන් සන්නද්ධ වීමෙන් - ඔබ ගැබ්ගෙන සිටියත්, හෝ මව්කිරි දෙන මව්වරුන් ඇතුළු දෙමාපියෙකු වුවත් - ඔබට මෙම රෝගය පැතිරීම හේතුවෙන් ඔබට අත්විඳිය හැකි ඕනෑම කාංසාවක් වඩාත් හොඳින් කළමනාකරණය කිරීමට හෝ වළක්වා ගැනීමට හැකිය.",
  //       image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs",
  //       category:  {"id": 2, "name": "Popular"},
  //       rating: 1,
  //       location: { id: 2 , city: "Matara" , country: "Sri Lanka"},
  //       timestamp: 1660020477,
  //       user: {"about": "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).", "avatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80", "department": "Marketing Manager", "id": 1, "name": "ප්‍රසනන් රණවීර", "social": [], "stats": [] },
  //     },
  //     {
  //       id: 12,
  //       title : "ග්‍රාමීය ශ්‍රී ලංකාවේ නව යොවුන් වියේ ගැබ්ගැනීම් වල සැasdඟවුණු බර;",
  //       description: "කොරොන වයිරස් රෝගය 2019 (COVID-19) ශ්‍රී ලංකාව ඇතුළු ලොව පුරා මිනිසුන් දහස් ගණනකට බලපා ඇත. දෙමව්පියන් හෝ මව්වරුන් වශයෙන්, මෙම වෛරසය ගැන කනස්සල්ලට පත්වීම ස්වභාවිකය. කෙසේ වෙතත්, COVID-19 පිළිබඳ දැනුමෙන් සන්නද්ධ වීමෙන් - ඔබ ගැබ්ගෙන සිටියත්, හෝ මව්කිරි දෙන මව්වරුන් ඇතුළු දෙමාපියෙකු වුවත් - ඔබට මෙම රෝගය පැතිරීම හේතුවෙන් ඔබට අත්විඳිය හැකි ඕනෑම කාංසාවක් වඩාත් හොඳින් කළමනාකරණය කිරීමට හෝ වළක්වා ගැනීමට හැකිය.",
  //       image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs",
  //       category:  {"id": 2, "name": "Popular"},
  //       rating: 1,
  //       location: { id: 2 , city: "Matara" , country: "Sri Lanka"},
  //       timestamp: 1660020477,
  //       user: {"about": "Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).", "avatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80", "department": "Marketing Manager", "id": 1, "name": "ප්‍රසනන් රණවීර", "social": [], "stats": [] },
  //     }
  //   ]);
  // }, [data.articles, data.categories]);

  return (
    <Block >
    <FlatList
            data={TopArticle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: ITopArticle) => `${item?.article_id}`}
            style={{paddingHorizontal: sizes.padding}}
            contentContainerStyle={{paddingBottom: sizes.s}}
            renderItem={({item}) =><TrendingArticleCard {...item} />}
          />
        </Block>
  );
};

export default TrendingArticle;
