import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function LoginButton({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={[style.button, { backgroundColor: "#000" }]}
      >
        <Text style={style.text}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register1")}
        style={[style.button, { backgroundColor: "#3d6aee" }]}
      >
        <Text style={style.text}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    fontWeight: "500",
    color: "#fff",
  },
});
