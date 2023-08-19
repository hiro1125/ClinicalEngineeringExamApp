import React, { FC } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FONTSIZE, SIZE, color } from '../styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import { useRootDispatch } from '../redux/store/store';
import { onSettingPress } from '../function';
import { settingAdaptor } from '../adaptor/settingAdaptor';
import { Props, RootStackParamList } from '../../types/type';
import { RouteProp } from '@react-navigation/native';

type RouteProps = {
  route: RouteProp<RootStackParamList, 'SettingDetailScreen'>;
};

type ListItemProps = {
  text: string;
  id: number;
  check: boolean;
};

const SettingDetailScreen: FC<Props & RouteProps> = ({ navigation, route }) => {
  const dispatch = useRootDispatch();
  const { data } = route.params;
  const conversionData = settingAdaptor(data);
  const checkListData = conversionData.data;

  const renderItem: ListRenderItem<ListItemProps> = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemContainer}
        onPress={() => {
          onSettingPress({ dispatch, label: conversionData.label, item });
          navigation.goBack();
        }}
      >
        <Feather
          name='check'
          size={24}
          style={[styles.check, { opacity: item.check ? 1 : 0 }]}
        />
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} title={data.label} />
        <FlatList
          data={checkListData}
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
    width: '100%',
    height: SIZE.BASIC_HIGHT * 5.5,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: SIZE.BASIC_WIDTH * 2,
    flexDirection: 'row',
  },
  check: {
    marginRight: SIZE.BASIC_WIDTH * 5,
  },
});
