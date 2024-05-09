import { Stack } from "expo-router";
import { MainStackRoutesEnum } from "../../types";

const MainStack = () => {
  return (
    <Stack initialRouteName={MainStackRoutesEnum.TABS}>
      <Stack.Screen
        name={MainStackRoutesEnum.TABS}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={MainStackRoutesEnum.NOT_FOUND} />
    </Stack>
  );
};

export default MainStack;
