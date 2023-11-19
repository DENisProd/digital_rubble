import { Stack } from "expo-router";
import {StatusBar} from "expo-status-bar";
import {COLORS} from "../constants";
import {View, StyleSheet } from "react-native-web";

const StackLayout = () => {
    return (
        <View style={styles.container}>
            <Stack>
                <Stack.Screen name={"(tabs)"} options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: "transparent" },
                }}/>
                <StatusBar style="auto"/>
            </Stack>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background, // Set background color for the entire app
    },
});