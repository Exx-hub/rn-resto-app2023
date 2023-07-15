import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const RestaurantCard = ({ name, image, rating, pricePoint }) => {
  return (
    <View style={[styles.container, styles.elevationEffect]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating} stars</Text>
          <Text style={styles.price}>{pricePoint}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
    width: "98%",
    marginHorizontal: 5,
  },
  elevationEffect: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 99,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    padding: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 3,
  },
  rating: {
    marginRight: 15,
  },
  price: {
    color: "gold",
  },
});
