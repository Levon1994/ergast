import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import {
  View, 
  FlatList,
  StyleSheet,
} from 'react-native';

import { Card, Loader } from '../../components';

import { getSelectedDriver } from '../../modules/actions';

const mapStateToProps = ({ selectedDriver }) => ({ selectedDriver });

const Driver = ({
  route: { params },
  selectedDriver,
  getSelectedDriver,
}) => {

  const [isBusy, setIsBusy] = useState(false);

  const driverId = useMemo(
    () => params?.driverId,
  [params]);

  useEffect(() => {
    setIsBusy(true);
    getSelectedDriver(driverId).then(() => {
      setIsBusy(false);
    });
  }, [driverId]);

  const onRenderDriver = useCallback(
    ({ item }) => <Card {...item} />,
  [selectedDriver]);

  return (
    <View style={localStyles.main}>
      {isBusy && <Loader/>}
      <FlatList
        data={selectedDriver?.MRData?.DriverTable?.Drivers}
        renderItem={onRenderDriver}
        keyExtractor={item => item.driverId}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, {
  getSelectedDriver,
})(Driver);
