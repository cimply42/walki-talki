import { useState } from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Constants from "expo-constants";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const { expoConfig } = Constants;

const uri = `http://${expoConfig?.hostUri?.split(":").shift()}:8081`;

export default function AssistantModalScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [assistantInput, setAssistantInput] = useState<string>("");
  const [assistantResponse, setAssistantResponse] = useState<string>("");

  const queryAssistant = async () => {
    setLoading(true);
    setAssistantResponse("");

    try {
      const res = await fetch(`${uri}/api/assistant/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: assistantInput,
        }),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const assistentRes = await res.json();

      setLoading(false);
      setAssistantResponse(assistentRes);
    } catch (error) {
      setLoading(false);
      setAssistantResponse("");
      console.log(error);
    }
  };

  return (
    <Animated.View style={styles.rootContainer}>
      <StatusBar style="light" />
      <ThemedView style={styles.bodyContainer}>
        <ThemedText type="subtitle">
          How can I help you stay present today?
        </ThemedText>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Example: How do I stop my mind from thinking?"
          onChange={(e) => setAssistantInput(e.nativeEvent.text)}
          style={styles.assitantResponseText}
        />
        <Button
          disabled={loading}
          onPress={() => queryAssistant()}
          title={loading ? "Loading..." : "Ask me"}
        />
        {assistantResponse && (
          <ThemedView style={styles.assistantResponseContainer}>
            <ThemedText type="defaultSemiBold">{assistantResponse}</ThemedText>
          </ThemedView>
        )}
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  bodyContainer: {
    gap: 8,
    marginBottom: 8,
  },
  assistantResponseContainer: {
    gap: 5,
  },
  assitantResponseText: {
    color: "white",
  },
});
