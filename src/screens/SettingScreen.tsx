import React, { FC } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Props, SettingData } from '../../types/type';
import { settingData } from '../contents';
import { FONTSIZE, SIZE, color } from '../styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-elements';
import Header from '../components/Header';

/** 設定画面 */
const SettingScreen: FC<Props> = ({ navigation }) => {
  const renderItem: ListRenderItem<SettingData> = ({ item, index }) => {
    return (
      <View key={index}>
        {item.item.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => navigation.navigate('SettingDetailScreen', { data })}
          >
            <Text h4 style={styles.subTitleText}>
              {data.label}
            </Text>
            <MaterialIcons name='navigate-next' size={26} />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} title={'設定'} />

        <FlatList
          data={settingData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    height: SIZE.BASIC_HIGHT * 6.5,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subTitleText: {
    fontSize: FONTSIZE.SIZE18PX,
  },
});
