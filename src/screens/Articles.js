import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useData, useTheme } from '../hooks/';
import { Block, Button, Article, Text } from '../components/';
const Articles = () => {
    const data = useData();
    const [selected, setSelected] = useState();
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const { colors, gradients, sizes } = useTheme();
    // init articles
    useEffect(() => {
        setArticles(data?.articles);
        setCategories(data?.categories);
        setSelected(data?.categories[0]);
    }, [data.articles, data.categories]);
    // update articles on category change
    useEffect(() => {
        const category = data?.categories?.find((category) => category?.id === selected?.id);
        const newArticles = data?.articles?.filter((article) => article?.category?.id === category?.id);
        setArticles(newArticles);
    }, [data, selected, setArticles]);
    return (React.createElement(Block, null,
        React.createElement(Block, { color: colors.card, row: true, flex: 0, paddingVertical: sizes.padding },
            React.createElement(Block, { scroll: true, horizontal: true, renderToHardwareTextureAndroid: true, showsHorizontalScrollIndicator: false, contentOffset: { x: -sizes.padding, y: 0 } }, categories?.map((category) => {
                const isSelected = category?.id === selected?.id;
                return (React.createElement(Button, { radius: sizes.m, marginHorizontal: sizes.s, key: `category-${category?.id}}`, onPress: () => setSelected(category), gradient: gradients?.[isSelected ? 'primary' : 'light'] },
                    React.createElement(Text, { p: true, bold: isSelected, white: isSelected, black: !isSelected, transform: "capitalize", marginHorizontal: sizes.m }, category?.name)));
            }))),
        React.createElement(FlatList, { data: articles, showsVerticalScrollIndicator: false, keyExtractor: (item) => `${item?.id}`, style: { paddingHorizontal: sizes.padding }, contentContainerStyle: { paddingBottom: sizes.l }, renderItem: ({ item }) => React.createElement(Article, { ...item }) })));
};
export default Articles;
