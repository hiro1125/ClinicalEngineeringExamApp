import {
  View,
  StyleSheet,
  Platform,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Props, RouteButton, ScreenProps } from '../../types/type';
import { RETURN_BUTTON_TEXT } from '../contents';
import { FC } from 'react';
import { useRootDispatch } from '../redux/store/store';
import { setQuizDate } from '../redux/slices/quizSlice';

const AppScreen: FC<ScreenProps & Props> = ({
  navigation,
  textStyle,
  title,
  buttonData,
}) => {
  const renderItem: ListRenderItem<RouteButton> = ({ item, index }) => {
    const dispatch = useRootDispatch();
    return (
      <Button
        key={index}
        title={item.title}
        onPress={() => {
          if (item.title === RETURN_BUTTON_TEXT) {
            navigation.goBack();
          } else if (item.navigationName === 'IntroductionToMedicineTest') {
            dispatch(setQuizDate(item.quizData));
          } else {
            navigation.navigate(item.navigationName);
          }
        }}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    );
  };

  return (
    <View style={styles.container}>
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
    </View>
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
    width: Platform.OS === 'ios' ? '100%' : '95%',
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
    width: Platform.OS === 'ios' ? '70%' : '100%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
