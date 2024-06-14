import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/TabScreens/HomeScreen';
import ScanQRCodeScreen from '@screens/TabScreens/ScanQRCodeScreen';
import SettingScreen from '@screens/TabScreens/SettingScreen';
import TransactionsScreen from '@screens/TabScreens/TransactionsScreen';
import UserProfileScreen from '@screens/TabScreens/UserProfileScreen';
import { RootTabParamList } from '@type/navigations';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBar from '@components/navigation/TabBar';
import TabHeader from '@components/navigation/TabHeader'; 


const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigationBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'TransactionsScreen') {
            iconName = 'bar-chart-o';
          } else if (route.name === 'ScanQRCodeScreen') {
            iconName = 'qrcode';
          } else if (route.name === 'UserProfileScreen') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown:false,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 6,
        },
        tabBarLabelPosition: 'below-icon',
      })}
    >
      <Tab.Screen
        options={{
          title: t('home'),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: t('activity'),
        }}
        name="TransactionsScreen"
        component={TransactionsScreen}
      />
      <Tab.Screen
        options={{
          title: t('scan'),
        }}
        name="ScanQRCodeScreen"
        component={ScanQRCodeScreen}
      />
      <Tab.Screen
        options={{
          title: t('profile'),
        }}
        name="UserProfileScreen"
        component={UserProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationBar;
