import * as SecureStore from "expo-secure-store";

export const setItem = async (key: string, value: string): Promise<void> => {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.log("Error storing value", error);
    }
};

export const getItem = async (key: string): Promise<string | null> => {
    try {
        const value = await SecureStore.getItemAsync(key);
        return value;
    } catch (error) {
        console.log("Error retrieving value", error);
        return null;
    }
};

export const removeItem = async (key: string): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error deleting value", error);
    }
};

export const setAuthToken = async (token: string): Promise<void> => {
    try {
        await SecureStore.setItemAsync("auth", token);
    } catch (error) {
        console.log("Error setting auth token", error);
    }
};

export const getAuthToken = async (): Promise<string | null> => {
    try {
        return await SecureStore.getItemAsync("auth");
    } catch (error) {
        console.log("Error getting auth token", error);
        return null;
    }
};

export const removeAuthToken = async (): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync("auth");
    } catch (error) {
        console.log("Error removing auth token", error);
    }
};
