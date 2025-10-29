import { View, Text, ScrollView, StyleSheet } from "react-native";

const Skills = () => {
  const skill = ["Металлокинез", "Интеллект", "Инженерия", "Прочность", "Логика"];

  return (
    <View style={styles.skillsContainer}>
      {skill.map((skill, index) => (
        <Text key={index} style={styles.skill}>
          {skill}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    padding: 15,
    backgroundColor: "#BDE040",
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 100,
  },
});

export default Skills;
