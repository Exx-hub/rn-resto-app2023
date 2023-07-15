import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CategoryItem = ({ name, image, active }) => {
  return (
    <View
      style={[
        styles.container,
        styles.elevationEffect,
        { backgroundColor: active ? "orange" : "white" },
      ]}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 500,
    height: 95,
    width: 70,
    marginRight: 3,
    marginLeft: 3,
    marginBottom: 3,
  },
  elevationEffect: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  image: {
    width: 35,
    height: 35,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
