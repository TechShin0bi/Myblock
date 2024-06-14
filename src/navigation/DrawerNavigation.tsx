import DrawerContent from '@components/navigation/DrawerContent';
import TabHeader from '@components/navigation/TabHeader';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUsScreen from '@screens/Drawer/AboutUsScreen';
import ChangePasswordScreen from '@screens/Drawer/ChangePasswordScreen';
import ContactListScreen from '@screens/Drawer/ContactListScreen';
import InviteFriendsScreen from '@screens/Drawer/InviteFriendsScreen';
import MyWalletScreen from '@screens/Drawer/MyWalletScreen';
import { RootDrawerScreenPropsListType } from '@type/navigations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TabNavigationBar from './TabNavigationBar';

const Drawer = createDrawerNavigator<RootDrawerScreenPropsListType>();

const DrawerNavigation: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Drawer.Navigator

      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={({ route }) => ({
        header: () => <TabHeader  />,
      })}
    >
      <Drawer.Screen
        options={{
          title: t('home'),
        }}
        name="TabScreen" component={TabNavigationBar} />
      <Drawer.Screen
        options={{
          title: t('invite friends'),
        }}
        name="InviteFriendsScreen" component={InviteFriendsScreen} />
      <Drawer.Screen
        options={{
          title: t('contact list'),
        }} name="ContactListScreen" component={ContactListScreen} />

      <Drawer.Screen
        options={{
          title: t('my wallet'),
        }}
        name="MyWalletScreen" component={MyWalletScreen} />
      <Drawer.Screen
        options={{
          title: t('change password'),
        }} name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <Drawer.Screen
        options={{
          title: t('about'),
        }} name="AboutUsScreen" component={AboutUsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
