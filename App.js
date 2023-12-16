import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const App = () => {

  const [data, setData] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        style={{ marginVertical: 100 }}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <Animatable.View
              animation={'fadeInUp'}
              duration={1000}
              delay={index * 300}
              style={{ height: 70, width: '100%' }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderWidth: .2,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 30 }}>{`Item ${index + 1}`}</Text>
              </TouchableOpacity>
            </Animatable.View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
