import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign
          name="back"
          size={28}
          color="#235347"
          style={{ marginTop: "3%" }}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.inputContainer}>
          <Feather
            name="search"
            size={24}
            color="#235347"
            style={{ marginRight: "4%" }}
          />
          <TextInput
            style={styles.input}
            placeholder="What would you like?"
            placeholderTextColor="black"
            cursorColor={"#235347"}
            autoCapitalize="none"
            // value={username}
            // onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </View>
        <View style={{ marginTop: "5%", marginBottom:'5%' }}>
          <Text
            style={{
              marginHorizontal: "3%",
              fontSize: 20,
              fontWeight: "bold",
              color: "#235347",
            }}
          >
            POPULAR DISHES
          </Text>
          <View style={styles.line}></View>
        </View>
        <View style={{flexDirection:'row', marginTop:'5%', alignItems:'center'}}>
        <TouchableOpacity>
                  <Image
                    source={require("../assets/salad.jpg")}
                    style={styles.foodIcon}
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.foodIconText}>Salad</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:'5%', alignItems:'center'}}>
        <TouchableOpacity>
                  <Image
                    source={require("../assets/food1.jpg")}
                    style={styles.foodIcon}
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.foodIconText}>Pancakes</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:'5%', alignItems:'center'}}>
        <TouchableOpacity>
                  <Image
                    source={require("../assets/chicken.jpg")}
                    style={styles.foodIcon}
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.foodIconText}>Chicken</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "5%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 20,
    elevation: 10,
    marginTop: "5%",
    paddingHorizontal: "4%",
    paddingVertical: "3%",
    width: Dimensions.get("screen").width * 0.9,
  },
  inputIcon: {
    width: 25,
    height: 25,
    marginRight: "4%",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#235347",
  },
  foodIcon: {
    width: 90,
    height: 90,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "#000",
  },
  foodIconText: {
    // marginTop: "5%",
    fontSize: 28,
    marginHorizontal:'5%'
  },
  line:{
    borderColor:'#235347',
    borderWidth:1,
    marginTop:'3%'
  }
});
