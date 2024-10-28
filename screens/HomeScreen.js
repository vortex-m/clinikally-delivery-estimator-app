import React from "react";
import { View, Text, Dimensions, StatusBar } from "react-native";
import ProductList from "../components/ProductList";
import products from "../data/products";
import { StockData } from "../data/stock";
import { StyleSheet } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

const { width, height } = Dimensions.get("window");

const AppStatusBar = () => (
  <StatusBar
    barStyle="dark-content"
    backgroundColor="transparent"
    translucent={true}
  />
);

const HomeScreen = ({ navigation }) => {
  const combinedProducts = products.map((product) => {
    const stockInfo = StockData.find(
      (stock) => stock["Product ID"] === product["Product ID"]
    );
    return {
      id: product["Product ID"],
      name: product["Product Name"],
      price: product["Price"],
      inStock: stockInfo ? stockInfo["Stock Available"] : false,
    };
  });

  const handleSelectProduct = (product) => {
    navigation.navigate("ProductScreen", { product });
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <SimpleLineIcons
            name="menu"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
          <Ionicons
            name="search"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
        </View>
        <Text style={styles.headerTitle}>Clinikally</Text>
        <View style={styles.headerRight}>
          <FontAwesome6
            name="user"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
          <Feather
            name="shopping-bag"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
        </View>
      </View>

      {/* Product List */}
        <ProductList
          products={combinedProducts}
          onSelectProduct={handleSelectProduct}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.03,
    marginTop: height * 0.037,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#333",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginHorizontal: width * 0.03,
  },
});

export default HomeScreen;
