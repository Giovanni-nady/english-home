import React from "react";
import { TextProps, TextStyle } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import Animated from "react-native-reanimated";

type ComponentType = typeof Text | typeof Animated.Text;

interface AppTextProps extends TextProps {
    size?: "displayLarge" | "displayMedium" | "displaySmall"
    | "headlineLarge" | "headlineMedium" | "headlineSmall"
    | "titleLarge" | "titleMedium" | "titleSmall"
    | "bodyLarge" | "bodyMedium" | "bodySmall"
    | "labelLarge" | "labelMedium" | "labelSmall";
    fontFamily?: "Roboto-Black-900" | "Roboto-BlackItalic-900" | "Roboto-Bold-700" | "Roboto-BoldItalic-700"
    | "Roboto-Italic"| "Roboto-Medium-500" | "Roboto-MediumItalic-500"
    | "Roboto-Regular-400"
    | "Roboto-Light-300" | "Roboto-LightItalic-300"
    | "Roboto-Thin-100" | "Roboto-ThinItalic-100";
    color?: keyof MD3Colors | string;
    style?: TextStyle | TextStyle[];
    align?: "left"|"center"|"right";
    children?: React.ReactNode;
    isAnimated?: boolean;
}

const fontWeightMapping: {
  [key in NonNullable<AppTextProps['fontFamily']>]: TextStyle['fontWeight']
} = {
  'Roboto-Black-900': '900',
  'Roboto-BlackItalic-900': '900',
  'Roboto-Bold-700': '700',
  'Roboto-BoldItalic-700': '700',
  'Roboto-Italic': 'normal',
  'Roboto-Medium-500': '500',
  'Roboto-MediumItalic-500': '500',
  'Roboto-Regular-400': '400',
  'Roboto-Light-300': '300',
  'Roboto-LightItalic-300': '300',
  'Roboto-Thin-100': '100',
  'Roboto-ThinItalic-100': '100'
}



const TextComponent: React.FC<AppTextProps> = ({
    children,
    color = "primary",
    fontFamily,
    style,
    size = "titleMedium",
    isAnimated = false,
    align="left",
    ...props
}) => {
    const theme = useTheme();
    const Component: ComponentType = isAnimated ? Animated.Text : Text;

    const textColor = (theme.colors[color as keyof MD3Colors] || color) as string;
    const fontWeight = fontFamily ? fontWeightMapping[fontFamily] : undefined

    return (
        <Component
            variant={size}
            style={[
                {
                    textAlign:align,
                    fontFamily: fontFamily,
                     fontWeight: fontWeight,
                    color: textColor,
                },
                style
            ]}
            {...props}>
            {children}
        </Component>
    );
};

export default TextComponent;
