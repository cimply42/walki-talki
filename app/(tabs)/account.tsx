import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function AccountScreen() {
  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.rowsContainer}>
        <Link href="/screens/account/profile" asChild>
          <Pressable style={styles.rowContainer}>
            <Text style={styles.rowTitle}>Profile</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  rowsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  rowContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowTitle: {
    fontSize: 18,
  },
});
