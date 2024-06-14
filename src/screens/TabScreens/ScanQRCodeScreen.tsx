import { StyleSheet,  View } from 'react-native'
import React from 'react'
import Text from '@components/Text';

const ScanQRCodeScreen = () => {
  return (
    <View
      style={styles.container}>
      <Text>ScanQRCodeScreen</Text>
    </View>
  )
}

export default ScanQRCodeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})