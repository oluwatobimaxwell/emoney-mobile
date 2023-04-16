import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

export interface BottomTabParamList extends ParamListBase {
  Dashboard: undefined;
  Transactions: undefined;
}

export type RootTabNavigationProp = BottomTabNavigationProp<BottomTabParamList>;

export type ExtendedRootTabParamList = ParamListBase & BottomTabParamList;
