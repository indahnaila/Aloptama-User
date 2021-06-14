import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Pie from 'react-native-pie';

export default () => {
  return (
    <View style={styles.container}>
      <View style={{ width: 175, alignItems: 'center' }}>
        <Pie
          radius={80}
          innerRadius={75}
          sections={[
            {
              percentage: 70,
              color: '#334752',
            },
          ]}
          backgroundColor="#ddd"
        />
        <View style={styles.gauge}>
          <Text style={styles.gaugeText}>70%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', height: 300 },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
