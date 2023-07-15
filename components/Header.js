import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Grab your</Text>
      <Text style={styles.bold}>delicious meal!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 13,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 40,
  },
  bold: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
