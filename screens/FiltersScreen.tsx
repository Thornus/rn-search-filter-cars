import { Button, TextInput, Subheading } from 'react-native-paper';
import { Text, View, ScrollView , StyleSheet} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import { RootStackParamList, RootStackScreenProps } from '../types';
import { useState } from 'react';

export default function Filters({ route, navigation }: RootStackScreenProps<'Filters'>) {
  const [model, setModel] = useState(route.params?.model);
  const [year, setYear] = useState(route.params?.year);
  const [color, setColor] = useState(route.params?.color);
  const [priceMin, setPriceMin] = useState(route.params?.priceMin);
  const [priceMax, setPriceMax] = useState(route.params?.priceMax);

  const onSearch = () => {
    const params: RootStackParamList = {
      model,
      year,
      color,
      priceMin,
      priceMax,
      shouldShowResultsParam: true
    }

    navigation.navigate('Home', params);
  }

  const resetValues = () => {
    setModel('');
    setYear(null);
    setColor('');
    setPriceMin(0);
    setPriceMax(9999);
  };

  return (
    <View style={styles.filtersView}>
      <ScrollView style={styles.scrollView}>
        <TextInput
          label="Model"
          value={model}
          onChangeText={(val) => setModel(val)}
          style={styles.input}
        ></TextInput>

        <TextInput
          label="Year"
          value={year}
          onChangeText={(val) => setYear(val)}
          style={styles.input}
        ></TextInput>

        <TextInput
          label="Color"
          value={color}
          onChangeText={(val) => setColor(val)}
          style={styles.input}
        ></TextInput>

        <Subheading style={{marginTop: '10%'}}>Price range</Subheading>
        <Slider
          value={[priceMin, priceMax]}
          animateTransitions
          maximumTrackTintColor="#d3d3d3"
          maximumValue={9999}
          minimumTrackTintColor="rgba(144, 95, 250, 1)"
          minimumValue={0}
          step={10}
          thumbTintColor="rgba(144, 95, 250, 1)"
          onValueChange={(valArr: number | number[]) => {
            setPriceMin(valArr[0]);
            setPriceMax(valArr[1]);
          }}
        />
        <Text style={{fontSize: 20, alignSelf: 'center'}}>${priceMin} - ${priceMax}</Text>

        <View style={styles.rowView}>
          <Button
            mode="contained"
            onPress={resetValues}
            style={styles.ctaButton}
            contentStyle={styles.ctaButtonContent}
            labelStyle={styles.ctaButtonText}
          >
            RESET
          </Button>

          <Button
            mode="contained"
            onPress={onSearch}
            style={styles.ctaButton}
            contentStyle={styles.ctaButtonContent}
            labelStyle={styles.ctaButtonText}
          >
            SET FILTERS
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 0.1,
    width: '100%',
    marginVertical: '5%'
  },
  filtersView: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: '10%'
  },
  rowView: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  
  ctaButton: {
    marginTop: 50,
    backgroundColor: 'rgba(144, 95, 250, 1)'
  },
  ctaButtonContent: {
    height: 50
  },
  ctaButtonText: {
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 18
  }
});
