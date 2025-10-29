import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Footer = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Нанять</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: "#799E90",
    padding: 15,
    borderRadius: 30,
    paddingHorizontal: 50,
  },

  buttonText: {
    color: "white",
    fontWeight: "600", // Полужирный
    fontSize: 16,
  },
});

export default Footer;
