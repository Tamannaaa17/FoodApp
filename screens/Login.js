import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLoginClicked = ()=>{
    navigation.navigate('Tab');
  };
  const handleSignupClicked = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={require("../assets/login.jpeg")}
          resizeMode="cover"
          style={styles.logo}
        ></ImageBackground>
      </View>
      <View style={styles.whiteBox}>
        <Text
          style={{
            marginTop: "8%",
            fontWeight: "bold",
            fontSize: 28,
            marginBottom: "3%",
          }}
        >
          Log in into your account!
        </Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color="#235347"
            style={{ marginRight: "4%" }}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            cursorColor={"#235347"}
            autoCapitalize="none"
            value={username}
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock"
            size={24}
            color="#235347"
            style={{ marginRight: "4%" }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            cursorColor={"#235347"}
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            marginRight: Dimensions.get("screen").width * 0.5,
            marginTop: "3%",
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 15 }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginClicked}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", padding: "11%", alignItems: "center" }}
        >
          <Text style={{ marginRight: "2%", fontSize: 20 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={handleSignupClicked}>
            <Text
              style={{
                marginRight: "2%",
                fontSize: 20,
                color: "#235347",
                fontWeight: "bold",
              }}
            >
              Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  logoContainer: {
    backgroundColor: "#fff",
    // overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    aspectRatio: 1,
    borderRadius: 20,
    width: "100%",
    height: Dimensions.get("screen").height * 0.5,
  },
  whiteBox: {
    backgroundColor: "white",
    flex: 1,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    marginTop: "-10.5%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 20,
    marginTop: "5%",
    paddingHorizontal: "4%",
    paddingVertical: "3%",
    width: Dimensions.get("screen").width * 0.85,
  },
  inputIcon: {
    width: 25,
    height: 25,
    marginRight: "4%",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000000",
  },
  button: {
    backgroundColor: "#235347",
    borderRadius: 20,
    paddingVertical: "4%",
    marginTop: "5%",
    width: Dimensions.get("screen").width * 0.85,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
