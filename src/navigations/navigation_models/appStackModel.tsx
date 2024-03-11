import {StackScreenProps} from '@react-navigation/stack';

export type AppStackParamList = {
  HomeScreen: undefined;
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, Screen>;
