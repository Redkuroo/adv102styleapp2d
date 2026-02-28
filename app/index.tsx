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

      {/* TABS CONTAINER */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabBox1}>
          <Text style={styles.tabText}>Shows</Text>
        </View>

        <View style={styles.tabBox2}>
          <Text style={styles.tabText}>Movies</Text>
        </View>

        <View style={styles.tabBox3}>
          <Text style={styles.tabText}>Categories ▾</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#290d1c',
    paddingTop: 40,       
    paddingHorizontal: 16, 
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
    resizeMode: 'contain',
  },

  homeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
  },

  iconContainer: {
    flexDirection: 'row',
    marginLeft: 'auto', 
  },

  icon: {
    width: 22,
    height: 22,
    marginLeft: 20,
    tintColor: 'white',
    resizeMode: 'contain',
  },

  /* TABS */
tabsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
},

tabBox1: {
  paddingVertical: 8,
  paddingHorizontal: 18,
  borderRadius: 25,        
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.25)', 
  backgroundColor: 'rgba(255,255,255,0.05)', 
  marginRight: 12,
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
},

tabBox2: {
  paddingVertical: 8,
  paddingHorizontal: 18,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.25)', 
  backgroundColor: 'rgba(255,255,255,0.05)', 
  marginRight: 12,
  borderRadius: 8,
  marginHorizontal: 1,
},

tabBox3: {
  paddingVertical: 8,
  paddingHorizontal: 18,
  borderRadius: 25,         
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.25)', 
  backgroundColor: 'rgba(255,255,255,0.05)', 
  marginRight: 12,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
},

tabText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '500',
},
});