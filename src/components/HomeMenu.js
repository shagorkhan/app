import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import url from "../apis/url";
const { width, height } = Dimensions.get("window");

const boxData = [
  {
    id: 1,
    logo: require("../../assets/casino0.png"),
    name: "Live Casino",
  },
  { id: 2, logo: require("../../assets/casino1.png"), name: "Arcade" },
  { id: 3, logo: require("../../assets/casino2.png"), name: "Slot" },
  { id: 4, logo: require("../../assets/casino3.png"), name: "Card Game" },
  { id: 5, logo: require("../../assets/casino4.png"), name: "Roulette" },
  {
    id: 6,
    logo: require("../../assets/casino5.png"),
    name: "Video Poker",
  },
  { id: 7, logo: require("../../assets/casino6.png"), name: "Lottery" },
  {
    id: 8,
    logo: require("../../assets/casino7.png"),
    name: "Cricket Live",
  },

  // ... add more entries for the remaining boxes
];
export default function HomeMenu({ data }) {
  const [items,setItems]=useState(0)
  const scrollRef=useRef()
  return (
    <View style={styles.boxContainer}>
      <View style={styles.row}>
        {data?.map((box, i) => (
          <TouchableOpacity onPress={()=>{
            setItems(i)
            scrollRef?.current.scrollTo({ x: 0, y: 0, animated: true });
          }} key={i} style={[styles.box]}>
            <ImageBackground
              source={boxData.find((d,j)=>j===i).logo}
              style={styles.boxLogo}
            >
              <LinearGradient
                colors={[
                  "rgba(224, 223, 223, 0)",
                  "rgba(224, 223, 223, 0)",
                  `${items===i?"#3d6aee":"#000000"}`,
                ]}
                style={styles.containerBox}
              >
                <Text style={styles.boxName}>{box.title}</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        >
          Options
        </Text>
        <ScrollView ref={scrollRef} showsHorizontalScrollIndicator={false} horizontal>
          {data[items]?.subCategory?.map((d,i) => (
            <Options data={d} key={i} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const Options = ({data}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        gap: 5,
        marginHorizontal: 5,
        backgroundColor: "#011A5C",
        padding: 5,
        borderRadius: 5,
        width:200
      }}
    >
      <Image
        style={{ height: 40, width: 40 }}
        src={url+data.icon}
      />
      <Text style={{ fontWeight: "500",color:"#fff" }}>{data.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  boxContainer: {},
  row: {
    flexDirection: "row",
    //flexWrap: 'wrap',
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  box: {
    width: width / 4 - 10, // Adjust the width of the box
    height: width / 4 - 5,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "green",
  },
  boxLogo: {
    flex: 1,
  },
  boxName: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },

  containerBox: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
    paddingVertical: 10,
  },
});
