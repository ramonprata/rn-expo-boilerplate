import { Stack } from "expo-router";
import { MainStackRoutesEnum } from "../../types";

const MainStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name={MainStackRoutesEnum.TABS}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={MainStackRoutesEnum.NOT_FOUND} />
    </Stack>
  );
};

export default MainStack;
