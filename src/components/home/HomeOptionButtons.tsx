import Text from '@components/Text';
import colors from '@utils/colors';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeOptionButtons = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.card}
                onPress={() => console.log("pressed")}>
                <Icon name="money" size={24} color={colors.blue2} />
                <Text style={styles.title}>
                    {t('transfer')}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.card}
                onPress={() => console.log("pressed")}>
                <Icon name="credit-card" size={24} color={colors.blue2} />
                <Text style={styles.title}>
                    {t('topup')}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.card}
                onPress={() => console.log("pressed")}>
                <Icon name="qrcode" size={24} color={colors.blue2} />
                <Text style={styles.title}>
                    {t('qrcode')}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.card}
                onPress={() => console.log("pressed")}>
                <Icon name="location-arrow" size={24} color={colors.blue2} />
                <Text style={styles.title}>
                    {t('nearby')}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeOptionButtons;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', // Align items vertically in the center
        flexWrap: 'wrap', // Allow items to wrap to the next line if necessary
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10, // Increase padding for better touch area
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, // Each button takes up equal width
        aspectRatio: 1, // Maintain aspect ratio
        elevation: 5,
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blue2
    },
});
