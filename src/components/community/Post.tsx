import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useData, useTheme, useTranslation } from '../../hooks';
import Block from '../Block';
import Image from '../Image';
import Input from '../Input';
import Text from '../Text';
import { Dimensions } from 'react-native';
import { ICommPost } from '../../constants/types';


const PostComponent = ( { props }:{props:ICommPost}) => {
    const data = useData();
    const [post, setpost] = useState([]);
    const { t } = useTranslation();
    const [tab, setTab] = useState<number>(1);
    const { following, trending } = useData();
    const [products, setProducts] = useState(following);
    const { assets, colors, fonts, gradients, sizes, icons } = useTheme();
    const windowWidth = Dimensions.get('window').width;


    const months_sinhala = ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"];
    const d = new Date();
    let month = months_sinhala[d.getMonth()];
    let date = d.getDay();
    const p_weeks = [];
    for (let i = 1; i <= 40; i++) {
        p_weeks.push(i);
    }
    console.log(props)
    // if (props.type == 1) {
        return (
            <Block card margin={20} flex={0} >
                <Block color={colors.card} flex={0} align={"center"} row >
                    <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
                    <Block flex={0} >
                        <Text> {props.first_name} </Text>
                        <Text font={fonts.bold} >  10/10/2020 </Text>
                    </Block>
                </Block>
                <Block flex={0} row>
                    <Text marginLeft={10} size={11}>{props.title} </Text>
                </Block>
                {/* <Block flex={0} row>
                    {props.category ? props.category.map((item: asny) => {
                        return (
                            <Text marginLeft={10} size={11}>#{item.tag}</Text>
                        )
                    }) : null}
                </Block> */}
                  <Text marginLeft={10} size={11}>#{props.category}</Text>
                {/* <Block flex={0} marginTop={10} style={styles.post_content} radius={10}>
                </Block> */}
                <Image source={{uri: props.image}}   width={windowWidth-60} minHeight={300}  radius={0} />
                
                <Block flex={0} marginTop={20} row >
                    <Block row align={"center"} justify="center">
                        <Image source={icons.like} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
                        <Text > Like ({props.no_of_likes})</Text>
                    </Block>
                    <Block row align={"center"} justify="center">
                        <Image source={icons.comment} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
                        <Text> Dislike ({props.no_of_dislikes})</Text>
                    </Block>
                    <Block row align={"center"} justify="center">
                        <Image source={icons.save_instagram} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
                        <Text> Save</Text>
                    </Block>
                </Block>

                <Block color={colors.card} flex={0} align={"center"} justify="center" row marginTop={20} >
                    <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
                    <Block>
                        <Input placeholder={t('community.add_comment')} />
                    </Block>
                    <Image source={icons.image_gallery} color={colors.primary} marginHorizontal={10} style={{ width: 30, height: 30 }} radius={0} />
                </Block>

                {
                     [
                        {
                         id: 30,
                         name: "HirumaliGamage",
                         avatar: "https://i.postimg.cc/MHF8qcsL/5.png",
                         comment: `සමාජ මාධ්‍ය/අන්තර්ජාලයේ ඇති සියල්ල විශ්වාස නොකරන්න. ගර්භණී සමයේදී COVID සහ අතුරු ආබාධ පිළිබඳ වැඩි පර්යේෂණ නොමැත. ගැබ්ගැනීමේ "හොඳ" දෙය නම් ඔබට ප්‍රතිවෛරස් ලබා ගත හැක්කේ ඔබ ප්‍රතිශක්තිකරණයෙන් පෙළෙන අය ලෙස සලකන බැවිනි. මම 27 වැනි සතියේ කළා. ඔබ හදිසි ER ප්‍රතිකාරයකට ගොස් ඔබට ප්‍රතිවෛරස් ලබා ගත හැකි දැයි බලන්න. බොහෝ මිනිසුන්ට උණ සමඟ නරක අතට හැරේ. කලබල වෙන්න එපා!`,
                         reply: [
                           {
                             id: 32,
                             name: "Minuli Nulansa",
                             avatar: "",
                             comment: "",
                             reply: [
                               
                             ]
                           }, 
                         ]
                       },    
                     ].map((item: any) => {
                        return (
                            <Block color={colors.card} flex={0} marginTop={10} align={"center"} row paddingLeft={20}>
                                <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
                                <Block flex={0} width={300} >
                                    <Text size={11} >{item.name} </Text>
                                    <Text font={fonts.bold} size={13}  marginLeft={10}> {item.comment} </Text>
                                </Block>
                            </Block>
                        )
                    }) 
                }

            </Block>

        )
    // } else if (props.type == 2) {
    //     return (
    //         <Block card margin={20} flex={0} >
    //             <Block color={colors.card} flex={0} align={"center"} row >
    //                 <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
    //                 <Block flex={0} >
    //                     <Text> {props.user.name} </Text>
    //                     <Text font={fonts.bold} >  10/10/2020 </Text>
    //                 </Block>
    //             </Block>
               
    //             <Block flex={0} row>
    //                 {props.category ? props.category.map((item: asny) => {
    //                     return (
    //                         <Text marginLeft={10} size={11}>#{item.tag}</Text>
    //                     )
    //                 }) : null}
    //             </Block>
                
    //             <Block flex={0}  marginTop={10}  radius={10}>
    //                 <Text h3 paddingTop={10}> {props.caption} {props.caption} asdadasd asd as dasd asd asd asd asd asd a</Text>
    //             </Block>

    //             {/* <Image source={{uri: props.content.image}}   width={windowWidth-60} minHeight={300}  radius={0} r /> */}
                
    //             <Block flex={0} marginTop={20} row >
    //                 <Block row align={"center"} justify="center">
    //                     <Image source={icons.like} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
    //                     <Text > Like ({props.like})</Text>
    //                 </Block>
    //                 <Block row align={"center"} justify="center">
    //                     <Image source={icons.comment} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
    //                     <Text> Comment</Text>
    //                 </Block>
    //                 <Block row align={"center"} justify="center">
    //                     <Image source={icons.save_instagram} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
    //                     <Text> Save</Text>
    //                 </Block>
    //             </Block>

    //             <Block color={colors.card} flex={0} align={"center"} justify="center" row marginTop={20} >
    //                 <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
    //                 <Block>
    //                     <Input placeholder={t('community.add_comment')} />
    //                 </Block>
    //                 <Image source={icons.image_gallery} color={colors.primary} marginHorizontal={10} style={{ width: 30, height: 30 }} radius={0} />
    //             </Block>

    //             {
    //                 props.comment ? props.comment.map((item: any) => {
    //                     return (
    //                         <Block color={colors.card} flex={0} marginTop={10} align={"center"} row marginLeft={20}>
    //                             <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
    //                             <Block flex={0} >
    //                                 <Text size={11}> {item.name} </Text>
    //                                 <Text font={fonts.bold} size={13}  marginLeft={10}> {item.comment} </Text>
    //                             </Block>
    //                         </Block>
    //                     )
    //                 }) : null
    //             }

    //         </Block>

    //     )
    // } else {
    //     return (
    //         <Block card margin={20} flex={0} >
    //             <Block color={colors.card} flex={0} align={"center"} row >
    //                 <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
    //                 <Block flex={0} >
    //                     <Text> {props.user.name} </Text>
    //                     <Text font={fonts.bold} >  10/10/2020 </Text>
    //                 </Block>
    //             </Block>
    //             <Block flex={0} row>
    //                 <Text marginLeft={10} size={11}> This Commit for </Text>
    //             </Block>
    //             <Block flex={0} row>
    //                 <Text marginLeft={10} size={11}>#Pregnancy2</Text>
    //             </Block>
    //             <Block flex={0} marginTop={10} style={styles.post_content} radius={10}>

    //             </Block>

    //             <Block flex={0} marginTop={20} row >
    //                 <Block row align={"center"} justify="center">
    //                     <Image source={icons.like} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
    //                     <Text > Link</Text>
    //                 </Block>
    //                 <Block row align={"center"} justify="center">
    //                     <Image source={icons.comment} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
    //                     <Text> Comment</Text>
    //                 </Block>
    //                 <Block row align={"center"} justify="center">
    //                     <Image source={icons.save_instagram} color={colors.primary} style={{ width: 19, height: 19 }} radius={0} />
    //                     <Text> Save</Text>
    //                 </Block>
    //             </Block>

    //             <Block color={colors.card} flex={0} align={"center"} justify="center" row marginTop={20} >
    //                 <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
    //                 <Block>
    //                     <Input placeholder={t('community.add_comment')} />
    //                 </Block>
    //                 <Image source={icons.image_gallery} color={colors.primary} marginHorizontal={10} style={{ width: 30, height: 30 }} radius={0} />
    //             </Block>

    //             <Block color={colors.card} flex={0} marginTop={10} align={"center"} row marginLeft={20}>
    //                 <Image source={assets.avatar} style={styles.user_avatart} radius={50} />
    //                 <Block flex={0} >
    //                     <Text size={11}> {t('temp_user.name')} </Text>
    //                     <Text font={fonts.bold} size={13} >  {month} {date} </Text>
    //                 </Block>
    //             </Block>

    //         </Block>

    //     )
    // }
}


const styles = StyleSheet.create({
    user_avatart: {
        height: 40,
        width: 40
    },
    post_content: {
        backgroundColor: "gray",
        height: 400,

    }
});
export default PostComponent;