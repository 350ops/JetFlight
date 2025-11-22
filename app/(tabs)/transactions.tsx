import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Transactions = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.screen]}>
      <StatusBar style="dark" />
      <Image
        source={require("@/assets/images/transactions.png")}
        style={[styles.img, { marginTop: top * 2.25 }]}
      />
      <Text style={styles.heading}>Let's go somewhere</Text>
      <Text style={styles.content}>
        After book a trip you can manage orders and{"\n"}see E-ticket here.
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Book a trip</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  img: {
    width: "100%",
    objectFit: "scale-down",
  },

  heading: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },

  content: {
    color: "#969696",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginVertical: 32,
  },

  button: {
    marginTop: 20,
    padding: 10,
    paddingVertical: 14,
    backgroundColor: "#272727",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Transactions;
