import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={[styles.searchInputContainer, styles.elevationEffect]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
        onEndEditing={() => console.log("done typing")}
        placeholder="Restaurants, food"
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInputContainer: {
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
    flexDirection: "row",
  },
  elevationEffect: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
