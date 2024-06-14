import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '@components/Text';


const UserProfileScreen = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.username}>@johndoe</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoRow}>
          <Icon name="envelope" size={20} />
          <Text style={styles.infoText}>john.doe@example.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="phone" size={20} />
          <Text style={styles.infoText}>+1 234 567 890</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingsRow} 
        // onPress={() => navigation.navigate('EditProfile')}
        >
          <Icon name="edit" size={20} />
          <Text style={styles.settingsText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsRow} 
        // onPress={() => navigation.navigate('PrivacySettings')}
        >
          <Icon name="lock" size={20} />
          <Text style={styles.settingsText}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    color: '#888',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingsText: {
    marginLeft: 10,
    fontSize: 16,
  },
});