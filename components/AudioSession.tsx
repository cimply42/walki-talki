import { useEffect, useState } from "react";
import { Button } from "react-native";
import { Audio } from "expo-av";

export default function AudioSessionPlayer() {
  const [audioSession, setAudioSession] = useState<Audio.Sound>();
  const playAudioSession = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio-session.mp3")
    );
    setAudioSession(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    return () => {
      audioSession?.unloadAsync();
    };
  }, []);

  return <Button title="Play session" onPress={playAudioSession} />;
}
