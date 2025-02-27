import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

import HomeScreen from './components/HomeScreen';
import EducationScreen from './components/EducationScreen';
import AboutMeScreen from './components/AboutMeScreen';
import ProjectsScreen from './components/ProjectsScreen';
import ExtraScreen from './components/ExtraScreen';

const sections = [HomeScreen, EducationScreen, AboutMeScreen, ProjectsScreen, ExtraScreen];

const App = () => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (event) => {
    if (event.nativeEvent.translationX < -50) {
      setIndex((prevIndex) => (prevIndex < sections.length - 1 ? prevIndex + 1 : prevIndex));
    } else if (event.nativeEvent.translationX > 50) {
      setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }
  };

  const CurrentScreen = sections[index];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={handleSwipe}>
        <View style={styles.container}>
          <CurrentScreen />
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
});

export default App;
