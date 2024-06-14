import TransactionScreen from '@components/TransactionScreen';
import { Transaction } from '@type/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const TransactionsScreen = () => {
  const transactions : Transaction[] = [
    {
        id: '1',
        name: 'John Doe',
        profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
        transactionType: 'incoming',
        amount: 150.75,
        date: '2024-05-26',
        time: '14:30',
    },
    {
        id: '2',
        name: 'Jane Smith',
        profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
        transactionType: 'outgoing',
        amount: 75.50,
        date: '2024-05-25',
        time: '10:15',
    },
];

  return (
    <View style={styles.container}>
    <TransactionScreen transactions={transactions} />
</View>
  )
}

export default TransactionsScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
  },
});
