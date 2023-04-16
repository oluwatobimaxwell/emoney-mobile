import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import useLoadFont from "./src/hooks/useFonts";
import { useAppTheme } from "./src/contexts/useTheme";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppNavigator from "./src/components/navigation/MainNavigation";

const App = () => {
  const { isLoaded } = useLoadFont();
  const theme = useAppTheme();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, paddingTop: 300 }}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <AppNavigator/>
    </ThemeProvider>
  );
};

const queryClient = new QueryClient();

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default Main;
