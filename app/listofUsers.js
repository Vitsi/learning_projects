import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "../styles/game.style";
import { Colors } from "react-native/Libraries/NewAppScreen";

const listofUsers = () => {
    return(
<SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
            options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: "List of Players",
                headerBackground: styles ={Colors: COLORS.primary}
            }}
        />
        <Text>Hello</Text>
    </SafeAreaView>
    )
}

export default listofUsers;