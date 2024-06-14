import Text from '@components/Text';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import colors from '@utils/colors';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                let iconName = 'home';
                if (route.name === 'HomeScreen') {
                    iconName = 'home';
                } else if (route.name === 'TransactionsScreen') {
                    iconName = 'bar-chart-o';
                } else if (route.name === 'ScanQRCodeScreen') {
                    iconName = 'qrcode';
                } else if (route.name === 'SettingsScreen') {
                    iconName = 'cog';
                } else if (route.name === 'UserProfileScreen') {
                    iconName = 'user';
                }

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tab}
                    >
                        <Icon name={iconName} size={30} color={isFocused ? colors.blue : colors.black} />
                        <Text style={{ color: isFocused ? colors.blue : colors.black, fontSize: 12 }}>
                            {options.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 30,
        elevation: 10,
    },
    tab: {
        alignItems: 'center',
    },
});

