import { View, StyleSheet, Platform } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Props, ScreenProps } from '../../types/type';

const AppScreen = ({ title, buttons, navigation }: ScreenProps & Props) => {
  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text h3 style={styles.text}>
          {title}
        </Text>
        {buttons.map((item, key) => (
          <Button
            key={key}
            title={item.title}
            onPress={() => {
              if (item.title === '戻る') {
                navigation.goBack();
              } else {
                navigation.navigate(item.navigationName);
              }
            }}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 35,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    width: Platform.OS === 'ios' ? '100%' : '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  buttonTitle: {
    width: Platform.OS === 'ios' ? '60%' : '100%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
