import Text from '@components/Text';
import colors from '@utils/colors';
import _ from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface Props {
    balance: number;
    lastDeposit: number;
    lastExpense: number;
}

const BalanceCard: React.FC<Props> = ({ balance, lastDeposit, lastExpense }) => {
    const formatNumber = (number: number) => {
        return _.toString(_.toNumber(number).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            {/* Left side */}
            <View style={styles.leftContainer}>
                <Text style={styles.balanceTitle} >
                    {t('last transaction')}
                </Text>
                {/* Deposit section */}
                <View style={styles.itemContainer}>
                    <Icon name="arrow-up" size={20} color="green" />
                    <View style={styles.transactionContainer}>
                        <Text style={styles.itemTitle}>Deposit</Text>
                        <Text style={{ ...styles.itemAmount, color: colors.green }}>+{formatNumber(lastDeposit)}</Text>
                    </View>
                </View>

                {/* Expense section */}
                <View style={styles.itemContainer}>
                    <Icon name="arrow-down" size={20} color="red" />
                    <View style={styles.transactionContainer}>
                        <Text style={styles.itemTitle}>Expense</Text>
                        <Text style={{ ...styles.itemAmount, color: colors.red }}>-{formatNumber(lastExpense)}</Text>
                    </View>
                </View>
            </View>

            {/* Right side */}
            <View style={styles.rightContainer}>
                <View>
                    <Text style={styles.balanceTitle}>Balance</Text>
                    <Text style={styles.balanceAmount}>{formatNumber(balance)}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Withdraw</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginVertical: 20,
        height: 170,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        // marginBottom: 10,
        height: "50%"
    },
    transactionContainer: {
        flex: 1,
        paddingLeft: 20
    },
    itemTitle: {
        color: colors.blue2
    },
    itemAmount: {
        marginRight: 5,
        fontSize: 16
    },
    balanceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.black
    },
    balanceAmount: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default BalanceCard;
