import { View, Text, Image, StyleSheet } from "react-native";

const Photo = () => {
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: "https://64.media.tumblr.com/60e0b74573184ede50187c717aeb3f41/tumblr_inline_o5hd73q5tK1qlr65v_500.jpg",
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    // Тень для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Тень для Android
    elevation: 5,
  },
  topCard: {
    flexDirection: "row",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 16,
  },
});

export default Photo;
