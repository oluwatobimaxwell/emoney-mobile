import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ImageIcon from "../common/ImageIcon";
import { useAppTheme } from "../../contexts/useTheme";
import { BottomTabParamList } from "./BottomNavProps";
import DashboardScreen from "../screens/DashboardScreen";
import TransactionsScreen from "../screens/TransactionsScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const tabIconProps = {
  size: 27,
  opacity: 0.25,
};

const BottomNavigation = () => {
  const theme = useAppTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopWidth: 0,
          height: 85,
        },
        tabBarActiveTintColor: theme.colors.black,
        tabBarLabelStyle: {
          fontFamily: "Bold",
        },
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <ImageIcon
              name={focused ? "wallet" : "wallet"}
              size={tabIconProps.size}
              tint={theme.scheme === "dark" ? "white" : "black"}
              style={{ opacity: focused ? 1 : tabIconProps.opacity }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: ({ focused }) => (
            <ImageIcon
              name={focused ? "workBold" : "work"}
              size={tabIconProps.size}
              tint={theme.scheme === "dark" ? "white" : "black"}
              style={{ opacity: focused ? 1 : tabIconProps.opacity }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
