import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { AccessToken, LoginButton } from "react-native-fbsdk-next";
import { useReduxDispatch } from "@/store";
import { ThemedView } from "@/components/ThemedView";
import useAuthApi from "@/hooks/useAuthApi";
import { setToken } from "@/store/slices/auth";

export default function LoginScreen() {
  const dispatch = useReduxDispatch();
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const { logInUser } = useAuthApi();

  const onLoginHandler = () => {
    const logIn = async () => {
      const token = await logInUser(userCreds);
      if (token) {
        dispatch(setToken(token));
        router.replace("/switchboard");
      }
    };

    logIn();
  };

  useEffect(() => {
    // for facebook login
    AccessToken.getCurrentAccessToken().then((data) => {
      if (data?.accessToken) {
        router.replace("/switchboard");
      }
    });
  }, []);

  return (
    <ThemedView style={styles.rootContainer}>
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log("login has error: " + error);
          } else if (result.isCancelled) {
            console.log("login is cancelled");
          } else {
            AccessToken.getCurrentAccessToken().then((data): void => {
              console.log(`Access Token is: ${JSON.stringify(data)}`);
              router.replace("/home");
            });
          }
        }}
        onLogoutFinished={() => alert("Successful log out!")}
      />
      <View style={styles.hr} />
      <View style={styles.signInContainer}>
        <View style={styles.signInRowContainer}>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter Email"
            onChangeText={(text) => setUserCreds({ ...userCreds, email: text })}
          />
        </View>
        <View style={styles.signInRowContainer}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={(text) =>
              setUserCreds({ ...userCreds, password: text })
            }
          />
        </View>
        <Button title="Log in" onPress={onLoginHandler} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    paddingHorizontal: 20,
  },
  hr: {
    alignSelf: "stretch",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  signInContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  signInRowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
