import { user_img_male } from '@assets/index';
import Text from '@components/Text';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import colors from '@utils/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: user_img_male, // URL to user's profile picture
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <View style={styles.container}>
      {/* Top section with user info */}
      <View style={styles.topSection}>
        <Avatar
          rounded
          source={user.profilePicture}
          size="large"
        />
        <Text >{user.name}</Text>
        <Text>{user.email}</Text>
      </View>

      {/* Drawer items */}
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Logout button */}
      <View style={styles.bottomSection}>
        <Button
          buttonStyle={styles.logoutButton}
          title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  topSection: {
    padding: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 20,
  },
  logoutButton: {
    color: colors.white,
    backgroundColor: colors.red
  }
});

export default DrawerContent;
