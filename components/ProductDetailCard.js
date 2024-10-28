import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const  ProductDetailCard = ({ product, onSelectProduct }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.breadcrumb}>Product Details / Skin Serum</Text>

      <Text style={styles.title}>{product.name}</Text>

      <View style={styles.benefits}>
        <Text style={styles.benefitItem}>🌟 Lightens Spots</Text>
        <Text style={styles.benefitItem}>🎯 Targets Pigmentation</Text>
        <Text style={styles.benefitItem}>🌈 Evens Skin Tone</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://www.clinikally.com/cdn/shop/files/SesdermaAzelacRULiposomalSerum-001.jpg?v=1682674395&width=600",
          }}
          style={styles.productImage}
        />
      </View>

      <View style={styles.iconsRow}>
        <Text style={styles.icon}>🛡️ 101% Original</Text>
        <Text style={styles.icon}>🏷️ Lowest Price</Text>
        <Text style={styles.icon}>🚚 Free Shipping</Text>
      </View>

      <Text style={styles.price}>
        MRP: ₹{product.price} (incl. of all taxes)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    backgroundColor: "#fff",
   //  marginTop: height * 0.02,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    width: width * 0.97,
    alignSelf: "center",
  },
  breadcrumb: {
    fontSize: width * 0.03,
    color: "#888",
    marginBottom: height * 0.01,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#333",
  },
  benefits: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: height * 0.01,
  },
  benefitItem: {
    fontSize: width * 0.03,
    color: "#4CAF50",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  productImage: {
    width: width * 0.87,
    height: height * 0.36,
    // borderWidth: 1,
    borderRadius: width * 0.02,
    resizeMode: "cover",
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: height * 0.01,
  },
  icon: {
    fontSize: width * 0.03,
    color: "#888",
    paddingHorizontal: 5,
  },
  price: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#e80404",
    marginTop: height * 0.01,
  },
  urgency: {
    fontSize: width * 0.03,
    color: "#ff9800",
    marginBottom: height * 0.01,
  },
  selectorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: height * 0.01,
  },
  selectorValue: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default  ProductDetailCard;
