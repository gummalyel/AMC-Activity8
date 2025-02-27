import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EducationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Education</Text>
      <Text style={styles.text}>🎓 Elementary: Legarda Elementary School</Text>
      <Text style={styles.text}>🎓 Junior HS: Don Alejandro Roces Sr. Science Technology High School</Text>
      <Text style={styles.text}>🎓 Senior HS: St. Joseph's College of Quezon City</Text>
      <Text style={styles.text}>🎓 College: Global Reciprocal Colleges</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2196F3' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  text: { fontSize: 18, color: '#fff', marginTop: 5 },
});

export default EducationScreen;
