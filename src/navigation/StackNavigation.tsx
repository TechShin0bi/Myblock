import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardScreen from '@screens/Orders/OnboardScreen'
import ForgotPasswordScreen from '@screens/Stack/ForgotPasswordScreen'
import NotificationsScreen from '@screens/Stack/NotificationsScreen'
import OTPScreen from '@screens/Stack/OTPScreen'
import PasswordResetScreen from '@screens/Stack/PasswordResetScreen'
import PhoneNumberScreen from '@screens/Stack/PhoneNumberScreen'
import SignInScreen from '@screens/Stack/SignInScreen'
import SignUpScreen from '@screens/Stack/SignUpScreen'
import { RootStackScreenParamsListType } from '@type/navigations'
import React from 'react'
import DrawerNavigation from './DrawerNavigation'
import TabHeader from '@components/navigation/TabHeader'
import { useTranslation } from 'react-i18next'

const StackNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackScreenParamsListType>()
  const { t } = useTranslation()
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <TabHeader />,
      })}
    >
      <Stack.Screen name='DrawerScreen' component={DrawerNavigation} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name='OnboardScreen' component={OnboardScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation
