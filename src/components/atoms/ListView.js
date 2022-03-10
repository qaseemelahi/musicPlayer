import {View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';

export const ListView = props => {
  return (
    <View style={props.container}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) =>
          item?.id ? item?.id + index.toString() : index.toString()
        }
        refreshing={props.loading || false}
        onRefresh={props.onRefresh || null}
        renderItem={props.renderItem}
        onEndReached={props.onEndReached || null}
        ListFooterComponent={
          props.loading ? (
            <ActivityIndicator color={'black'} size="large" />
          ) : (
            <View />
          )
        }
        onEndReachedThreshold={0.6}
      />
    </View>
  );
};
