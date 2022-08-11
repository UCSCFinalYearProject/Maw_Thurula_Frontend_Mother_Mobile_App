import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native';

import { useData, useTheme, useTranslation } from "../../hooks";
import { Block, Button, Article, Text, Image } from '../../components/';

const PregnancyTracker = () => {
    const { t } = useTranslation();
    const { following, trending } = useData();
    const [products, setProducts] = useState(following);
    const { assets, colors, fonts, gradients, sizes } = useTheme();
    const data = useData();
    const windowWidth = Dimensions.get('window').width;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const months_sinhala = ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"];
    const d = new Date();
    let month = months_sinhala[d.getMonth()];
    let date = d.getDay();
    const p_weeks = [];
    for (let i = 1; i <= 40; i++) {
        p_weeks.push(i);
    }

    const [activeWeek, setActiveWeek] = useState(1);
    return (
        <Block>
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
                        <Text font={fonts.bold} >  {t('pregnancy_tracker.Pregnancy_Tracking')}</Text>
                        <Text> {t('temp_user.name')} </Text>
                    </Block>
                </Block>

                <Block flex={0} align={"center"} radius={50} width={100} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}>
                    <Text> {t("home.diary")}  </Text>
                </Block>
            </Block>

            <Block color={colors.card} row flex={0} padding={sizes.padding} >
                <Block

                    style={styles.week_container} >
                    <Block
                        flex={0} >
                        <Text > {month} {date} ,</Text>
                        <Text size={16} bold > {t('pregnancy_tracker.Pregnancy_Tracking')} </Text>
                    </Block>
                    <Block
                        card
                        gradient={gradients.primary}
                        scroll
                        horizontal={true}
                        paddingVertical={10}
                        flex={0} row>
                    
                        {
                            p_weeks.map(item => {
                                return <Button key={item} onPress={() => { setActiveWeek(item) }} >
                                    <Block flex={0}  style={[styles.week, activeWeek == item ? styles.week_active : null , { shadowOpacity: 1, shadowColor: "red"}]} align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                        <Text bold h3 color={activeWeek == item ? "white" : "gray"}>{item}</Text>
                                        <Text size={12} color={activeWeek == item ? "white" : "gray"} > {t('pregnancy_tracker.week')} </Text>
                                    </Block>
                                </Button>
                            })
                        }
                    </Block>

                    <Block
                        scroll
                        horizontal={true}
                        paddingVertical={10}
                        flex={0} row>
                    
                        {
                            p_weeks.map(item => {
                                return <Button key={item} onPress={() => { setActiveWeek(item) }} >
                                    <Block flex={0}  style={[styles.week, activeWeek == item ? styles.week_active : null , { shadowOpacity: 1, shadowColor: "red"}]} align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                        <Text bold h3 color={activeWeek == item ? "white" : "gray"}>{item}</Text>
                                        <Text size={12} color={activeWeek == item ? "white" : "gray"} > {t('pregnancy_tracker.week')} </Text>
                                    </Block>
                                </Button>
                            })
                        }
                    </Block>
                </Block>
            </Block>

            {/* <FlatList
        data={articles}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item?.id}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => <Article {...item} />}
      /> */}
        </Block>
    );
};

const styles = StyleSheet.create({
    user_avatart: {
        height: 40,
        width: 40
    },
    week_container: {
    },
    week: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    week_active: {
        backgroundColor: "red",
    }
});
export default PregnancyTracker;
