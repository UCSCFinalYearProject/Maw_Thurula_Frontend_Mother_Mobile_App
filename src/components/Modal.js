import React from 'react';
import { StyleSheet, Modal as RNModal, Platform } from 'react-native';
import { useTheme } from '../hooks/';
import Block from './Block';
import Button from './Button';
import Image from './Image';
const Modal = ({ id = 'Modal', children, style, onRequestClose, ...props }) => {
    const { assets, colors, sizes } = useTheme();
    const modalStyles = StyleSheet.flatten([style, {}]);
    // generate component testID or accessibilityLabel based on Platform.OS
    const modalID = Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };
    return (React.createElement(RNModal, { ...modalID, ...props, transparent: true, style: modalStyles, animationType: "slide", onRequestClose: onRequestClose },
        React.createElement(Block, { justify: "flex-end" },
            React.createElement(Block, { safe: true, card: true, flex: 0, color: "rgba(0,0,0,0.8)" },
                React.createElement(Button, { top: 0, right: 0, position: "absolute", onPress: () => onRequestClose?.() },
                    React.createElement(Image, { source: assets.close, color: colors.white })),
                React.createElement(Block, { flex: 0, marginTop: sizes.xxl, paddingHorizontal: sizes.padding }, children)))));
};
export default React.memo(Modal);
