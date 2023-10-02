import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    const handleSearchBarClicked =() =>{
        navigation.navigate('Search');
    };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ margin: "5%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "5%",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="account-circle"
                size={50}
                color="black"
              />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.location}>YOUR LOCATION</Text>
              <Ionicons name="ios-location-sharp" size={43} color="#235347" />
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.searchContainer} onPress={handleSearchBarClicked}>
              <Feather
                name="search"
                size={24}
                color="#235347"
                style={{ marginRight: "4%" }}
              />
              <Text>What would you like?</Text>
            </TouchableOpacity>
            <Image
              source={require("../assets/banner.jpg")}
              style={styles.image}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: "7%",
              }}
            >
              <View style={styles.line} />
              <Text
                style={{
                  marginHorizontal: "3%",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                What's on Your Mind?
              </Text>
              <View style={styles.line} />
            </View>
            <View style={{ flexDirection: "row", marginTop: "5%" }}>
              <View style={{ alignItems: "center", marginHorizontal: "3%" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/salad.jpg")}
                    style={styles.foodIcon}
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.foodIconText}>Healthy</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: "3%" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/chicken.jpg")}
                    style={styles.foodIcon}
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.foodIconText}>Non-Veg</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: "3%" }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/indian.jpeg")}
                    style={styles.foodIcon}
                  ></Image>
                </TouchableOpacity>
                <Text style={styles.foodIconText}>Veg</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: "7%",
              }}
            >
              <View style={styles.line2} />
              <Text
                style={{
                  marginHorizontal: "3%",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Best Sellers
              </Text>
              <View style={styles.line2} />
            </View>
            <View style={{ flexDirection: "row", marginTop: "5%" }}>
              <View
                style={{  marginHorizontal: "2%" }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../assets/food1.jpg")}
                    style={{ borderRadius: 20, width: 170, height: 300 }}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
                <Text style={[styles.foodDetails,{fontWeight:'bold'}]}>Fluffy Pancakes</Text>
                <Text style={{marginTop:'2%',marginHorizontal:'5%', fontSize:20}}>{'\u20B9'} 350</Text>
              </View>
              <View
                style={{ marginHorizontal: "2%" }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../assets/food2.jpg")}
                    style={{ borderRadius: 20, width: 170, height: 300 }}
                    resizeMode="contain"
                  ></Image>
                </TouchableOpacity>
                <Text
                  style={[styles.foodDetails,{fontWeight:'bold'}]}
                >
                  Spicy Noodles
                </Text>
                <Text style={{marginTop:'2%',marginHorizontal:'5%', fontSize:20}}>{'\u20B9'} 300</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  location: {
    fontWeight: "bold",
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 20,
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
    color: "#000000",
  },
  image: {
    width: "100%",
    marginTop: "7%",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#235347",
    width: Dimensions.get("screen").width * 0.23,
  },
  line2: {
    borderBottomWidth: 1,
    borderBottomColor: "#235347",
    width: Dimensions.get("screen").width * 0.3,
  },
  foodIcon: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: "#000",
  },
  foodIconText: {
    marginTop: "10%",
    fontSize: 15,
  },
  foodDetails: {
    marginTop: "10%",
    fontSize: 15,
    marginHorizontal: "5%",
    color: "#235347",
    fontSize: 20,
  },
});
