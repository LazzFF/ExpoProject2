import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.name}>Перидот Юниверс</Text>
      <Text style={styles.title}>Гениальный изобретатель</Text>
      <Text style={styles.bio}>
        Член Кристальных самоцветов, лучший друг Стивена
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "left",
    marginBottom: 16,
    marginLeft: 25,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },

  title: {
    fontSize: 16,
    color: "#636363",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default Header;
