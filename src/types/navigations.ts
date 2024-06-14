import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";
import type { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from '@react-navigation/stack';

export type RootStackScreenParamsListType = {
    // DrawerScreen: DrawerNavigationProps,
    OnboardScreen: undefined,
    PasswordResetScreen: undefined,
    NotificationsScreen: undefined,
    SignUpScreen: undefined,
    SignInScreen: undefined,
    ForgotPasswordScreen: undefined,
    OTPScreen: undefined
    PhoneNumberScreen: undefined
}

export type RootTabParamList = {
    HomeScreen: undefined;
    TransactionsScreen: undefined;
    ScanQRCodeScreen: undefined;
    UserProfileScreen: undefined;
};


export type RootDrawerScreenPropsListType = {
    TabScreen: undefined,
    MyWalletScreen: undefined
    InviteFriendsScreen: undefined
    AboutUsScreen: undefined
    ChangePasswordScreen: undefined
    ContactListScreen: undefined
}



export type StackNavigationProps = NativeStackScreenProps<RootStackScreenParamsListType, 'NotificationsScreen'>;

export type DrawerNavigationProps = DrawerScreenProps<RootDrawerScreenPropsListType, 'TabScreen'>;

export type TabNavigationProps = BottomTabNavigationProp<RootTabParamList, "HomeScreen">

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'UserProfileScreen'>,
  StackNavigationProp<RootStackScreenParamsListType>
>;