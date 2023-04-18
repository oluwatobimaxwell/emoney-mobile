import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAppTheme } from "../../contexts/useTheme";
import { ExtendedMainStackParamList } from "./MainNavProps";
import BottomNavigation from "./BottomNavigation";

const Stack = createStackNavigator<ExtendedMainStackParamList>();

const AppNavigator = () => {
  const theme = useAppTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      >
        <Stack.Screen name="Main" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
