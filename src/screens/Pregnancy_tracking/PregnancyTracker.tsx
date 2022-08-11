import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native';

import { useData, useTheme, useTranslation } from "../../hooks";
import { Block, Button, Article, Text } from '../../components/';
import Image from '../../components/Image'

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

    const [pregnancy_tracker, setPregnancy_tracker] = useState([
        {
            Week: 1,
            Your_baby:`Your pregnancy is calculated according to the first day of your last period. In the first week of your menstrual cycle, and in the second week your ovaries release an egg (called an ovum). This is fertilised by your partner’s sperm sometime in the third week.
            About 30 hours after conception, the fertilised egg divides into two. At this stage it is called a zygote. The cells keep dividing and multiplying in numbers and the zygote gradually moves down the fallopian tube towards the womb (uterus).
            By the end of the fourth week, the egg implants itself into your uterus. It is now called a blastocyst. It is about 0.2mm wide and contains about 200 cells.
            The blastocyst is made up of different layers of cells. The outer layer, called the ectoderm, will become the baby’s nervous system and brain. The middle layer, or mesoderm, will become the heart, blood vessels, muscles, and bones, and the inner layer, or endoderm will become the breathing and digestive systems. The outside of the blastocyst has small tentacles called chorionic villi, which will develop into the placenta.`,
            Length: "0.2mm",
            Weight: "cann’t measure",
            Your_Body: `As soon as you conceive, the hormone levels in your body start to change. You produce more of the hormone progesterone, which prevents you from having a period, and there is an increase your levels of human chorionic gonadotropin (hCG). This is the pregnancy hormone that is detected when you do a pregnancy test.
            You probably won’t notice any signs that you’re pregnant just yet. The first sign for many women is that they miss their period at the end of week 4.
            Things to remember:Your baby will have the best possible start in life if you make sure you are healthy when you conceive.
            If you are trying for a baby, it’s a good idea to take 400 micrograms of folate every day to prevent neural tube defects such as spina bifida. If the baby is planned, you might consider seeing your doctor to talk about genetic screening or to be tested for any sexually transmitted infections before you fall pregnant.
            You should try to eat a healthy diet and make sure you’re not overweight when you’re trying to fall pregnant. Not drinking alcohol and giving up smoking are best for your baby.
            Read more here about preconception health.`,
            Image1:"https://i.postimg.cc/50mVvMHF/pregnancy-week-01-f95197.png",
            Image2:"https://i.postimg.cc/DzG27dDj/pregnancy-week-2-fertilization-square-png-pagespeed-ce-ce-POu-Nvw.png"
            },
            {
            Week: 5,
            Your_baby:`By week 5, your baby has burrowed into the wall of your uterus. It is now called an embryo and measures about 2mm from end to end. The foundations for all of the major organs are in place. The baby is inside an amniotic sac, a bag of fluid that protects it.
            The cells in the baby are still dividing. In week 5, the brain and spinal column are already starting to form. The spinal cord is called the neural tube and is developing as an open groove. Your baby’s head is much larger than the rest of the body at this stage as the brain and face are developing very rapidly.
            Your baby’s heart will start beating this week. The blood vessels are already starting to form and blood is circulating in the baby’s body. A string of blood vessels connects you to your baby, and this will eventually become the umbilical cord.`,
            Length:"2mm",
            Weight:" cann’t measure",
            Your_Body: `Week 5 is when most women start to wonder whether they may be pregnant. You will have missed your period, but you may be feeling like it’s just about to start. You may notice your breasts are larger and feel sore, and you may be feeling quite tired.
            Some women may feel nauseous, or notice they need to go to the toilet more often than usual.
            You will also be producing more human chorionic gonadotropin (hCG).
            Things to remember:You can do a pregnancy test the day after you miss your period. There are many different tests available, so make sure you follow the instructions carefully.
            If the pregnancy test shows you’re pregnant, it’s a good idea to see your doctor as soon as possible. They will confirm you are pregnant and advise you on how to look after yourself and your baby.
            Finding out you’re pregnant can be very exciting. But for some women, pregnancy is unplanned. Whether the baby was planned or not, you may feel a range of emotions from joy to surprise to shock.
            It’s important not to drink any alcohol, smoke cigarettes or take illicit drugs if you’re pregnant since these can all be very harmful for your baby.`,
            Image1:"https://i.postimg.cc/6pM77X97/pregnancy-week-05-39f617.png",
            Image2: "https://i.postimg.cc/6pM77X97/pregnancy-week-05-39f617.png"
            }
            
    ]);
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
                <Block flex={0} align={"center"} radius={50} width={150} style={{ borderColor: "green", borderWidth: 1 }} padding={sizes.s}>
                    <Text> {t("pregnancy_tracker.more_days")} 250  </Text>
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
                    <Block flex={0} row justify='space-between'  marginBottom={-50} paddingTop={10} width={"100%"}>
                                <Block flex={0}
                                    align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                    <Text bold h5 color="gray" > {pregnancy_tracker[activeWeek].Length} </Text>
                                    <Text size={12} color={"gray"} > {t('pregnancy_tracker.Length')} </Text>
                                </Block>
                                <Block flex={0}
                                    align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                    <Text bold h5 color="gray" > {pregnancy_tracker[activeWeek].Weight}</Text>
                                    <Text size={12} color={"gray"} > {t('pregnancy_tracker.Weight')} </Text>
                                </Block>
                            </Block>
                    <Block
                        flex={0}
                        marginTop={20}
                        align='center'>
                        <Image
                            style={{ height: 300, width: 300 }}
                            background
                            resizeMode="contain"
                            radius={sizes.cardRadius}
                            source={{ uri: pregnancy_tracker[activeWeek].Image1 }} >
                           
                        </Image>
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
                                    <Block flex={0}
                                        gradient={activeWeek == item ? gradients.secondary : gradients.light} style={[styles.week, activeWeek == item ? styles.week_active : null, { shadowOpacity: 1, shadowColor: "red" }]} align="center" justify='center' marginHorizontal={10} marginVertical={10}>
                                        <Text bold h3 color={activeWeek == item ? "white" : "gray"}>{item}</Text>
                                        <Text size={12} color={activeWeek == item ? "white" : "gray"} > {t('pregnancy_tracker.week')} </Text>
                                    </Block>
                                </Button>
                            })
                        }
                    </Block>
                </Block>

            </Block>

            
            <Block
                scroll
                horizontal={true}
                paddingVertical={10}
                paddingHorizontal={sizes.m}
                flex={0} >

                <Text size={16} bold > {t('pregnancy_tracker.Your_Baby')} </Text>
            </Block>
             
            <Block
                scroll
                horizontal={true}
                paddingVertical={10}
                paddingHorizontal={sizes.m}
                flex={0} >

                <Text size={16} bold > {t('pregnancy_tracker.Your_Body')} </Text>
            </Block>
             
            <Block
                scroll
                horizontal={true}
                paddingVertical={10}
                paddingHorizontal={sizes.m}
                flex={0} >

                <Text size={16} bold > {t('pregnancy_tracker.Things_to_remember')} </Text>
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
