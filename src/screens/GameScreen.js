import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import * as ScreenOrientation from "expo-screen-orientation";
import { useAuth } from "../context/AuthProvider";
import gateGameById from "../apis/getGameById";
import { getValue } from "../functions/storage";
import { useLoader } from "../context/LoaderContext";

export default function GameScreen({ navigation, route }) {
  const { user } = useAuth();
  const id = route.params?.id;
  const { showLoader, hideLoader } = useLoader();
  const [uri, setUri] = useState();
  useEffect(() => {
    async function setScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    }
    setScreenOrientation();
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
  useEffect(() => {
    loadGame()
  }, []);
  const loadGame = async () => {
    showLoader();
    try {
      const token = await getValue("token");
      if (!token) {
        hideLoader();
        return navigation.goBack();
      }
      const res = await gateGameById(id, token);
      setUri(res.data.content.game.url)
      //openWebBrowser(res.data.content.game.url)
      hideLoader();
    } catch (error) {
      hideLoader();
      console.error(error);
    }
  };

  
  if (!uri) {
    return null;
  }
  return (
    <View style={styles.container}>
      <WebView style={styles.webview} source={{ uri }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
