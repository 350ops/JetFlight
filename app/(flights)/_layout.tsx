import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Search Flights",
          headerTransparent: true,
          headerTintColor: "#fff",
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              style={{
                backgroundColor: "transparent",
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: -2,
                marginTop: -2
              }}
            >
              <AntDesign name="arrow-left" size={22} color="#fff" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="(ticket)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
