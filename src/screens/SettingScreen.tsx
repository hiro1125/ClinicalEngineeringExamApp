import React, { FC } from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SettingData } from '../../types/type';
import { settingData } from '../contents';
import { FONTSIZE, SIZE, color } from '../styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-elements';

type Props = {
  navigation: any;
};

const SettingScreen: FC<Props> = ({ navigation }) => {
  const renderItem: ListRenderItem<SettingData> = ({ item, index }) => {
    const labels = item.item.map((i) => i.label);
    return (
      <View key={index}>
        {labels.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => navigation.navigate('settingDetailScreen', { data })}
          >
            <Text h4 style={styles.subTitleText}>
              {data}
            </Text>
            <MaterialIcons name='navigate-next' size={26} />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ width: '10%' }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name='chevron-back' size={30} color='black' />
          </TouchableOpacity>
          <View style={{ width: '80%' }}>
            <Text h3 style={styles.headerText}>
              設定
            </Text>
          </View>
        </View>

        <FlatList
          data={settingData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </LinearGradient>
  );
};

export default SettingScreen;

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
  headerText: {
    textAlign: 'center',
    fontSize: FONTSIZE.SIZE20PX,
    fontWeight: 'bold',
  },
});
