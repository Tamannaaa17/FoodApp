import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation =useNavigation();
  const handleContinueClicked =()=>{
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/bg1.jpeg")}
      resizeMode="cover"
    >
      <View
        style={{
          flex: 4,
          opacity: 0.3,
          backgroundColor: "black",
          justifyContent: "flex-end",
        }}
      ></View>
      <View style={{ flex: 1, justifyContent: "flex-end", margin: "5%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: 900,
            marginBottom: "5%",
          }}
        >
          Find Flavor, Find Fun!
        </Text>
        <Text style={{ color: "white", fontSize: 20, marginBottom: "5%" }}>
          Magna irure in tempor ea sunt irure adipisicing.Incididunt culpa
          exercitation sit quis minim.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleContinueClicked}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    alignSelf: "auto",
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: "4%",
    // marginBottom: "5%",
    width: Dimensions.get("screen").width * 0.9,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
