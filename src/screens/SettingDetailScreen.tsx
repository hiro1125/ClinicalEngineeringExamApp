import React, { FC } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FONTSIZE, SIZE, color } from '../styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';

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
        style={styles.itemContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Feather name='check' size={24} style={styles.check} />
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} title={data.label} />
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingDetailScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  header: {
    height: SIZE.BASIC_HIGHT * 12,
    paddingHorizontal: SIZE.BASIC_WIDTH * 5,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: FONTSIZE.SIZE18PX,
  },
  itemContainer: {
    height: SIZE.BASIC_HIGHT * 6.5,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  check: {
    marginRight: SIZE.BASIC_WIDTH * 2,
  },
});
