import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import Swiper from "react-native-swiper";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import HomeMenu from "../components/HomeMenu";
import { getData } from "../functions/storage";
import { useLoader } from "../context/LoaderContext";
import Header from "../components/Header";
import LoginButton from "../components/LoginButton";

// Get the device screen dimensions
const { width, height } = Dimensions.get("window");

const HomeScreenOffline = (props) => {
  const sliderImages = [image1, image2, image3, image4];
  const { showLoader, hideLoader } = useLoader();
  const [category, setCategory] = useState();
  const [liveGames, setLiveGames] = useState();
  const [fishGames, setFishGames] = useState();
  const [slotGames, setSlotGames] = useState();
  useEffect(() => {
    getData("category").then((d) => {
      //hideLoader();
      setCategory(d);
      //console.log(d)
    });
  }, []);
  const getAllData = async () => {
    showLoader();
    try {
      const category = await getData("category");
      setCategory(category);
      const live = await getData("live");
      setLiveGames(live);
      const fish = await getData("fish");
      setFishGames(fish);
      const slot = await getData("slot");
      setSlotGames(slot);
      hideLoader();
    } catch (error) {
      console.error(error);
      hideLoader();
    }
  };
  if (!category) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.container}>
          <Swiper style={styles.sliderContainer}>
            {sliderImages.map((image, index) => (
              <View key={index}>
                <Image source={image} style={styles.sliderImage} />
              </View>
            ))}
          </Swiper>
          <HomeMenu data={category} />

          <View style={styles.twoBoxesContainer}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
              Live Games
            </Text>
            <ScrollView horizontal={true}>
              {liveGames?.map((doc, i) => (
                <TouchableOpacity
                  onPress={() => {
                    props?.navigation?.navigate("Login");
                  }}
                  key={i}
                  style={styles.twoBoxes}
                >
                  <Image src={doc.img} style={styles.twoBoxesImage} />
                  {/* Additional content for the first box if needed */}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* second 2 Boxes row wise with full image */}

          <View style={styles.twoBoxesContainer}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
              Favorite's Games
            </Text>
            <ScrollView horizontal={true}>
              {slotGames?.map((doc, i) => (
                <TouchableOpacity
                  onPress={() => {
                    props?.navigation?.navigate("Login");
                  }}
                  key={i}
                  style={styles.twoBoxes}
                >
                  <Image src={doc.img} style={styles.twoBoxesImage} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* third 2 Boxes row wise with full image */}

          <View style={styles.twoBoxesContainer}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
              Feature's Games
            </Text>
            <ScrollView horizontal={true}>
              {fishGames?.map((doc, i) => (
                <TouchableOpacity
                  onPress={() => {
                    props?.navigation?.navigate("Login");
                  }}
                  key={i}
                  style={styles.twoBoxes}
                >
                  <Image src={doc.img} style={styles.twoBoxesImage} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <LoginButton {...props} />
    </View>
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

  twoBoxesContainer: {
    //flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10,
  },
  twoBoxes: {
    //flex: 1,
    //aspectRatio: 1, // Maintain the aspect ratio
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
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

export default HomeScreenOffline;
