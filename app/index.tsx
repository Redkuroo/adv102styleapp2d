import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
    >
      <Text>Netflix</Text>
    <Image 
      source={require('../assets/images/netflix.png')} 
      />
      <Image 
      source={require('../assets/images/dl.png')} 
      /><Image 
      source={require('../assets/images/bell.png')} 
      />
     <Text>Netflix</Text>

      </View>
    );
  }
