import React from 'react';
import dayjs from 'dayjs';
import { TouchableWithoutFeedback } from 'react-native';
import Text from '../Text';
import Block from '../Block';
import Image from '../Image';
import { useTheme, useTranslation } from '../../hooks/';
import { Dimensions } from 'react-native';
const TrendingArticleCard = ({ title, description, image, category, rating, location, timestamp, user, onPress, }) => {
    const { t } = useTranslation();
    const { colors, gradients, icons, sizes } = useTheme();
    const windowWidth = Dimensions.get('window').width;
    return (React.createElement(Block, { width: windowWidth - 50 },
        React.createElement(TouchableWithoutFeedback, { onPress: onPress }, category?.id !== 1 ? React.createElement(Block, { card: true, padding: sizes.sm, marginTop: sizes.sm, marginRight: 20 },
            React.createElement(Image, { height: 170, resizeMode: "cover", source: { uri: image } }),
            category?.name && (React.createElement(Text, { h5: true, bold: true, size: 13, marginTop: sizes.s, transform: "uppercase", marginLeft: sizes.xs, gradient: gradients.primary }, category?.name)),
            description && (React.createElement(Text, { p: true, marginTop: sizes.s, marginLeft: sizes.xs, marginBottom: sizes.sm }, String(description).substring(0, 100))),
            user?.name && (React.createElement(Block, { row: true, marginLeft: sizes.xs, marginBottom: sizes.xs },
                React.createElement(Image, { radius: sizes.s, width: sizes.xl, height: sizes.xl, source: { uri: user?.avatar }, style: { backgroundColor: colors.white } }),
                React.createElement(Block, { justify: "center", marginLeft: sizes.s },
                    React.createElement(Text, { p: true, semibold: true }, user?.name),
                    React.createElement(Text, { p: true, gray: true }, t('common.posted', {
                        date: dayjs(timestamp).format('DD MMMM') || '-',
                    }))))),
            (Boolean(location) || Boolean(rating)) && (React.createElement(Block, { row: true, align: "center", paddingVertical: sizes.sm },
                React.createElement(Image, { source: icons.location, marginRight: sizes.s }),
                React.createElement(Text, { p: true, size: 12, semibold: true },
                    location?.city,
                    ", ",
                    location?.country),
                React.createElement(Text, { p: true, bold: true, marginHorizontal: sizes.s }, "\u2022"),
                React.createElement(Image, { source: icons.star, marginRight: sizes.s }),
                React.createElement(Text, { p: true, size: 12, semibold: true },
                    rating,
                    "/5")))) : React.createElement(Block, { card: true, white: true, padding: 0, marginTop: sizes.sm },
            React.createElement(Image, { background: true, resizeMode: "cover", radius: sizes.cardRadius, source: { uri: image } },
                React.createElement(Block, { color: colors.overlay, padding: sizes.padding },
                    React.createElement(Text, { h4: true, white: true, marginBottom: sizes.sm }, title),
                    React.createElement(Text, { p: true, white: true }, String(description).substring(0, 100)),
                    React.createElement(Block, { row: true, marginTop: sizes.xxl },
                        React.createElement(Image, { radius: sizes.s, width: sizes.xl, height: sizes.xl, source: { uri: user?.avatar }, style: { backgroundColor: colors.white } }),
                        React.createElement(Block, { justify: "center", marginLeft: sizes.s },
                            React.createElement(Text, { p: true, white: true, semibold: true }, user?.name),
                            React.createElement(Text, { p: true, white: true }, user?.department)))))))));
};
export default TrendingArticleCard;
