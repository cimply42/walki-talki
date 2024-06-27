import { StyleSheet, View } from "react-native";
//import { Link } from "expo-router";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
//import AudioSessionPlayer from "@/components/AudioSession";
import TalkCard from "@/components/cards/TalkCard";
import MeditationCard from "@/components/cards/MeditationCard";

export default function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Walki Talki!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.bodyContainer}>
        <TalkCard />
        <MeditationCard />
        {/* <Link href="/assistant-modal" style={styles.assistantButton}>
          Open Assistant
        </Link> */}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  assistantButton: {
    alignSelf: "center",
    color: "white",
    backgroundColor: "light-grey",
  },
});
