import React from 'react';
import { useTheme, useTranslation } from '../../hooks';
import { Block, Image, Text } from '../../components';
import { Dimensions } from 'react-native';
// Photo gallery example
const LandingCoursol = () => {
    const { t } = useTranslation();
    const { assets, colors, fonts, gradients, sizes } = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
    const IMAGE_VERTICAL_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
    const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
    const IMAGE_VERTICAL_MARGIN = (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;
    return (React.createElement(Block, { marginTop: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Block, { flex: 0, paddingTop: 2, paddingBottom: 10 },
            React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s, size: sizes.sm, color: colors.dribbble },
                t('home.this_week'),
                " ",
                t('home.trending'),
                " ",
                t('home.article'))),
        React.createElement(Block, { marginBottom: sizes.xxl },
            React.createElement(Image, { resizeMode: "cover", height: 200, source: { uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pregnant-647x363.jpeg?KtQwM_4Jl81KurqIHeIkrSNMXEP3dYCs" }, style: { width: '100%' } }),
            React.createElement(Text, { p: true, secondary: true, marginTop: sizes.sm }, "Private Room \u2022 1 Guests \u2022 1 Sofa"),
            React.createElement(Text, { h4: true, marginVertical: sizes.s }, "Single room in center"),
            React.createElement(Text, { p: true, lineHeight: 26 }, "As Uber works through a huge amount of internal management turmoil, the company is also consolidating."))));
};
export default LandingCoursol;
