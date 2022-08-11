import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

import Text from '../Text';
import Block from '../Block';
import Image from '../Image';
import { useTheme, useTranslation } from '../../hooks';
import { IMusicTrack } from '../../constants/types';
import { StyleSheet } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Button from '../Button';

const MusicPayerCard = ({
  id,
  title,
  url,
  dislike,
  like,
  image
}: IMusicTrack) => {

  const { t } = useTranslation();
  const { assets, colors, fonts, icons, gradients, sizes } = useTheme();
  const [isFav, setIsFav] = useState(false);

  const palySound = () => {
    try {
      SoundPlayer.playUrl(url)
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }

  const stopSound = () => {
    try {
      SoundPlayer.stop();
    } catch (e) {
      console.log(`cannot stop the sound file`, e)
    }
  }

  const pauseSound = () => {
    try {
      SoundPlayer.pause();
    } catch (e) {
      console.log(`cannot pause the sound file`, e)
    }
  }

  const resumeSound = () => {
    try {
      SoundPlayer.resume();
    } catch (e) {
      console.log(`cannot resume the sound file`, e)
    }
  }

  const getInfo = async () => { // You need the keyword `async`
    try {
      const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
      console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e)
    }
  }

  const styles = StyleSheet.create({
    mainComtainer: {

      borderColor: "red"
    },
    musicCard: {
      backgroundColor: 'green',
      borderColor: colors.background,
      borderWidth: 1,
      borderRadius: 1,
      shadowOpacity: 1
    },
    player_button: {
      margin: 10
    },
    musicInnerCard: {
      backgroundColor: 'green',
      borderColor: colors.background,
      borderWidth: 1,
      borderRadius: 11,
      shadowOpacity: 1
    },
  })

  return (
    <Block >
      <TouchableWithoutFeedback >
        <Block card white padding={0} marginTop={sizes.sm} >
          <Image
            background
            resizeMode="cover"
            radius={sizes.cardRadius}
            source={{ uri: image }}>
            <Block color={colors.overlay} padding={sizes.padding}>
              <Text h5 white align='center'  marginBottom={sizes.md}>
                {id}. {title}
              </Text>
              <Block
                scroll
                style={[styles.mainComtainer]}
                showsVerticalScrollIndicator={false}>
                <Block column padding={5} radius={19} flex={0} justify="space-between" >
                  <Block row card gradient={gradients.menu}  marginVertical={8}  >
                    {/* <Button style={styles.player_button} flex={1} gradient={gradients.dark} marginBottom={sizes.base} onPress={getInfo}>
                      <Image source={icons.earbuds} color={colors.white} style={{ width: 25, height: 25 }} />
                    </Button> */}
                    <Button style={styles.player_button} flex={1} gradient={gradients.dark} marginBottom={sizes.base} onPress={palySound}>
                      <Image source={icons.play} color={colors.white}  style={{ width: 25, height: 25 }} />

                    </Button>
                    <Button style={styles.player_button} flex={1} gradient={gradients.dark} marginBottom={sizes.base} onPress={stopSound}>
                      <Image source={icons.stop} color={colors.white} style={{ width: 25, height: 25 }} />

                    </Button>

                    <Button style={styles.player_button} flex={1} gradient={gradients.dark} marginBottom={sizes.base} onPress={pauseSound}>
                      <Image source={icons.pause} color={colors.white} style={{ width: 25, height: 25 }} />
                    </Button>
                    <Button style={styles.player_button} flex={1} gradient={gradients.dark} marginBottom={sizes.base} onPress={resumeSound}>
                      <Image source={icons.replay} color={colors.white} style={{ width: 25, height: 25 }} />

                    </Button>
                  </Block>
                </Block>
              </Block>
              <Block row marginTop={sizes.md} flex={0} justify="space-between" align='center'>
                <Block row justify='center' align='center'>
                  <Image
                    radius={sizes.s}
                    width={sizes.md}
                    height={sizes.md}
                    source={icons.thumb_up}
                  />
                  <Text p white>
                    {like}
                  </Text>
                </Block>

                <Block row justify='center' align='center'>
                  <Image
                    radius={sizes.s}
                    width={sizes.md}
                    height={sizes.md}
                    source={icons.thumb_down}
                  />
                  <Text p white>
                    {dislike}
                  </Text>
                </Block>


                {/* <Block row justify='center' align='center'>
                  <TouchableNativeFeedback onPress={ () => { setIsFav(!isFav)}}>
                    <Image
                      radius={sizes.s}
                      width={sizes.md}
                      height={sizes.md}
                      color={isFav ? colors.card : colors.primary}
                      source={icons.star}
                    />
                  </TouchableNativeFeedback>
                    
                 
                </Block> */}


              </Block>
            </Block>
          </Image>
        </Block>
      </TouchableWithoutFeedback>

    </Block>
  );

};

export default MusicPayerCard;
