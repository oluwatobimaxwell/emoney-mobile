import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface MainStackParamList extends ParamListBase {
  Main: undefined;
}

export type RootStackNavigationProp = StackNavigationProp<MainStackParamList>;

export type ExtendedMainStackParamList = ParamListBase & MainStackParamList;
