import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Projects = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
    
      <Text style={styles.text}>💻🌐 SYSARCH 2: Web-Based Enrollment System</Text>
      <Image source={require('../assets/sysarch.jpg')} style={styles.image} />

      
      <Text style={styles.text}>🌍 Website: Portfolio Site</Text>
      <Image source={require('../assets/portfolio.jpg')} style={styles.image2} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#673AB7',
    width: '100%',
    height: '100%',
    },

  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 10
    },

  text: { 
    fontSize: 18, 
    color: '#fff', 
    marginTop: 5 
    },

  image: { 
    width: 200, 
    height: 200, 
    marginTop: 10, 
    borderRadius: 10 
    },

  image2: { 
    width: 200, 
    height: 300, 
    marginTop: 10, 
    borderRadius: 10 
    },   
  
  
});

export default Projects;
