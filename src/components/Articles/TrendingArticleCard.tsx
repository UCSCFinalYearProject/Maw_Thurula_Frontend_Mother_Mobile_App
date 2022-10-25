import React from 'react';
import dayjs from 'dayjs';
import { TouchableWithoutFeedback } from 'react-native';

import Text from '../Text';
import Block from '../Block';
import Image from '../Image';
import { useTheme, useTranslation } from '../../hooks/';
import { IArticle } from '../../constants/types';
import { Dimensions } from 'react-native';

interface ITopArticle{
  article_id: number;
  title: string;
  date: string;
  no_of_likes: Number;
  image_1: string;
  category: number;
  doctor_id: number;
  des: string;
}

const TrendingArticleCard = ({
  article_id,
  title,
  date,
  no_of_likes,
  image_1,
  category,
  doctor_id,
  des
}: ITopArticle) => {
  const { t } = useTranslation();
  const { colors, gradients, icons, sizes } = useTheme();
  const windowWidth = Dimensions.get('window').width;

  return (
    <Block width={windowWidth - 50}  >
      <TouchableWithoutFeedback >
        <Block gradient={gradients.black} padding={10}>
          <Text> Hansana </Text> 
        </Block>
      
    </TouchableWithoutFeedback>
    </Block>
  );

};

export default TrendingArticleCard;
