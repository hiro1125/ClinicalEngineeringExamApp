import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export const RootNavigatorScreen = () => {
  return (
    <LinearGradient colors={['#2d82a8', '#a7ddff']} style={styles.linearGradient}>
      <View style={styles.container}>
        <Text h3 style={styles.text}>臨床工学技士国家試験対策</Text>
        <Button
          title="スタート"
          onPress={() => console.log('Button pressed')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </LinearGradient>
  );
};

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
    fontWeight: 'bold',
    marginBottom: 100,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  buttonTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
