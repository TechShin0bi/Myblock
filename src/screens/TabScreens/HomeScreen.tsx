// src/screens/HomeScreen.tsx
import BalanceCard from '@components/home/BalanceCard';
import HomeOptionButtons from '@components/home/HomeOptionButtons';
import UserTransactionCard from '@components/home/UserTransactionCard';
import { Transaction } from '@type/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const HomeScreen = () => {

  const users: Transaction[] = [
    {
      id: '1',
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      transactionType: 'incoming',
      amount: 122222
    },
    {
      id: '2',
      name: 'Jane Smith',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
      transactionType: 'outgoing',
      amount: 122222
    },
    {
      id: '3',
      name: 'Jane Smith',
      profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
      transactionType: 'incoming',
      amount: 122222
    },
    {
      id: '4',
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
      transactionType: 'outgoing',
      amount: 122222
    },
    {
      id: '5',
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      transactionType: 'outgoing',
      amount: 122222
    },
    {
      id: '6',
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
      transactionType: 'outgoing',
      amount: 122222
    },
  ];

  return (
    <View style={styles.container}>
      <HomeOptionButtons />
      <BalanceCard balance={100000} lastDeposit={120000} lastExpense={123154} />
      <UserTransactionCard transactions={users} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});

export default HomeScreen;
