import Text from '@components/Text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import _ from "lodash"
import { Transaction } from '@type/components';



const UserTransactionCard: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
    const { t } = useTranslation();
    return (
        <View style={styles.card}>
            <Card.Title style={styles.title}>
                {t('resent transactions')}
            </Card.Title>
            <Card.Divider />
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userContainer}>
                        <Avatar
                            rounded
                            source={{ uri: item.profilePicture }}
                            size="medium"
                            containerStyle={styles.avatar}
                        />
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
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        elevation: 5,
    },
    title: {
        textAlign: 'left',
    },
    userContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
        position: 'relative',
    },
    avatar: {
        marginTop: 10,
    },
    userName: {
        marginTop: 10,
        fontSize: 13,
        fontWeight: 'bold',
    },
    amount: {
        marginTop: 5,
        fontSize: 11,
        fontWeight: 'bold',
    },
});

export default UserTransactionCard;
