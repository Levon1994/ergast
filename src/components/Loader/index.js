import React, { useState, useEffect, useMemo } from 'react';

import {
  View,
  Easing,
  Animated,
  StyleSheet,
} from 'react-native';

const Loader = () => {
  const [spinAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(Animated.timing(
      spinAnim,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )).start();
  }, []);

  const spin = useMemo(() => 
    spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    }),
  [spinAnim]);
  
  return (
    <View
      style={styles.main}
    >
      <View style={styles.container}>
      <Animated.Image
        style={{ ...styles.animatedImage,  transform: [{rotate: spin}] }}
        source={require('../../assets/loader.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    zIndex: 10,
    borderRadius: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedImage: {
    height:100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default Loader;