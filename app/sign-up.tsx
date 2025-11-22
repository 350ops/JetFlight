import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUp = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.screen}>
        <View style={{ paddingHorizontal: 16, paddingTop: 1.5 * top }}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.title}>
            Start your journey with affordable prices
          </Text>
          <View>
            <Text>EMAIL</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.inputContainer}
            />
          </View>

          <View style={styles.actionButtons}>
            <Pressable style={styles.nextButton}>
              <Text style={styles.nextText}>Sign up</Text>
            </Pressable>
            <Text
              style={{ textAlign: "center", fontWeight: "500", color: "#444" }}
            >
              Or Sign up With
            </Text>
            <View style={styles.media_flex}>
              <Pressable style={styles.mediaButton}>
                <FontAwesome name="facebook" size={24} color="black" />
              </Pressable>
              <Pressable style={styles.mediaButton}>
                <AntDesign name="google" size={24} color="black" />
              </Pressable>
              <Pressable style={styles.mediaButton}>
                <FontAwesome name="apple" size={24} color="black" />
              </Pressable>
            </View>
            <Text style={{ textAlign: "center", color: "#67696F" }}>
              Already Have an Account?{" "}
              <TouchableWithoutFeedback
                onPress={() => router.replace("/sign-in")}
              >
                <Text style={{ color: "#272727", fontWeight: "500" }}>
                  Sign in
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: "center",
  },

  heading: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 16,
  },

  title: {
    color: "#808080",
    fontSize: 16,
    marginBottom: 24,
  },

  inputContainer: {
    paddingVertical: 18,
    borderColor: "#d1d1d1",
    borderBottomWidth: 1,
  },

  actionButtons: {
    marginVertical: 36,
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  nextButton: {
    backgroundColor: "#272727",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },

  nextText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },

  media_flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  mediaButton: {
    paddingHorizontal: 36,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: "#F2F3F6",
  },
});

export default SignUp;
