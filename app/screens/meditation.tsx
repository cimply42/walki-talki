import { StyleSheet, Text, View } from "react-native";

export default function MeditationScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>Meditation Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    gap: 10,
  },
});
