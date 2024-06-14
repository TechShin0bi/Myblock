import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, ListItem } from 'react-native-elements';
import { NotificationPropsType } from '@type/components';

const Notifications: React.FC<{ notifications: NotificationPropsType[] }> = ({ notifications }) => {
    // Function to render the icon based on notification type
    const renderIcon = (type: string) => {
        switch (type) {
            case 'success':
                return <Icon size={30} name="check-circle" type="feather" color="green" />;
            case 'failed':
                return <Icon size={30} name="x-circle" type="feather" color="red" />;
            case 'info':
                return <Icon size={30} name="info" type="feather" color="blue" />;
            case 'deposit':
                return <Icon size={30} name="dollar-sign" type="feather" color="orange" />;
            default:
                return <Icon size={30} name="alert-circle" type="feather" color="gray" />;
        }
    };

    return (
        <View>
            {notifications.map((notification) => (
                <TouchableOpacity
                    // activeOpacity={0.7}
                    onPress={() => console.log('pressed')}>
                    <ListItem key={notification.id} bottomDivider>
                        {renderIcon(notification.type)}
                        <ListItem.Content>
                            <ListItem.Subtitle style={styles.heading}>
                                {notification.heading}
                            </ListItem.Subtitle>
                            <ListItem.Subtitle style={styles.body}>
                                {notification.body}
                            </ListItem.Subtitle>
                            <ListItem.Subtitle style={styles.date}>
                                {notification.date}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    body: {
        marginBottom: 4,
    },
    date: {
        color: 'gray',
    },
});