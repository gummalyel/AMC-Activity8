import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      
      <Image source={require('../../assets/project1.png')} style={styles.image} />
      <Text style={styles.text}>📱 Mobile App: To-Do List</Text>
      
      <Image source={require('../../assets/project2.png')} style={styles.image} />
      <Text style={styles.text}>🌍 Website: Portfolio Site</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#673AB7' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  text: { fontSize: 18, color: '#fff', marginTop: 5 },
  image: { width: 200, height: 120, marginTop: 10, borderRadius: 10 },
});

export default ProjectsScreen;