import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";

const HomeScreen = () => {
  const [term, setTerm] = useState("Burger");

  const categories = [
    {
      id: 0,
      name: "Burger",
      image: require("../assets/images/burger.png"),
    },
    {
      id: 1,
      name: "Pizza",
      image: require("../assets/images/pizza.png"),
    },
    {
      id: 2,
      name: "Dessert",
      image: require("../assets/images/cakee.png"),
    },
    {
      id: 3,
      name: "Drinks",
      image: require("../assets/images/smoothies.png"),
    },
    {
      id: 4,
      name: "Steaks",
      image: require("../assets/images/steak.png"),
    },
    {
      id: 5,
      name: "Pasta",
      image: require("../assets/images/pasta.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />

      <SearchInput />

      <Categories categories={categories} term={term} setTerm={setTerm} />

      {/* <Restaurants /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
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
