import { useCallback, useEffect, useRef, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  BackHandler,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import WebView from "react-native-webview";
import LaunchScreen from "./splashscreen";

const WebViewScreen = () => {
  const [loaded, setLoaded] = useState(true);
  const [statuscolors, setStatusColors] = useState({
    barStyle: "light-content",
    bg: "transparent",
  });

  const onLoadedEnd = () => {
    setLoaded(false);
  };

  const webViewRef = useRef(null);

  const backAction = () => {
    const back = webViewRef.current.goBack();
    return true;
  };

  useEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [backAction])
  );

  const onMessage = (data) => {
    console.log(data);
    const datum = JSON.parse(data?.nativeEvent?.data);

    if (datum.type === "home") {
      setStatusColors({
        bg: "black",
        barStyle: "light-content",
      });
    }

    if (datum.type === "login") {
      setStatusColors({
        barStyle: "light-content",
        bg: "transparent",
      });
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={statuscolors.bg}
        barStyle={statuscolors.barStyle}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(0, 0, 0)" }}>
        <View style={{ flex: 1 }}>
          <LaunchScreen loaded={loaded} />
          <View style={{ ...style.web, display: loaded ? "none" : "flex" }}>
            <WebView
              source={{ uri: "https://360station.net/#/login" }}
              ref={webViewRef}
              onLoadEnd={onLoadedEnd}
              style={{ flex: 1 }}
              onMessage={onMessage}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WebViewScreen;

const style = StyleSheet.create({
  web: {
    flex: 1,
    backgroundColor: "red",
  },
});
