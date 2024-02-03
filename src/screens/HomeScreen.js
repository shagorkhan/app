import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  backgroundColor,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Swiper from "react-native-swiper";
import Logo from "../../assets/logo.svg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import livegame1 from "../../assets/livegame1.jpg";
import livegame2 from "../../assets/livegame2.jpg";
import livegame3 from "../../assets/livegame3.jpg";
import livegame4 from "../../assets/livegame4.jpg";
import goldenland from "../../assets/goldenland.png";
import fortunegems from "../../assets/fortunegems.png";
import superace from "../../assets/superace.png";
import moneycoming from "../../assets/moneycoming.png";

import { AntDesign } from "@expo/vector-icons";
import Input from "../components/Input";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
import { BackgroundImage } from "react-native-elements/dist/config";

// Get the device screen dimensions
const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const sliderImages = [image1, image2, image3, image4];

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

  // Calculate the box width based on screen size with a maximum width
  //const maxBoxWidth = width * 0.9; // Set a maximum width
  //const boxWidth = Math.min(maxBoxWidth, width * 0.45); // Adjust the factor as needed
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header with logo at the top left */}

        {/* Image Slider */}
        <Swiper style={styles.sliderContainer}>
          {sliderImages.map((image, index) => (
            <View key={index}>
              <Image source={image} style={styles.sliderImage} />
            </View>
          ))}
        </Swiper>

        {/* 8 Boxes section */}

        <View style={styles.boxContainer}>
          <View style={styles.row}>
            {boxData.slice(0, 8).map((box) => (
              <TouchableOpacity key={box.id} style={[styles.box]}>
                <ImageBackground source={box.logo} style={styles.boxLogo}>
                  <LinearGradient
                    colors={[
                      "rgba(224, 223, 223, 0)",
                      "rgba(224, 223, 223, 0)",
                      "#000000",
                    ]}
                    style={styles.containerBox}
                  >
                    <Text style={styles.boxName}>{box.name}</Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 2 Boxes row wise with full image */}

        <View style={styles.twoBoxesContainer}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
            Live Games
          </Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={livegame1} style={styles.twoBoxesImage} />
              {/* Additional content for the first box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={livegame2} style={styles.twoBoxesImage} />
              {/* Additional content for the second box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={livegame3} style={styles.twoBoxesImage} />
              {/* Additional content for the second box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={livegame4} style={styles.twoBoxesImage} />
              {/* Additional content for the first box if needed */}
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* second 2 Boxes row wise with full image */}

        <View style={styles.twoBoxesContainer}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
            Favorite's Games
          </Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={goldenland} style={styles.twoBoxesImage} />
              {/* Additional content for the first box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={fortunegems} style={styles.twoBoxesImage} />
              {/* Additional content for the second box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={goldenland} style={styles.twoBoxesImage} />
              {/* Additional content for the second box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={fortunegems} style={styles.twoBoxesImage} />
              {/* Additional content for the first box if needed */}
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* third 2 Boxes row wise with full image */}

        <View style={styles.twoBoxesContainer}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
            Feature's Games
          </Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={superace} style={styles.twoBoxesImage} />
              {/* Additional content for the first box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={moneycoming} style={styles.twoBoxesImage} />
              {/* Additional content for the second box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={superace} style={styles.twoBoxesImage} />
              {/* Additional content for the second box if needed */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.twoBoxes}>
              <Image source={moneycoming} style={styles.twoBoxesImage} />
              {/* Additional content for the first box if needed */}
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },

  logo: {
    width: "100%",
    height: 20,
  },
  sliderContainer: {
    height: 110,
    marginVertical: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  sliderImage: {
    //flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: 110,
    borderRadius: 5,
  },

  boxContainer: {},
  row: {
    flexDirection: "row",
    //flexWrap: 'wrap',
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  box: {
    width: width / 4 - 10, // Adjust the width of the box
    height: width / 4 ,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
    borderRadius: 8,
    borderRadius:10,
    overflow: "hidden",
  },
  boxLogo: {
    flex: 1,
    width: "100%", // Make the logo take the full width of the box
    aspectRatio: 1, // Maintain the aspect ratio of the logo
    resizeMode: "cover", // Ensure the logo does not stretch
  },
  containerBox: {
    flex: 1,
    padding:5,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"flex-end"
  },
  boxName: {
    textAlign:"center",
    fontSize: 14,
    color: "white",
    fontWeight:'600'
  },

  twoBoxesContainer: {
    //flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 10,
  },
  twoBoxes: {
    //flex: 1,
    //aspectRatio: 1, // Maintain the aspect ratio
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    padding: 7,
    //overflow: 'hidden', // Clip the contents inside the box
  },
  twoBoxesImage: {
    // flex: 1,
    width: width / 2 - 20,
    height: 150, // Make the image take the full width of the box
    //aspectRatio: 1, // Maintain the aspect ratio of the image
    //resizeMode: 'cover', // Ensure the image does not stretch
    borderRadius: 15,
  },
});

export default HomeScreen;
