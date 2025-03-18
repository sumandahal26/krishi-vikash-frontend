import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomBottomNav = ({ state, navigation }) => {
  const tabs = [
    { name: 'Home', icon: 'home-outline' },
    { name: 'Profile', icon: 'person-outline' },
    { name: 'Settings', icon: 'settings-outline' },
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map((tab, index) => {
        const isFocused = state?.index === index;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            style={styles.tab}
          >
            <Icon
              name={tab.icon}
              size={24}
              color={isFocused ? '#2D8C4B' : '#ccc'}
            />
            <Text style={{ color: isFocused ? '#2D8C4B' : '#ccc' }}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tab: {
    alignItems: 'center',
  },
});

export default CustomBottomNav;