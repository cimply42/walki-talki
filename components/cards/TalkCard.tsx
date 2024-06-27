import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TalkCard() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Talk</Text>
      <View style={styles.cardContainer}>
        <Text>Today's talk is about embracing the present moment</Text>
        <View style={styles.cardRowsContainer}>
          <View style={styles.cardRowContainer}>
            <Text>Book:</Text>
            <Text>The Power Of Now</Text>
          </View>
          <View style={styles.cardRowContainer}>
            <Text>Author:</Text>
            <Text>Ekhart Tolle</Text>
          </View>
          <View style={styles.cardRowContainer}>
            <Text>Chaper:</Text>
            <Text>1 of 10</Text>
          </View>
        </View>
        <Link href="/talk" asChild>
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
