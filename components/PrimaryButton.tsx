import React, { ReactNode } from "react";
import TextComponent from "@textComponent";
import { Pressable, PressableProps, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import { useTheme } from "react-native-paper";

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
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    title,
    onPress,
    disabled = false,
    loading = false,
    bgColor = "primary",
    borderColor = "borderColor",
    textColor = "primary",
    touchableOpacity=false
}) => {
    const theme = useTheme(); 
    const Component: ComponentType = touchableOpacity ? TouchableOpacity : Pressable;
    const backgroundColor = (theme.colors[bgColor as keyof MD3Colors] || bgColor) as string;
    const borderTheme = (theme.colors[borderColor as keyof MD3Colors] || borderColor) as string;

    return (
        <Component
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                borderWidth: 2,
                borderColor: borderTheme,
                borderRadius: 100,
                paddingVertical:12
            }}
            // className={
            //     disabled ? "bg-primaryButtonWithOpacity mt-8 rounded-xl py-3" : buttonClassName
            // }
            disabled={disabled}>
            {loading ? (
                <ActivityIndicator size={"large"} color={theme.colors.primary} />
            ) : (
                <TextComponent size="titleLarge" style={{fontWeight:500}} color={textColor} align="center">
                    {title} 
                </TextComponent>
            )}
        </Component>
    );
};

export default PrimaryButton;