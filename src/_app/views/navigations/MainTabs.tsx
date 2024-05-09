import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/src/shared/hooks/useColorScheme";
import { MainTabsRoutesEnum } from "../../types";
import { NAVIGATION_LABELS } from "../../utils";

export default function MainTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName={MainTabsRoutesEnum.HOME}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name={MainTabsRoutesEnum.HOME}
        options={{
          title: NAVIGATION_LABELS.tabs[MainTabsRoutesEnum.HOME].title,

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={MainTabsRoutesEnum.EXPLORE}
        options={{
          title: NAVIGATION_LABELS.tabs[MainTabsRoutesEnum.EXPLORE].title,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
