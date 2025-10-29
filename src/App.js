import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Photo from "./components/Photo";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <View style={styles.topCard}>
          <Photo />
          <Header />
        </View>

        <View style={styles.textContainer}></View>
        <Skills />
        <Footer />
      </View>
    </SafeAreaView>
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
    borderRadius: 50, // Делаем круг
    marginBottom: 16,
  },
});
export default App;
