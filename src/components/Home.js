import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.image} />

      <Text style={styles.title}>Gamaliel Ivann Dellosa</Text>
      <Text style={styles.course}>Information Technology student</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#4CAF50',
    width: '100%',
    height: '100%',
    },

  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff' 
    },

  course: { 
    fontSize: 20, 
    color: '#fff', 
    marginTop: 10,
    fontStyle: 'italic'
    },

  image: { 
    width: 200, 
    height: 200, 
    marginTop: 10, 
    borderRadius: 100 
    },

});

export default Home;
