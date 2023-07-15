import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const restos = [
    {
      id: 0,
      name: "The Blacksmith",
      image: require("../assets/images/1.jpeg"),
      rating: 5,
      pricePoint: "$$$",
    },
    {
      id: 1,
      name: "Ol Foodle",
      image: require("../assets/images/2.jpg"),
      rating: 4,
      pricePoint: "$$",
    },
    {
      id: 2,
      name: "Grill'd Miranda",
      image: require("../assets/images/3.jpg"),
      rating: 4.5,
      pricePoint: "$",
    },
    {
      id: 3,
      name: "Wissingers",
      image: require("../assets/images/4.jpg"),
      rating: 5,
      pricePoint: "$$",
    },
    {
      id: 4,
      name: "Kosybar",
      image: require("../assets/images/5.jpg"),
      rating: 4,
      pricePoint: "$$",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.topResto}>Top Restaurants</Text>
      <FlatList
        style={styles.scrollView}
        data={restos}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <RestaurantCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  topResto: {
    fontWeight: "bold",
    marginHorizontal: 25,
    fontSize: 18,
    paddingVertical: 5,
  },
});
