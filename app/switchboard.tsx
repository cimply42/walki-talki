import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useReduxDispatch, useReduxSelector } from "@/store";
import useUserApi from "@/hooks/useUserApi";
import { setUser } from "@/store/slices/user";

export default function SwitchBoard() {
  const dispatch = useReduxDispatch();
  const userState = useReduxSelector((state) => state.user);

  const { getUserInfo } = useUserApi();

  useEffect(() => {
    const retrieveUserInfo = async () => {
      const userInfo = await getUserInfo();
      if (userInfo) {
        dispatch(setUser(userInfo));
      }
    };

    if (!userState.uuid) {
      retrieveUserInfo();
    } else {
      router.replace("/home");
    }
  }, [dispatch, getUserInfo, userState]);

  return (
    <View style={styles.rootContainer}>
      <Text>Retrieving app data from BFF...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
