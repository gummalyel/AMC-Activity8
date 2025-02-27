import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamaliel Ivann Dellosa</Text>
      <Text style={styles.subtitle}>Bachelor of Science in Information Technology</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4CAF50' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 20, color: '#fff', marginTop: 10 },
});

export default HomeScreen;