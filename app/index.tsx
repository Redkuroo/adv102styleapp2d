import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        {/* Netflix Icon Image */}
        <Image 
          source={require('../assets/images/netflix.png')} 
          style={styles.image}
        />

        {/* Home Text */}
        <Text style={styles.homeText}>Home</Text>

        {/* Right Icons */}
        <View style={styles.iconContainer}>
          <Image 
            source={require('../assets/images/dl.png')} 
            style={styles.icon}
          />
          <Image 
            source={require('../assets/images/bell.png')} 
            style={styles.icon}
          />
        </View>
      </View>

      {/* TABS CONTAINER
      <View style={styles.tabsContainer}>
        <Text style={styles.tab}>Shows</Text>
        <Text style={styles.tab}>Movies</Text>
        <Text style={styles.tab}>Categories ▾</Text>
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#290d1c',
    paddingTop: 40,        // spacing from top of screen
    paddingHorizontal: 16, // consistent padding
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain', // ensures image scales properly
  },

  homeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
  },

  iconContainer: {
    flexDirection: 'row',
    marginLeft: 'auto', // pushes icons to the right
  },

  icon: {
    width: 22,
    height: 22,
    marginLeft: 20,
    tintColor: 'white',
    resizeMode: 'contain',
  },

  // /* TABS */
  // tabsContainer: {
  //   flexDirection: 'row',  // horizontal row
  //   alignItems: 'center',  // vertical center
  //   marginTop: 20,         // spacing below header
  //   paddingHorizontal: 0,  // already padded by container
  // },

  // tab: {
  //   color: '#fff',
  //   fontSize: 14,
  //   fontWeight: '500',
  //   marginRight: 24,       // spacing between tabs
  // },
});