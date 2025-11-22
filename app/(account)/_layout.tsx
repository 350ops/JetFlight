import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: "",
          headerTintColor: "#000",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <AntDesign name="arrow-left" size={24} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
