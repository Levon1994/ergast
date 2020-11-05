import React, { useState, useEffect, useMemo } from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Pagination = ({
  count,
  onPageChange,
}) => {

  const [page, setPage] = useState(1);

  const paginationData = useMemo(() => {
    const data = [];
    for (var i = 0; i < Math.ceil(count/10); i++) {
      data.push({ number: i + 1 })
    }
    return data;
  }, [count]);

  const paginationContent = useMemo(() => (
    paginationData.length && paginationData.filter((item) => (
      (page - 1) === item.number || item.number === (page + 1) || item.number === page
    )).map(({ number }) => (
      <TouchableOpacity 
        key={number} 
        style={{
          ...(page === number && { backgroundColor: 'grey', color: '#fff' }),
          ...localStyles.page,
        }} 
        onPress={() => setPage(number)}
      >
        <Text>{number}</Text>
      </TouchableOpacity>
    ))
  ), [paginationData, page]);

  useEffect(() => {
    onPageChange(page)
  },[page, onPageChange]);

  console.log('paginationContent :::', paginationContent);

  return (
    <View style={localStyles.main}>
      <View style={localStyles.content}>
        <TouchableOpacity 
          style={localStyles.page}
          activeOpacity={page < 2 ? 1 : 0.2 }
          onPress={() => page > 1 && setPage(page - 1)}
        >
          <Text>{'<'}</Text>
        </TouchableOpacity>
        {paginationContent || null}
        <TouchableOpacity 
          style={localStyles.page}
          activeOpacity={page > Math.ceil(count/10) - 1 ? 1 : 0.2 }
          onPress={() => page < Math.ceil(count/10) - 2 && setPage(page + 1)}
        >
          <Text>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={localStyles.total}>Total: {count} drivers</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  main: {

  },
  page: {
    borderWidth: 1,
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  content: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  total: {
    margin: 10,
    fontSize: 16,
  },
});

export default Pagination;
