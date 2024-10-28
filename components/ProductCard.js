import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("window");

const ProductCard = ({ product, onSelectProduct }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.breadcrumb}>Home / Skin Serum</Text>

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
        <View style={[styles.iconView, styles.leftBorder]}>
          <Text style={styles.icon}>🛡️</Text>
          <Text>101% Original</Text>
        </View>
        <View style={[styles.iconView, styles.middleBorder]}>
          <Text style={styles.icon}>🏷️</Text>
          <Text>Lowest price</Text>
        </View>
        <View style={[styles.iconView, styles.rightBorder]}>
          <Text style={styles.icon}>🚚</Text>
          <Text>Free Shipping</Text>
        </View>
      </View>

      <Text style={styles.price}>
        MRP: ₹{product.price} (incl. of all taxes)
      </Text>

      <Text style={styles.urgency}>🔥 Hurry, Few Left!</Text>

      <View style={styles.selectorRow}>
        <Text>
          Stock:{" "}
          <Text style={styles.selectorValue}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Text>
        </Text>
        <Text>
          Qty: <Text style={styles.selectorValue}>1</Text>
        </Text>
      </View>

      <Text style={styles.recentCarts}>💚 Recently in 951 carts</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>
            <FontAwesome5 name="cart-plus" size={20} color="black" />
            <Text> Add to cart</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buyNowButton}
          title="Select"
          onPress={() => onSelectProduct(product)}
        >
          <Text style={styles.buttonTextBuy}>Buy it now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    backgroundColor: "#fff",
    borderRadius: width * 0.03,
    marginTop: height * 0.02,
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
    height: height * 0.37,
    // borderWidth: 1,
    borderRadius: width * 0.03,
    resizeMode: "cover",
  },
  iconsRow: {
    flexDirection: "row",
    // borderWidth: 1,
    borderWidth: width * 0.002,
    borderColor: "#ddd",
    borderRadius: width * 0.02,
    paddingVertical: height * 0.001,
    justifyContent: "space-around",
    marginBottom: height * 0.01,
    backgroundColor: "#f9f9f9",
  },
  iconView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  leftBorder: {
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
  middleBorder: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ddd",
  },
  rightBorder: {
    borderLeftWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    fontSize: width * 0.05,
    color: "#888",
    paddingBottom: height * 0.01,
  },
  price: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#e53935",
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
  recentCarts: {
    fontSize: width * 0.03,
    color: "#4CAF50",
    marginBottom: height * 0.01,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: height * 0.02,
  },
  addToCartButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#9C27B0",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderRadius: 5,
  },
  buyNowButton: {
    backgroundColor: "#9C27B0",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: width * 0.02,
  },
  buttonText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  buttonTextBuy: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
});

export default ProductCard;
