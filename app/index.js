import { SafeAreaView } from "react-native-safe-area-context";
import RandomBoxes from "../components/Randomboxes";
import { Stack } from "expo-router";
import { COLORS } from "../styles/game.style";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
            options={{
                headerShown: false,
                headerStyle: {backgroundColor: COLORS.white},
                headerShadowVisible: false,
                headerTitle: ""
            }}
        />
      <RandomBoxes />
    </SafeAreaView>
  );
};

export default Home;
