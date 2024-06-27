import { useReduxSelector } from "@/store";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const user = useReduxSelector((state) => state.user);
  console.log(`Shadi is here with user=${JSON.stringify(user)}`);

  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoRowContainer}>
          <Text>Email</Text>
          <Text>{user?.email}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  userInfoContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  userInfoRowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
});
