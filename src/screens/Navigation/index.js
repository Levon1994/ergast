import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Driver } from '../../screens';

const Stack = createStackNavigator();

const mapStateToProps = ({ selectedDriver }) => ({ selectedDriver });

const Navigation = ({ selectedDriver }) => {

  const title = useMemo(() => {
    const data = selectedDriver?.MRData?.DriverTable?.Drivers?.[0];
    return data && `${data.givenName} ${data.familyName}`
  }, [selectedDriver]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Driver" 
          component={Driver} 
          options={{ title }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(mapStateToProps, null)(Navigation);