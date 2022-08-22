import React from 'react';
import { useTheme, useTranslation } from '../hooks';
import { Block, Button, Image, Text } from '../components';
import { Dimensions } from 'react-native';
// Photo gallery example
const PhotoGallery = () => {
    const { t } = useTranslation();
    const { assets, colors, fonts, gradients, sizes } = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
    const IMAGE_VERTICAL_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
    const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
    const IMAGE_VERTICAL_MARGIN = (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;
    return (React.createElement(Block, { marginTop: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Block, null,
            React.createElement(Block, { row: true, align: "center", justify: "space-between" },
                React.createElement(Text, { h5: true, semibold: true }, t("home.mothers_and_newborns")),
                React.createElement(Button, null,
                    React.createElement(Text, { p: true, primary: true, semibold: true }, "View all"))),
            React.createElement(Block, { row: true, justify: "space-between", wrap: "wrap" },
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo1, style: {
                        width: IMAGE_VERTICAL_SIZE + IMAGE_MARGIN / 2,
                        height: IMAGE_VERTICAL_SIZE * 2 + IMAGE_VERTICAL_MARGIN,
                    } }),
                React.createElement(Block, { marginLeft: sizes.m },
                    React.createElement(Image, { resizeMode: "cover", source: assets?.photo2, marginBottom: IMAGE_VERTICAL_MARGIN, style: {
                            height: IMAGE_VERTICAL_SIZE,
                            width: IMAGE_VERTICAL_SIZE,
                        } }),
                    React.createElement(Image, { resizeMode: "cover", source: assets?.photo3, style: {
                            height: IMAGE_VERTICAL_SIZE,
                            width: IMAGE_VERTICAL_SIZE,
                        } })))),
        React.createElement(Block, null,
            React.createElement(Block, { row: true, paddingTop: 20, justify: "space-between", wrap: "wrap" },
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo1, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo2, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo3, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo4, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo5, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo6, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } })),
            React.createElement(Block, { row: true, align: "center", justify: "center" },
                React.createElement(Button, null,
                    React.createElement(Text, { p: true, primary: true, semibold: true },
                        t('home.load_more'),
                        " ",
                        t('home.click_here'),
                        "..."))))));
};
export default PhotoGallery;
