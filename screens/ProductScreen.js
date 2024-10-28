import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import DeliveryEstimator from "../components/DeliveryEstimator";
import ProductDetailCard from "../components/ProductDetailCard";

// Get the width and height of the window for responsive design
const { width, height } = Dimensions.get("window");

const ProductScreen = ({ route, onSelectProduct }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Product Image with Data */}
      <ProductDetailCard product={product} onSelectProduct={onSelectProduct} />

      {/* Product Data if stock available or not available */}
      <Text
        style={[
          styles.stockStatus,
          { color: product.inStock ? "#4CAF50" : "#e53935" },
        ]}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </Text>

      {/* If product in stock then show the DeliveryEstimator time. */}
      {product?.inStock && (
        <View>
          <DeliveryEstimator product={product} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#333",
    marginBottom: height * 0.02,
  },
  price: {
    fontSize: width * 0.05,
    color: "#e80404",
    fontWeight: "bold",
    marginBottom: height * 0.01,
  },
  stockStatus: {
    fontSize: width * 0.045,
    marginBottom: height * 0.03,
  },
});

export default ProductScreen;
