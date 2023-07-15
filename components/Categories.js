import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import CategoryItem from "./CategoryItem";

const Categories = ({ categories, term, setTerm }) => {
  return (
    <View>
      <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => setTerm(item.name)}>
            <CategoryItem {...item} active={term === item.name} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
