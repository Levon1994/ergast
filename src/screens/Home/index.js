import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import {
  View, 
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { Card, Pagination, Loader } from '../../components';

import { getDrivers } from '../../modules/actions';

const mapStateToProps = ({ drivers }) => ({ drivers });

const Home = ({
  drivers,
  getDrivers,
}) => {
  const [isBusy, setIsBusy] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsBusy(true);
    getDrivers(offset).then(() => {
      setIsBusy(false);
    });
  }, [offset]);

  const onRenderDriver = useCallback(({ item }) => (
    <Card {...item}/>
  ), [drivers]);

  return (
    <View style={localStyles.main}>
      <Text style={localStyles.title}>Drivers List</Text>
      <View style={localStyles.listConent}>
        {isBusy && <Loader/>}
        <FlatList
          data={drivers?.MRData?.DriverTable?.Drivers}
          renderItem={onRenderDriver}
          keyExtractor={item => item.driverId}
        />
      </View>
      <Pagination
        count={drivers?.MRData?.total}
        onPageChange={page => setOffset(page*10)}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  main: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
  },
  listConent: {
    height: 600,
  },
});

export default connect(mapStateToProps, {
  getDrivers,
})(Home);
