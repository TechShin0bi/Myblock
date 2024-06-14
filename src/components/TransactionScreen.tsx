import Text from '@components/Text';
import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import {  Icon } from 'react-native-elements';
import _ from 'lodash';
import { Transaction } from '@type/components';



interface Props {
    transactions: Transaction[];
}

const TransactionScreen: React.FC<Props> = ({ transactions }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.transactionContainer}>
                        <Image
                            source={{ uri: item.profilePicture }}
                            style={styles.avatar}
                        />
                        <View style={styles.transactionDetails}>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text
                                style={[
                                    styles.amount,
                                    { color: item.transactionType === 'incoming' ? 'green' : 'red' },
                                ]}
                            >
                                {item.transactionType === 'incoming' ? '+' : '-'}
                                ${_.toNumber(item.amount).toLocaleString()}
                            </Text>
                            <Text style={styles.dateTime}>{item.date} {item.time}</Text>
                        </View>
                        <Icon
                            name={item.transactionType === 'incoming' ? 'arrow-down' : 'arrow-up'}
                            type="font-awesome"
                            size={24}
                            color={item.transactionType === 'incoming' ? 'green' : 'red'}
                            containerStyle={styles.iconContainer}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    transactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    transactionDetails: {
        flex: 1,
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    amount: {
        fontSize: 14,
        marginTop: 5,
    },
    dateTime: {
        fontSize: 12,
        color: '#555',
        marginTop: 5,
    },
    iconContainer: {
        marginLeft: 10,
    },
});

export default TransactionScreen;
