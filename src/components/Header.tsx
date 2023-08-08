import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { FONTSIZE, SIZE } from '../styles';
import { Props } from '../../types/type';

type HeaderProps = {
  title: string;
};

const Header: FC<Props & HeaderProps> = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{ width: '10%' }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='chevron-back' size={30} color='black' />
      </TouchableOpacity>
      <View style={{ width: '80%' }}>
        <Text h3 style={styles.headerText}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  header: {
    height: SIZE.BASIC_HIGHT * 12,
    paddingHorizontal: SIZE.BASIC_WIDTH * 5,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    textAlign: 'center',
    fontSize: FONTSIZE.SIZE20PX,
    fontWeight: 'bold',
  },
});
