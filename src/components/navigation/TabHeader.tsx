import React from 'react';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Colors from '@utils/colors';
import { DrawerNavigationProps, StackNavigationProps } from '@type/navigations';

const TabHeader = () => {
    const navigation = useNavigation<StackNavigationProps['navigation']>();
    const drawerNavigation = useNavigation<DrawerNavigationProps['navigation']>()

    return (
        <Header
            backgroundColor={Colors.yellow}
            leftComponent={{ size: 40, icon: 'menu', color: Colors.black, onPress: () => drawerNavigation.toggleDrawer() }}
            rightComponent={{ size: 40, icon: 'notifications', color: Colors.black, onPress: () => navigation.navigate('NotificationsScreen') }}
            containerStyle={{
                justifyContent: 'space-around',
                height: 100,
            }}
        />
    );
};

export default TabHeader;
