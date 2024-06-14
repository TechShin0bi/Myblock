import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '@components/Text';


const InviteFriendsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text >InviteFriendsScreen</Text>
    </View>
  );
};

export default InviteFriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
