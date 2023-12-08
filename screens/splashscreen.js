import { ImageBackground, StyleSheet, View } from "react-native";
import AppLogo from "../assets/logo";
import { LinearGradient } from "expo-linear-gradient";

const LaunchScreen = ({ loaded }) => {
  return (
    <View style={{ ...style.splash, display: loaded ? "flex" : "none" }}>
      <ImageBackground
        source={require("../assets/splash.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.2)",
            "rgba(0, 0, 0, 0.5)",
            "rgba(0, 0, 0, 0.9)",
          ]}
          style={{
            flex: 1,
            zIndex: 2,
            padding: 21,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View />
          <View style={{ marginBottom: 39 }}>
            <AppLogo />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default LaunchScreen;

const style = StyleSheet.create({
  splash: {
    flex: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
  },
});
