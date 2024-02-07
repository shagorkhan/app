import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Header() {
  const inset = useSafeAreaInsets();
  return (
    <View style={[style.headerContainer, { marginTop: inset.top }]}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Image source={require("../../assets/logo.png")} style={style.logo} />
    </View>
  );
}
const style = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:"#fff"
  },
  logo: {
    width: 100,
    height: 35,
  },
});
