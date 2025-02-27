import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import Home from './components/Home';
import Education from './components/Education';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const sections = [Home, Education, AboutMe, Projects];

const App = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < sections.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const CurrentScreen = sections[index];

  return (
    <View style={styles.container}>
      <CurrentScreen />

      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={handlePrevious} disabled={index === 0} />
        <Button title="Next" onPress={handleNext} disabled={index === sections.length - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    position: 'absolute',
    bottom: 20,
    color: 'orange',
  },
});

export default App;