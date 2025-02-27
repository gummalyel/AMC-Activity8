import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExtraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills & Certifications</Text>
      <Text style={styles.text}>✅ React Native</Text>
      <Text style={styles.text}>✅ JavaScript & Python</Text>
      <Text style={styles.text}>✅ UI/UX Design</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E91E63' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  text: { fontSize: 18, color: '#fff', marginTop: 5 },
});

export default ExtraScreen;