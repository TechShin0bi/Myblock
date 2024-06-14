import { app_logo } from '@assets/index';
import { useNavigation } from '@react-navigation/native';
import colors from '@utils/colors';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import OTPTextInput from 'react-native-otp-textinput';
import Text from '@components/Text';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={app_logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text  style={styles.title}>
        Enter OTP
      </Text>
      <Text style={styles.instructions}>
        A One-Time Password has been sent to your email. Please enter it below.
      </Text>
      <OTPTextInput
        handleTextChange={handleOtpChange}
        inputCount={4}
        keyboardType="numeric"
        tintColor={colors.primary}
        offTintColor={colors.gray}
        textInputStyle={styles.otpInput}
        containerStyle={styles.otpContainer}
      />
      <Button title="Verify OTP" onPress={() => { }} />
      <TouchableOpacity onPress={() => { /* Resend OTP logic */ }}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  instructions: {
    textAlign: 'center',
    marginBottom: 24,
    color: colors.gray,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  otpInput: {
    width: 60,
    height: 60,
    fontSize: 18,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    textAlign: 'center',
    color: colors.black,
  },
  resendText: {
    textAlign: 'center',
    marginTop: 16,
    color: colors.primary,
  },
});

export default OTPScreen;
