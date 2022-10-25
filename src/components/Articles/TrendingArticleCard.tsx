import React from 'react';
import dayjs from 'dayjs';
import { TouchableWithoutFeedback } from 'react-native';

import Text from '../Text';
import Block from '../Block';
import Image from '../Image';
import { useTheme, useTranslation } from '../../hooks/';
import { IArticle, ITopArticle } from '../../constants/types';
import { Dimensions } from 'react-native';
import Button from '../Button';


const TrendingArticleCard = ({
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
    <Block width={windowWidth - 50} marginHorizontal={10}  >
      <TouchableWithoutFeedback >
        {cardType?.id !== 1 ?
          <Block padding={sizes.sm} height={300} marginTop={sizes.sm} marginRight={20} >
            <Image height={170} resizeMode="contain" source={{ uri: image_1 }} />
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

            {/* article des */}
            {des && (
              <Text
                p
                marginTop={sizes.s}
                marginLeft={sizes.xs}
                marginBottom={sizes.sm}>
                {String(des).substring(0, 100)}
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
                    {WorkingAt}
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
            {Address && (
              <Block row align="center" paddingVertical={sizes.sm}>
                <Image source={icons.location} marginRight={sizes.s} />
                <Text p size={12} semibold>
                  {Address}
                </Text>
                <Text p bold marginHorizontal={sizes.s}>
                  •
                </Text>
                <Image source={icons.star} marginRight={sizes.s} />
                <Text p size={12} semibold>
                  {experience}/5
                </Text>
              </Block>
            )}
          </Block> :
          <Block card white padding={0} marginTop={sizes.sm} >
            <Image

              background
              resizeMode="cover"
              radius={sizes.cardRadius}
              source={{ uri: image_1 }}>
              <Block color={colors.overlay} >
              <Block color={colors.overlay} padding={sizes.padding}>
                <Text h4 white marginBottom={sizes.sm}>
                  {title}
                </Text>
                <Text p semibold white>
                  {String(des).substring(0, 100)}
                </Text>
                {/* user details */}
                <Block flex={0} height={120} center row marginTop={sizes.sm}>
                  <Block height={100} row center marginTop={sizes.md}>
                    <Image
                      radius={sizes.s}
                      width={sizes.xl}
                      height={sizes.xl}
                      source={{ uri: profile_picture }}
                      style={{ backgroundColor: colors.white }}
                    />
                    <Block marginLeft={sizes.s}>
                      <Text p white semibold>
                        Dr {name}
                      </Text>
                      <Text p white>
                        Like - {no_of_likes}
                      </Text>
                    </Block>
                  </Block>

                  <Block flex={0} height={0} center >
                    <Button
                      marginVertical={sizes.s}
                      marginHorizontal={sizes.sm}
                      gradient={gradients.primary}
                      onPress={() => {
                        // setCurrentMode("welcome")
                      }}
                    >
                      <Text bold white transform="uppercase">
                        {t('common.readArticle')}
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </Block>
              </Block>
            </Image>
          </Block>
        }
      </TouchableWithoutFeedback >
    </Block >
  );

};

export default TrendingArticleCard;
