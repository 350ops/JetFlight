import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignIn = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.screen]}>
        <View
          style={{
            paddingHorizontal: 16,
            backgroundColor: "#fff",
            paddingTop: top * 2.5,
          }}
        >
          <Text style={styles.heading}>Sign In</Text>
          <Text style={styles.title}>
            Start your journey with affordable prices
          </Text>
          <View style={styles.flexInput}>
            <View>
              <Text>EMAIL</Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.inputContainer}
              />
            </View>
            <View>
              <Text>PASSWORD</Text>
              <TextInput
                placeholder="Enter your password"
                style={styles.inputContainer}
              />
            </View>
          </View>
          <View style={styles.actionButtons}>
            <Pressable
              style={styles.nextButton}
              onPress={() => router.replace("/(tabs)")}
            >
              <Text style={styles.nextText}>Sign in</Text>
            </Pressable>
            <Text
              style={{ textAlign: "center", fontWeight: "500", color: "#444" }}
            >
              Or Sign in With
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
              Dont Have an Account?{" "}
              <TouchableWithoutFeedback onPress={() => router.push("/sign-up")}>
                <Text style={{ color: "#272727", fontWeight: "500" }}>
                  Sign up
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
    flex: 1,
    backgroundColor: "#fff",
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

  flexInput: {
    flexDirection: "column",
    gap: 24,
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

  actionButtons: {
    marginVertical: 36,
    display: "flex",
    flexDirection: "column",
    gap: 18,
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

export default SignIn;
