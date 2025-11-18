import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const DrawerContent = props => {
  const screens = [
    { name: 'Dashboard' },
    { name: 'Users' },
    { name: 'Products' },
    { name: 'Orders' },
    { name: 'Subscriptions' },
    { name: 'Subscription Plans' },
    { name: 'Announcements' },
    { name: 'Supports' },
    { name: 'Settings' },
  ];

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>

      {screens.map(screen => (
        <TouchableOpacity
          key={screen.name}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate(screen.name)}>
          <Text style={styles.drawerItemText}>{screen.name}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F1D1',
  },
  profileContainer: {
    backgroundColor: '#E4D5A9',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowOpacity: 0.2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#C4C4C4', 
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#555',
  },
  drawerItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    fontSize: 16,
  },
});