import React from 'react';
import dayjs from 'dayjs';
import { TouchableWithoutFeedback } from 'react-native';

import Text from '../Text';
import Block from '../Block';
import Image from '../Image';
import { useTheme, useTranslation } from '../../hooks';
import { IArticle, ITopArticle } from '../../constants/types';
import { Dimensions } from 'react-native';


const ArticleCard = ({
  article_id,
  title,
  date,
  no_of_likes,
  image_1,
  category,
  des,
  doctor_id,
  user_id,
  name,
  profile_picture,
  password,
  description,
  phone_number,
  email,
  linkedin,
  facebook,
  twitter,
  STATUS,
  login_status,
  registered_at,
  type,
  reason,
  NIC,
  Address,
  WorkingAt,
  experience,
  cardType
}: ITopArticle) => {

  const { t } = useTranslation();
  const { colors, gradients, icons, sizes } = useTheme();
  const windowWidth = Dimensions.get('window').width;


  return (
    <Block  >
      <TouchableWithoutFeedback >
      {cardType?.id !== 1 ? <Block card padding={sizes.sm} marginTop={sizes.sm} margin={20}>
        <Image height={170} resizeMode="cover" source={{ uri: image_1 }} />
        {/* article category */}
        {title && (
          <Text
            h5
            bold
            size={13}
            marginTop={sizes.s}
            transform="uppercase"
            marginLeft={sizes.xs}
            gradient={gradients.primary}>
            {title}
          </Text>
        )}

        {/* article description */}
        {des && (
          <Text
            p
            marginTop={sizes.s}
            marginLeft={sizes.xs}
            marginBottom={sizes.sm}>
            {String(description).substring(0, 100)}
          </Text>
        )}

        {/* user details */}
        {name && (
          <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
            <Image
              radius={sizes.s}
              width={sizes.xl}
              height={sizes.xl}
              source={{ uri: profile_picture }}
              style={{ backgroundColor: colors.white }}
            />
            <Block justify="center" marginLeft={sizes.s}>
              <Text p semibold>
                {name}
              </Text>
              <Text p gray>
                {t('common.posted', {
                  date: dayjs(date).format('DD MMMM') || '-',
                })}
              </Text>
            </Block>
          </Block>
        )}

        {/* location & rating */}
        {(Boolean(no_of_likes)) && (
          <Block row align="center" paddingVertical={sizes.sm}>
            <Image source={icons.location} marginRight={sizes.s} />
            <Text p size={12} semibold>
               {WorkingAt}
            </Text>
            <Text p bold marginHorizontal={sizes.s}>
              •
            </Text>
            <Image source={icons.star} marginRight={sizes.s} />
            <Text p size={12} semibold>
              {no_of_likes}
            </Text>
          </Block>
        )}
      </Block> : <Block card white padding={0} marginTop={sizes.sm}>
        <Image
          background
          resizeMode="cover"
          radius={sizes.cardRadius}
          source={{ uri: image_1 }}>
          <Block color={colors.overlay} padding={sizes.padding}>
            <Text h4 white marginBottom={sizes.sm}>
              {title}
            </Text>
            <Text p white>
              {String(des).substring(0, 100)}
            </Text>
            {/* user details */}
            <Block row marginTop={sizes.xxl}>
              <Image
                radius={sizes.s}
                width={sizes.xl}
                height={sizes.xl}
                source={{ uri: profile_picture }}
                style={{ backgroundColor: colors.white }}
              />
              <Block justify="center" marginLeft={sizes.s}>
                <Text p white semibold>
                 Dr {name}
                </Text>
                <Text p white>
                  {Address}
                </Text>
              </Block>
            </Block>
          </Block>
        </Image>
      </Block>}
    </TouchableWithoutFeedback>
    </Block>
  );

};

export default ArticleCard;
