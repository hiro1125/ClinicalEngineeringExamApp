import { View, StyleSheet, Platform, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Props, ScreenProps } from '../../types/type';

const AppScreen = ({
  title,
  buttons,
  navigation,
  style,
}: ScreenProps & Props) => {
  type Button = {
    title: string;
    navigationName:
      | 'Home'
      | 'ExamMenu'
      | 'ByField'
      | 'NinetyQuestionTest'
      | 'IntroductionToMedicine'
      | 'ClinicalMedicineOverview'
      | 'BiomedicalMeasurementInstrumentation'
      | 'MedicalTherapeuticEquipment'
      | 'MedDevSafety'
      | 'MedicalElectricalAndElectronicEngineering'
      | 'BiologicalFunctionSubstitutionEquipment'
      | 'MedicalMechanicalEngineering'
      | 'BiologicalMaterialScienceAndEngineering';
  };

  type RenderItemProps = {
    item: Button;
    index: number;
  };

  const renderItem = ({ item, index }: RenderItemProps) => {
    return (
      <Button
        key={index}
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
    );
  };

  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text h3 style={[styles.text, style]}>
          {title}
        </Text>
        <FlatList
          data={buttons}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
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
    marginTop: 50,
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
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonTitle: {
    width: Platform.OS === 'ios' ? '70%' : '100%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
