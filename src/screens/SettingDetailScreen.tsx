import React, { FC } from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  navigation: any;
  route: any;
};

const SettingDetailScreen: FC<Props> = ({ navigation, route }) => {
  const { data } = route.params;
  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Feather name='check' size={24} />
        <Text>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View></View>
    </View>
  );
};

export default SettingDetailScreen;
