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
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

const boxData = [
  {
    id: 1,
    logo: require("../../assets/livecasino.png"),
    name: "Live Casino",
  },
  { id: 2, logo: require("../../assets/arcade.png"), name: "Arcade" },
  { id: 3, logo: require("../../assets/slot.png"), name: "Slot" },
  { id: 4, logo: require("../../assets/cardgame.png"), name: "Card Game" },
  { id: 5, logo: require("../../assets/roulette.png"), name: "Roulette" },
  {
    id: 6,
    logo: require("../../assets/videopoker.png"),
    name: "Video Poker",
  },
  { id: 7, logo: require("../../assets/lottery.png"), name: "Lottery" },
  {
    id: 8,
    logo: require("../../assets/cricketlive.png"),
    name: "Cricket Live",
  },

  // ... add more entries for the remaining boxes
];
export default function HomeMenu({ data }) {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.row}>
        {data?.map((box, i) => (
          <TouchableOpacity key={i} style={[styles.box]}>
            <ImageBackground
              source={require("../../assets/livecasino.png")}
              style={styles.boxLogo}
            >
              <LinearGradient
                colors={[
                  "rgba(224, 223, 223, 0)",
                  "rgba(224, 223, 223, 0)",
                  "#000000",
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
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {[2, 3, 4, 1].map((d) => (
            <Options key={d} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const Options = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        gap: 5,
        marginHorizontal: 5,
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Image
        style={{ height: 40, width: 40 }}
        src="https://images-platform.99static.com//-m4fMZmnACzCpHreGrowqNVS0k4=/237x264:737x764/fit-in/590x590/99designs-contests-attachments/115/115535/attachment_115535681"
      />
      <Text style={{ fontWeight: "500" }}>Ragbi Play</Text>
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
