import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback, Linking, Alert, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import AppLink from 'react-native-app-link';

import { useData, useTheme, useTranslation } from "../../hooks";
import { Block, Button, Article, Text, Input, Image } from '../../components';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';

const Ecommerce = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    const { t } = useTranslation();
    const { following, trending } = useData();
    const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
    const data = useData();
    const windowWidth = Dimensions.get('window').width;
    const [isGiftVaucher, setisGiftVaucher] = useState(true);
    const { navigation } = props;
    const [category_list, setCategory_list] = useState([
        {
            name: t('ecommerce.New_Arrivals'),
            image: "",
        },
       
        {
            name: t('ecommerce.special_packages'),
            image: "",
        },
        {
            name: t('ecommerce.Bedding'),
            image: "",
        },
        {
            name: t('ecommerce.Baby_Essentials'),
            image: "",
        },
        
        {
            name: t('ecommerce.Mother_Essentials'),
            image: "",
        },
        {
            name: t('ecommerce.Girls_Clothing'),
            image: "",
        },
        {
            name: t('ecommerce.Boys_Clothing'),
            image: "",
        }
       

    ])
    const [productsList, setProductsList] = useState([
        {
            id: 1,
            name: "Baby Boys Blue Shoes",
            category: "friut",
            imge: "https://cdn.shopify.com/s/files/1/0530/7167/5557/products/baby-boys-blue-shoes_1_2048x2048.jpg?v=1661840303",
            price: 1550,
            sizes: [
                {
                    id: 1,
                    name: "small"
                }
            ],
            offer: 0,
            desc: "this is the product that baby s",
            rest_qty: 10
        },
        {
            id: 2,
            name: "Apple",
            category: "friut",
            imge: "https://cdn.shopify.com/s/files/1/0530/7167/5557/products/baby-boys-blue-shoes_1_2048x2048.jpg?v=1661840303",
            price: 560,
            sizes: [
                {
                    id: 1,
                    name: "small"
                }
            ],
            offer: 10,
            desc: "this is the product that baby s",
            rest_qty: 10
        },
        {
            id: 3,
            name: "Apple",
            category: "friut",
            imge: "https://cdn.shopify.com/s/files/1/0530/7167/5557/products/baby-boys-blue-shoes_1_2048x2048.jpg?v=1661840303",
            price: 560,
            sizes: [
                {
                    id: 1,
                    name: "small"
                }
            ],
            offer: 10,
            desc: "this is the product that baby s",
            rest_qty: 10
        },
        {
            id: 4,
            name: "Apple",
            category: "friut",
            imge: "https://cdn.shopify.com/s/files/1/0530/7167/5557/products/baby-boys-blue-shoes_1_2048x2048.jpg?v=1661840303",
            price: 560,
            sizes: [
                {
                    id: 1,
                    name: "small"
                }
            ],
            offer: 10,
            desc: "this is the product that baby s",
            rest_qty: 10
        },
        {
            id: 5,
            name: "Apple",
            category: "friut",
            imge: "https://cdn.shopify.com/s/files/1/0530/7167/5557/products/baby-boys-blue-shoes_1_2048x2048.jpg?v=1661840303",
            price: 560,
            sizes: [
                {
                    id: 1,
                    name: "small"
                }
            ],
            offer: 10,
            desc: "this is the product that baby s",
            rest_qty: 10
        }
    ])
    const gotoAR = async (url1: string) => {

    }
    const handleNavigation = (name: string) => {
        navigation.navigate(name);
      }

    return (
        <Block scroll>
            {/* categories list */}
            <Block
        color={colors.card}
        flex={0}
        align={"center"}
        padding={sizes.padding}
        flexDirection="row"
        justify='space-between'
        gradients={gradients.tertiary}
      >
        <Block color={colors.card} flex={0} align={"center"} flexDirection="row" >
          <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
          <Block flex={0} >
            <Text font={fonts.bold} >  {t('home.welcome')}</Text>
            <Text> {t('temp_user.name')} </Text>
          </Block>
        </Block>

        <Button onPress={() => handleNavigation("My_Cart")}>
          <Block flex={0} align={"center"} radius={50} width={100} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}
          >
            <Text> {t("ecommerce.mycart")}  </Text>
          </Block>
        </Button>
      </Block>
            

            {
                isGiftVaucher ?
                    <Block
                        flex={0}
                        align={"center"}
                        padding={sizes.padding}
                        row
                        justify='center'
                        gradient={gradients.primary}
                    >
                        <Block flex={0} align={"center"} row >
                            <Block flex={0} align={"center"}>
                                <Text color={colors.white} > Your Gift Voucher Amount  </Text>

                                <Text color={colors.white} font={fonts.bold} size={20} paddingTop={5} >Rs 10 000.00</Text>
                                <Text color={colors.white}>This Gift from - {t('temp_user.name')} </Text>
                            </Block>
                        </Block>
                    </Block> : <Block
                        color={colors.card}
                        flex={0}
                        align={"center"}
                        padding={sizes.padding}
                        row
                        justify='center'
                        gradient={gradients.tertiary}
                    >
                        <Block color={colors.card} flex={0} align={"center"} row >
                            <Block flex={0} align={"center"}>
                                <Text font={fonts.bold} >  You Git Value </Text>
                                <Text> {t('temp_user.name')} </Text>
                            </Block>
                        </Block>
                    </Block>
            }


            {/* <Block
                flex={0}
                align={"center"}
                padding={10}
                row
                justify='center'
                gradient={gradients.gray}
            >
                <Block flex={0} align={"center"} row >
                    <Block flex={0} align={"center"}>
                        <Text >The mom baby and kid store</Text>
                    </Block>
                </Block>
            </Block> */}
            <Block color={colors.card} flex={0} padding={sizes.padding} paddingTop={18}>
                <Input search placeholder={t('common.search')} />
            </Block>
            <Block scroll horizontal showsHorizontalScrollIndicator={false} paddingVertical={20} width={windowWidth} padding={sizes.s}>
                {
                    category_list.map((item, index) => {
                        return <TouchableOpacity key={index + item.name} >
                            <Block card flex={0} align={"center"} justify="center" height={150} width={100} marginHorizontal={5}>
                                <Block
                                    flex={0}
                                    align={"center"}
                                    radius={100}
                                    card
                                    height={60} width={60}
                                    gradient={gradients.primary}
                                    padding={sizes.s}
                                    justify={'center'}
                                >
                                    <Image source={icons.father} color={colors.white} style={{ width: 35, height: 35 }} radius={0} />

                                </Block>
                                <Text paddingTop={5} center > {item.name}  </Text>
                            </Block>
                        </TouchableOpacity>
                    })
                }
            </Block>
            <View style={{flexDirection: "row",
    flexWrap: "wrap", width: windowWidth, justifyContent: "space-between" , paddingHorizontal: sizes.s,}} >
                {
                    productsList.map( (item, index) => {
                        return <Block card key={index + item.name} margin={10}
                        flex={0} align={"center"} justify="center" marginHorizontal={5} style={{
                            height: 300, width: windowWidth/2 - 25,
                        }}>
                        <Text h5 center paddingVertical={10}> {item.name}  </Text>
                        <Image source={{ uri: item.imge }}
                            color={colors.white} background
                            marginVertical={10}

                            resizeMode="cover" style={{ width: 150, height: 150 }} radius={0} />
                        {
                            item.offer == 0 ? <Block flex={1} row>
                                <Text size={17} > Rs {item.price}.00 </Text>

                            </Block> :
                                <Block flex={1} row>
                                    <Text style={{textDecorationLine: 'line-through', color: 'gray'}}> Rs {item.price}.00 </Text>
                                    <Text size={17}  color={'red'} >  Rs {item.price}.00  </Text>

                                </Block>
                        }
                        <Block
                            flex={0}
                            align={"center"}
                            radius={10}
                            width={"95%"}
                            style={{ borderColor: "green", borderWidth: 1, backgroundColor: "green" }}
                            padding={sizes.s}>
                            <Text color={"white"}> View </Text>
                        </Block>
                    </Block>
                    })
                }
            </View>


           

            <Block flex={1} align={"center"} justify="center" width={windowWidth} style={{ borderColor: "gray", borderWidth: 0 }} padding={sizes.s}>
                <Block flex={0} align={"center"} radius={50} style={{ borderColor: "green", borderWidth: 1, backgroundColor: "green" }} padding={sizes.s}>
                    <Text h5 color={"white"}> {t('ecommerce.load_more')}  </Text>
                </Block>
            </Block>

        </Block>
    );
};

const styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    user_avatart: {
        height: 40,
        width: 40
      }
});

export default Ecommerce;
