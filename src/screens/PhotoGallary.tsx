import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme, useTranslation} from '../hooks';
import {Block, Button, Input, Image, Switch, Text} from '../components';
import { Dimensions } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Modal from "react-native-modal";
import { ICONS } from '../constants/theme';

// Photo gallery example
const includeExtra = true;

const PhotoGallery = () => {
  const { t } = useTranslation();
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const windowWidth = Dimensions.get('window').width;

  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN = 
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;
    const [response, setResponse] = React.useState<any>(null);


    const handleUploadImage = React.useCallback((type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, setResponse);
      } else {
        ImagePicker.launchImageLibrary(options, setResponse);
      }
    }, []);

    interface Action {
      title: string;
      type: 'capture' | 'library';
      options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
    }
    
    const actions: Action[] = [
      {
        title: 'Take Image',
        type: 'capture',
        options: {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
          includeExtra,
        },
      },
      
    ];


    const [errorStatusVisibility, setErrorStatusVisibility] = useState(true);
    const [uploadStatusVisibility, setUploadStatusVisibility] = useState(false);

  return (
    <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
      
      <Block>
        
      <Block row align="center" justify="space-between">
      <Modal isVisible={errorStatusVisibility}>
                <Block radius={10} align='center' marginHorizontal={80} flex={0} gradient={gradients.white} paddingHorizontal={50} paddingVertical={20}>
                  <Image
                    background
                    resizeMode="contain"
                    padding={sizes.m}
                    source={ICONS.warrning  } 
                  ></Image>
                  <Text center bold h5 marginVertical={5}
                    color={colors.warning}>මෙය කාරුණික ඉල්ලීමකි,</Text>

                  <Text center semibold
                    color={colors.dark}
                  >
                    {/* {errorStatus} */}
                     කරුණාකර මෙම අන්තර්ගතය වාණිජ හෝ වාණිජ නොවන අරමුණු සඳහා බෙදා ගැනීමට හෝ භාවිතා කිරීමට උත්සාහ නොකරන්න. මෙම අන්තර්ගතය මවගේ මනස ලිහිල් කිරීම සහ අභිප්රේරණය සඳහා පමණි

                  </Text >
                  <Button
                    onPress={() => {
                      setErrorStatusVisibility(false);
                    }}
                    height={50}
                    marginVertical={10}
                    paddingHorizontal={10}
                    color={colors.warning}>
                    <Text bold white transform="uppercase">
                    එකඟයි
                    </Text>
                  </Button>
                </Block>

              </Modal>
              <Modal isVisible={uploadStatusVisibility}>
                <Block radius={10} align='center' marginHorizontal={80} flex={0} gradient={gradients.white} paddingHorizontal={50} paddingVertical={20}>
                  <Image
                    background
                    resizeMode="contain"
                    padding={sizes.m}
                    source={ICONS.warrning  } 
                  ></Image>
                  <Text center bold h5 marginVertical={5}
                    color={colors.warning}> ඡායාරූප පළ කිරීම </Text>

                  <Text center semibold
                    color={colors.dark}
                  >
                    {/* {errorStatus} */}
                    මව්තුරුල වශයෙන් අපි මේ ඡායාරූප සම්බන්ධයෙන් කිසිදු වගකීමක් ගන්නේ නැහැ. එබැවින් ඔබගේ උඩුගත කළ රූපය අනෙකුත් සියලුම පරිශීලකයින්ට දෘශ්‍යමාන වේ. කිසියම් ගැටළුවක් ඇත්නම් කරුණාකර ඔබගේ ඡායාරූප සහ ඉහළ පුද්ගලික තොරතුරු බෙදා ගැනීමට උත්සාහ නොකරන්න

                  </Text >
                  <Button
                    onPress={() => {
                      setUploadStatusVisibility(false);
                      handleUploadImage("Take" , {
                        saveToPhotos: true,
                        mediaType: 'photo',
                        includeBase64: false,
                        includeExtra,
                      }) 
                    }}
                    height={50}
                    marginVertical={10}
                    paddingHorizontal={10}
                    color={colors.warning}>
                    <Text bold white transform="uppercase">
                    එකඟයි
                    </Text>
                  </Button>
                </Block>

              </Modal>
          
<Block  center>
            <Button
            
                    onPress={ () => {setUploadStatusVisibility(true);}}
                    height={50}
                    marginVertical={10}
                    paddingHorizontal={10}
                    color={colors.warning}>
                    <Text bold white transform="uppercase">
                    මගේ ඡායාරූපය පළ කරන්න
                    </Text>
                  </Button>

                  </Block>
  
        </Block>
        <Block row align="center" justify="space-between">
          <Text h5 semibold style={{ paddingBottom: 10}}>
            {t("home.mothers_and_newborns")}
          </Text>
        </Block>
        <Block row justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/nLJZLxyY/fb4c80db7638983ea1d8076a0ff86c72.jpg"}}
            style={{
              width: IMAGE_VERTICAL_SIZE + IMAGE_MARGIN / 2,
              height: IMAGE_VERTICAL_SIZE * 2 + IMAGE_VERTICAL_MARGIN,
            }}
          />
          <Block marginLeft={sizes.m}>
            <Image
              resizeMode="cover"
              source={{uri: "https://i.postimg.cc/4N4q3d21/m2.png"}}
              marginBottom={IMAGE_VERTICAL_MARGIN}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
            <Image
              resizeMode="cover"
              source={{uri: "https://i.postimg.cc/wM2rV8MJ/m3.jpg"}}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
          </Block>
        </Block>
      </Block>
      <Block>
        <Block row paddingTop={20} justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/8kmxDW45/m4.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
           <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/x1gnxhJ0/m11.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/rmS3DtLf/m5.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
         
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/jSRRhtjg/m10.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
         
          <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/HLxHfzXb/m8.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
           <Image
            resizeMode="cover"
            source={{uri: "https://i.postimg.cc/tCrfnjLG/m6.jpg"}}
            marginBottom={IMAGE_MARGIN}
            style={{
              height: IMAGE_SIZE,
              width: IMAGE_SIZE,
            }}
          />
        </Block>
        <Block row align="center" justify="center">
          <Button>
            <Text p primary semibold>
              {t('home.load_more')} {t('home.click_here')}...
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};
export default PhotoGallery;
