import React from 'react';
import { TouchableOpacity } from 'react-native';
import Block from './Block';
import Image from './Image';
import Text from './Text';
import { useTheme, useTranslation } from '../hooks/';
const Product = ({ image, title, type, linkLabel }) => {
    const { t } = useTranslation();
    const { assets, colors, sizes } = useTheme();
    const isHorizontal = type !== 'vertical';
    const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;
    return (React.createElement(Block, { card: true, flex: 0, row: isHorizontal, marginBottom: sizes.sm, width: isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH },
        React.createElement(Image, { resizeMode: "cover", source: { uri: image }, style: {
                height: isHorizontal ? 114 : 110,
                width: !isHorizontal ? '100%' : sizes.width / 2.435,
            } }),
        React.createElement(Block, { paddingTop: sizes.s, justify: "space-between", paddingLeft: isHorizontal ? sizes.sm : 0, paddingBottom: isHorizontal ? sizes.s : 0 },
            React.createElement(Text, { p: true, marginBottom: sizes.s }, title),
            React.createElement(TouchableOpacity, null,
                React.createElement(Block, { row: true, flex: 0, align: "center" },
                    React.createElement(Text, { p: true, color: colors.link, semibold: true, size: sizes.linkSize, marginRight: sizes.s }, linkLabel || t('common.readArticle')),
                    React.createElement(Image, { source: assets.arrow, color: colors.link }))))));
};
export default Product;
