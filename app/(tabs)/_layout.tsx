import React from "react";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "menu-swap" : "menu-swap-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "account-settings" : "account-settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
