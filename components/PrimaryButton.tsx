import React, { ReactNode } from "react";
import TextComponent from "@textComponent";
import { Pressable, PressableProps, TextStyle, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";

type ComponentType = typeof TouchableOpacity | typeof Pressable;

// interface for button
interface PrimaryButtonProps extends PressableProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    bgColor?: keyof MD3Colors | string;
    borderColor?: keyof MD3Colors | string;
    textColor?: keyof MD3Colors | string;
    touchableOpacity?:boolean;
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    title,
    children,
    onPress,
    disabled = false,
    loading = false,
    bgColor = "primary",
    borderColor = "borderColor",
    textColor = "primary",
    touchableOpacity = false,
    style,
}) => {
    const theme = useTheme(); 
    const { t } = useTranslation();
    const Component: ComponentType = touchableOpacity ? TouchableOpacity : Pressable;
    const backgroundColor = (theme.colors[bgColor as keyof MD3Colors] || bgColor) as string;
    const disabledBackgroundColor = (theme.colors["buttonDisabled" as keyof MD3Colors] || "onPrimary") as string;
    const borderTheme = (theme.colors[borderColor as keyof MD3Colors] || borderColor) as string;

    return (
        <Component
            onPress={onPress}
            style={[{
                backgroundColor: disabled? disabledBackgroundColor:backgroundColor,
                borderWidth: 2,
                borderColor: disabled? disabledBackgroundColor:borderTheme,
                borderRadius: 100,
                paddingVertical:12
            },
                style
            ]}
            disabled={disabled}>
            {loading ? (
                <ActivityIndicator size={30} color={theme.colors.primary} />
            ) : (
                <TextComponent size="titleLarge" style={{fontWeight:500}} color={disabled? "textDisabled":textColor} align="center">
                    {t(title)} 
                </TextComponent>
            )}
            {children}
        </Component>
    );
};

export default PrimaryButton;