import React from "react";
import { FlatList, View, Text } from "react-native";
import ProductCard from "./ProductCard";
import { StyleSheet } from "react-native";

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <ProductCard product={item} onSelectProduct={onSelectProduct} />
      )}
      keyExtractor={(item) => item.id.toString()}
      initialNumToRender={10}
      contentContainerStyle={{ flexGrow: 1}} 
      
      // contentContainerStyle={{ flexGrow: 1, aspectRatio: 1 }} // aspect ration for web scroller
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({});
