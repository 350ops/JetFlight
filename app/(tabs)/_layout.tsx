import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <BottomSheetModalProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="transactions" />
        <Tabs.Screen name="account" />
      </Tabs>
    </BottomSheetModalProvider>
  );
}
