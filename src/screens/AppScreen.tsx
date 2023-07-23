import {
  StyleSheet,
  FlatList,
  ListRenderItem,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Props, RouteButton, ScreenProps } from '../../types/type';
import { RETURN_BUTTON_TEXT } from '../contents';
import { FC } from 'react';
import { useRootDispatch } from '../redux/store/store';
import { setQuizDate } from '../redux/slices/quizSlice';
import { FONTSIZE, SIZE } from '../styles';
import { FontAwesome } from '@expo/vector-icons';

const AppScreen: FC<ScreenProps & Props> = ({
  navigation,
  textStyle,
  title,
  buttonData,
}) => {
  const dispatch = useRootDispatch();

  const handleGearIconPress = () => {
    navigation.navigate('SettingScreen');
  };

  const onButtonPress = (item: RouteButton) => {
    if (item.title === RETURN_BUTTON_TEXT) {
      navigation.goBack();
    } else if (item.quizData?.length) {
      dispatch(setQuizDate(item.quizData));
      navigation.navigate(item.navigationName);
    } else if (Array.isArray(item.quizData)) {
      Alert.alert('確認', '近日公開予定です', [
        {
          text: 'OK',
        },
      ]);
    } else {
      navigation.navigate(item.navigationName);
    }
  };

  const renderItem: ListRenderItem<RouteButton> = ({ item, index }) => {
    return (
      <Button
        key={index}
        title={item.title}
        onPress={() => onButtonPress(item)}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h3 style={[styles.text, textStyle]}>
        {title}
      </Text>
      <FlatList
        data={buttonData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={buttonData.length > 3}
      />
      <TouchableOpacity style={styles.gearButton} onPress={handleGearIconPress}>
        <FontAwesome name='gear' size={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 50,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    width: SIZE.BASIC_WIDTH * 90,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 20,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonTitle: {
    width: SIZE.BASIC_WIDTH * 70,
    color: 'black',
    fontWeight: 'bold',
    fontSize: FONTSIZE.SIZE18PX,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  gearButton: {
    position: 'absolute',
    top: SIZE.BASIC_HIGHT * 6,
    right: SIZE.BASIC_WIDTH * 2,
  },
});
