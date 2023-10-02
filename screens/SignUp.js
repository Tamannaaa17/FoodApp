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
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('');
  const [confirm, setConfirm] = useState("");
  const navigation = useNavigation();
  const handleLoginClicked = () => {
    navigation.navigate("Login");
  };
  const handleSignupClicked = () => {
    navigation.navigate('Tab');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/login.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="back"
              size={28}
              color="white"
              style={{ padding: "4%", margin: "4%" }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.whiteBox}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: "5%" }}>
          Getting Started!
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
            placeholder="Full Name"
            placeholderTextColor="black"
            cursorColor={"#235347"}
            value={name}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email"
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
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock"
            size={24}
            color="#235347"
            style={{ marginRight: "4%" }}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            cursorColor={"#235347"}
            autoCapitalize="none"
            secureTextEntry
            value={confirm}
            onChangeText={(text) => setConfirm(text)}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignupClicked}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <Text style={{ fontSize: 18, color: "#235347", fontWeight: "bold" }}>
          Sign Up with
        </Text>
        <View style={{ flexDirection: "row", margin: "5%" }}>
          <TouchableOpacity style={{ marginRight: "4%" }}>
            <Entypo name="google--with-circle" size={60} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: "4%" }}>
            <Entypo name="facebook-with-circle" size={60} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="twitter-with-circle" size={60} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", padding: "11%" }}>
          <Text style={{ marginRight: "2%", fontSize: 20 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={handleLoginClicked}>
            <Text
              style={{
                marginRight: "2%",
                fontSize: 20,
                color: "#235347",
                fontWeight: "bold",
              }}
            >
              Log In!
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
  },
  imageContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1,
    borderRadius: 20,
    width: "100%",
    height: Dimensions.get("screen").height * 0.5,
  },
  whiteBox: {
    backgroundColor: "white",
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    marginTop: "-90%",
    alignItems: "center",
    padding: "4%",
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
    marginTop: "8%",
    width: Dimensions.get("screen").width * 0.85,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  orText: {
    color: "#000000",
    fontSize: 20,
    textAlign: "center",
    marginBottom: "3%",
    marginTop: "5%",
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginRight: "1%",
    
  },
});
