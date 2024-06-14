import Text from '@components/Text';
import { app_logo } from '@assets/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '@type/navigations';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import PhoneInput, {
    ICountry,
} from 'react-native-international-phone-number';


const PhoneNumberScreen = () => {
    const [selectedCountry, setSelectedCountry] = useState<
        undefined | ICountry
    >(undefined);
    const [inputValue, setInputValue] = useState<string>('');

    function handleInputValue(phoneNumber: string) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: ICountry) {
        setSelectedCountry(country);
    }
    const navigation = useNavigation<StackNavigationProps['navigation']>();
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={app_logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.title}>
                Enter Phone Number
            </Text>
            <PhoneInput
                value={inputValue}
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
            />
            <Button title="Next" onPress={() => navigation.navigate('OTPScreen')} containerStyle={styles.buttonContainer} />
            <Button
                title="Back"
                type="clear"
                onPress={() => navigation.goBack()}
            />
            {/* <View style={{ marginTop: 10 }}>
                <Text>
                    Country:{' '}
                    {`${selectedCountry?.name} (${selectedCountry?.cca2})`}
                </Text>
                <Text>
                    Phone Number:{' '}
                    {`${selectedCountry?.callingCode} ${inputValue}`}
                </Text>
            </View> */}
        </View>
    )
}

export default PhoneNumberScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    logoContainer: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    logo: {
        width: 96,
        height: 96,
        borderRadius: 48,
    },
    title: {
        textAlign: 'center',
        marginBottom: 16,
    },
    buttonContainer: {
        marginTop: 16, // Add margin top to the button
    },
});
