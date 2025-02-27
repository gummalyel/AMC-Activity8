import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.text}>
        I am a passionate developer with experience in web and mobile development.
        Skilled in React Native, JavaScript, and UI/UX design.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF9800' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  text: { fontSize: 18, color: '#fff', textAlign: 'center', paddingHorizontal: 20 },
});

export default AboutMeScreen;
