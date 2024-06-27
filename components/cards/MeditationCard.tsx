import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MeditationCard() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Meditation</Text>
      <View style={styles.cardContainer}>
        <Text>
          Take some time to take care of yourself today. Find somewhere
          comfortable to sit or lie down and start todays' practice
        </Text>
        <Link href="/screens/meditation" asChild>
          <Pressable style={styles.startButton}>
            <Text style={styles.startButtonText}>Start</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContainer: {
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowColor: "black",
  },
  cardRowsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  cardRowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  startButton: {
    width: "100%",
    backgroundColor: "green",
    borderRadius: 2,
  },
  startButtonText: {
    fontSize: 18,
    alignSelf: "center",
    paddingVertical: 9,
  },
});
