import { Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
<View style={{flexDirection: 'row'}}>

      <Text>Netflix</Text>
    <Image 
      source={require('../assets/images/netflix.png')} 
      style={styles.image}
      />
      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', padding: 10, justifyContent: 'space-between', marginTop: 25}}>Home</Text>
      <View style={styles.iconContainer}>
          <Image 
            source={require('../assets/images/dl.png')} 
            style={styles.icon}
          />
          <Image 
            source={require('../assets/images/bell.png')} 
            style={styles.icon1}
          />
        </View>
     
</View>
      </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#290d1c', 
  },
  logo: {
    width: 30, // Smaller width for just the "N" symbol
    height: 40,
    marginRight: 10, // Space between logo and "Home"
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  icon: {
    width: 22,
    height: 22,
    marginLeft: 200,
     marginTop: 25,
    tintColor: 'white',
    
  },
  icon1: {
    width: 22,
    height: 22,
    marginLeft: 20,
    marginTop: 25,
    tintColor: 'white',
    
  },
  image: {
    width: 65,
    height: 65,
    marginTop: 20,
    marginStart: 20,
  },
});