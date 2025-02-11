import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';


export default function App() {
    const [backgroundColor, setBackgroundColor] = useState('white'); // Trạng thái màu nền
  
    const Box = ({ backgroundColor, text }) => {
      return (
        <TouchableOpacity 
          style={[styles.box, { backgroundColor }]} 
          onPress={() => setBackgroundColor(backgroundColor)} // Thay đổi màu nền khi nhấn
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      );
    };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Box backgroundColor='green'  text='Green'></Box>
      <Box backgroundColor='blue'   text='Blue'></Box>
      <Box backgroundColor='brown'  text='Brown'></Box>
      <Box backgroundColor='yellow' text='Yellow'></Box>
      <Box backgroundColor='red'    text='Red'></Box>
      <Box backgroundColor='black'  text='black'></Box>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box : {
    width: 200,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,

  },
  text:{
    color: '#fff',
    fontSize: 20,
  }
  
});
