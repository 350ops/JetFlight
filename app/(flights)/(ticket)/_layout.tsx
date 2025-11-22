import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
