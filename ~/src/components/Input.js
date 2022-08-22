import React, { useCallback, useState } from 'react';
import { Image, TextInput, StyleSheet, Platform, } from 'react-native';
import Block from './Block';
import Text from './Text';
import useTheme from '../hooks/useTheme';
const Input = ({ id = 'Input', style, color, primary, secondary, tertiary, black, white, gray, danger, warning, success, info, search, disabled, label, icon, marginBottom, marginTop, marginHorizontal, marginVertical, marginRight, marginLeft, onFocus, onBlur, ...props }) => {
    const { assets, colors, sizes } = useTheme();
    const [isFocused, setFocused] = useState(false);
    const handleFocus = useCallback((event, focus) => {
        setFocused(focus);
        focus && onFocus?.(event);
        !focus && onBlur?.(event);
    }, [setFocused, onFocus, onBlur]);
    const colorIndex = primary
        ? 'primary'
        : secondary
            ? 'secondary'
            : tertiary
                ? 'tertiary'
                : black
                    ? 'black'
                    : white
                        ? 'white'
                        : gray
                            ? 'gray'
                            : danger
                                ? 'danger'
                                : warning
                                    ? 'warning'
                                    : success
                                        ? 'success'
                                        : info
                                            ? 'info'
                                            : null;
    const inputColor = color
        ? color
        : colorIndex
            ? colors?.[colorIndex]
            : colors.gray;
    const inputBoxStyles = StyleSheet.flatten([
        style,
        {
            minHeight: sizes.inputHeight,
            ...(marginBottom && { marginBottom: marginBottom }),
            ...(marginTop && { marginTop: marginTop }),
            ...(marginHorizontal && { marginHorizontal: marginHorizontal }),
            ...(marginVertical && { marginVertical: marginVertical }),
            ...(marginRight && { marginRight: marginRight }),
            ...(marginLeft && { marginLeft: marginLeft }),
        },
    ]);
    const inputContainerStyles = StyleSheet.flatten([
        {
            minHeight: sizes.inputHeight,
            borderRadius: sizes.inputRadius,
            borderWidth: isFocused ? 2 : sizes.inputBorder,
            borderColor: isFocused ? colors.focus : inputColor,
        },
    ]);
    const inputStyles = StyleSheet.flatten([
        {
            flex: 1,
            zIndex: 2,
            height: '100%',
            fontSize: sizes.p,
            color: colors.input,
            paddingHorizontal: sizes.inputPadding,
        },
    ]);
    // generate component testID or accessibilityLabel based on Platform.OS
    const inputID = Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };
    return (React.createElement(Block, { flex: 0, style: inputBoxStyles },
        label && (React.createElement(Text, { bold: true, marginBottom: sizes.s }, label)),
        React.createElement(Block, { row: true, align: "center", justify: "flex-end", style: inputContainerStyles },
            search && assets.search && (React.createElement(Image, { source: assets.search, style: { marginLeft: sizes.inputPadding, tintColor: colors.icon } })),
            icon && (React.createElement(Image, { source: assets?.[icon], style: { marginLeft: sizes.inputPadding, tintColor: colors.icon } })),
            React.createElement(TextInput, { ...inputID, ...props, style: inputStyles, editable: !disabled, placeholderTextColor: inputColor, onFocus: (event) => handleFocus(event, true), onBlur: (event) => handleFocus(event, false) }),
            danger && assets.warning && (React.createElement(Image, { source: assets.warning, style: {
                    marginRight: sizes.s,
                    tintColor: colors.danger,
                } })),
            success && assets.check && (React.createElement(Image, { source: assets.check, style: {
                    width: 12,
                    height: 9,
                    marginRight: sizes.s,
                    tintColor: colors.success,
                } })))));
};
export default React.memo(Input);
