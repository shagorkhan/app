import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthProvider";


export default function Header() {
  const inset = useSafeAreaInsets();
  const { user, setUser } = useAuth();
  return (
    <View style={[style.headerContainer, { marginTop: inset.top }]}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Image source={require("../../assets/logo.png")} style={style.logo} />
      <Text style={{
        fontWeight:"600",
        marginRight:5
      }}>{parseFloat(user?.balance).toFixed(1)} BDT</Text>
    </View>
  );
}
const style = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:"#fff",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  logo: {
    width: 100,
    height: 35,
  },
});
