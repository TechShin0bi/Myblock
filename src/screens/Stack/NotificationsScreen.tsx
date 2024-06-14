import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NotificationPropsType } from '@type/components';
import Notifications from '@components/notification/Notifications';

// Sample data for notifications
const notifications: NotificationPropsType[] = [
    {
        id: 1,
        type: 'success',
        heading: 'Successful Transaction',
        body: 'Your payment of $50 to John Doe was successful.',
        date: 'May 27, 2024 10:30 AM',
    },
    {
        id: 2,
        type: 'failed',
        heading: 'Failed Transaction',
        body: 'Your payment of $100 to Jane Smith failed due to insufficient funds.',
        date: 'May 26, 2024 09:45 PM',
    },
    {
        id: 3,
        type: 'info',
        heading: 'User Info Update',
        body: 'Your account information has been updated successfully.',
        date: 'May 25, 2024 03:15 PM',
    },
    {
        id: 4,
        type: 'deposit',
        heading: 'Deposit Payment Received',
        body: 'Your deposit of $200 has been received and processed.',
        date: 'May 24, 2024 11:20 AM',
    },
];

const NotificationsScreen = () => {


    return (
        <View style={styles.container}>
            <Notifications notifications={notifications} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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

export default NotificationsScreen;
