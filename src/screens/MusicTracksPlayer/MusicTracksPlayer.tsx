import { Block, Button, Text } from "../../components";
import React, { useCallback, useEffect, useState } from 'react';
import { useData, useTheme, useTranslation } from "../../hooks";
import { FlatList, StyleSheet } from "react-native";
import { IMusicTrack } from "../../constants/types";
import MusicPayerCard from "../../components/MusicPlayer/MusicPayerCard";

const MusicTracksPlayer = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const { following, trending } = useData();
  const [products, setProducts] = useState(following);
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const data = useData();
  const [MusicTracksPlayer, setMusicTracksPlayer] = useState<IMusicTrack[]>([]);

  // init MusicTracksPlayer
  useEffect(() => {
    setMusicTracksPlayer([
      {
        id: 1,
        title: "දරුවා සහ මව සඳහා ගැබ්ගැනීම් සංගීතය ♫♫♫",
        url: "https://www.mboxdrive.com/asu.mp3",
        like: 125,
        dislike: 25,
        image: "https://i.postimg.cc/DwTBpxGz/pregnanat-lisint-music.jpg"
      },
      {
        id: 2,
        title: "දරුවා සහ මව සඳහා ගැබ්ගැනීම් සංගීතය ♫♫♫",
        url: "https://www.mboxdrive.com/%d0%90%d0%9a-47%20-%20%d0%bc%d1%83%d1%81%d0%be%d1%80%d0%b0.mp3",
        like: 185,
        dislike: 25,
        image: "https://www.fimshospitals.com/fims-img/blog/music.jpg"
      },
      {
        id: 3,
        title: "දරුවා සහ මව සඳහා ගැබ්ගැනීම් සංගීතය ♫♫♫",
        url: "https://www.mboxdrive.com/%d0%91%d1%83%d1%82%d1%8b%d1%80%d0%ba%d0%b0%20-%20%d0%97%d0%b0%20%d0%a0%d0%be%d1%81%d1%82%d0%be%d0%b2%d1%81%d0%ba%d1%83%d1%8e%20%d0%91%d1%80%d0%b0%d1%82%d0%b2%d1%83%20(%d0%9f%d0%b0%d0%bc%d1%8f%d1%82%d0%b8%20%d0%95%d0%b2%d0%b3%d0%b5%d0%bd%d0%b8%d1%8f%20%d0%9f%d0%be%d0%bf%d0%be%d0%b2%d0%b0).mp3",
        like: 231,
        dislike: 25,
        image: "https://img.freepik.com/premium-photo/pregnant-woman-listening-music-from-headphones_34840-302.jpg?w=2000"
      },
      {
        id: 4,
        title: "දරුවා සහ මව සඳහා ගැබ්ගැනීම් සංගීතය ♫♫♫",
        url: "https://www.mboxdrive.com/%d0%90%d0%9a-47%20-%20%d0%bc%d1%83%d1%81%d0%be%d1%80%d0%b0.mp3",
        like: 125,
        dislike: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW3YJMdILqD5jIEBzwJamucOSev7AhZb0cQ&usqp=CAU"
      },
      {
        id: 5,
        title: "දරුවා සහ මව සඳහා ගැබ්ගැනීම් සංගීතය ♫♫♫",
        url: "https://www.mboxdrive.com/%d0%90%d0%9a-47%20-%20%d0%bc%d1%83%d1%81%d0%be%d1%80%d0%b0.mp3",
        like: 185,
        dislike: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLXL-LvlGuERmXohcWZ3DwPk7rqRitQrdnQ&usqp=CAU"
      },
      {
        id: 6,
        title: "දරුවා සහ මව සඳහා ගැබ්ගැනීම් සංගීතය ♫♫♫",
        url: "https://www.mboxdrive.com/%d0%91%d1%83%d1%82%d1%8b%d1%80%d0%ba%d0%b0%20-%20%d0%90%d1%82%d1%82%d0%b5%d1%81%d1%82%d0%b0%d1%82.mp3",
        like: 84,

        dislike: 25, 
        image: "https://img.freepik.com/free-photo/pregnant-woman-with-ultrasound-photo-listening-music_1303-27139.jpg"
      },
      {
        id: 7,
        title: "දරුවා සහ මව සඳහා ගැබ්ගැනීම් සංගීතය ♫♫♫",
        url: "https://www.mboxdrive.com/%d0%91%d1%80%d0%b5%d0%bc%d0%b5%d0%bd%d1%81%d0%ba%d0%b8%d0%b5_%d0%bc%d1%83%d0%b7%d1%8b%d0%ba%d0%b0%d0%bd%d1%82%d1%8b_Remix_Modern_Music_Bass_Boost.mp3",
        like: 31,

        dislike: 25, 
        image: "https://i.postimg.cc/DwTBpxGz/pregnanat-lisint-music.jpg"
      }
    ]);
  }, [data, data.categories]);

  return (
    <Block
      scroll
      showsVerticalScrollIndicator={false}>


      <Block >

        <FlatList
          data={MusicTracksPlayer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: IMusicTrack) => `${item?.id}`}
          style={{ paddingHorizontal: sizes.padding }}
          contentContainerStyle={{ paddingBottom: sizes.s }}
          renderItem={({ item }) => <MusicPayerCard {...item} />}
        />
      </Block>
    </Block>
  )

}



export default MusicTracksPlayer;