import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.text}>
        As a third-year IT student, I’ve built a strong foundation in HTML, CSS, 
        JavaScript, SQL, and Python. I’m currently expanding my skills by learning 
        React Native and diving into UI/UX design to understand how users interact 
        with technology. Every project and challenge pushes me to grow, and 
        I’m always eager to learn and improve.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FF9800',
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
    textAlign: 'center', 
    paddingHorizontal: 20 
    },

});

export default AboutMe;
