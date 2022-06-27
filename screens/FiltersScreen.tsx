import { Button, TextInput } from 'react-native-paper';
import { Text, View, ScrollView , StyleSheet} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import { RootStackScreenProps } from '../types';

export default function Filters({ navigation }: RootStackScreenProps<'Filters'>) {
  return (
    <View style={styles.filtersView}>
      <ScrollView style={styles.scrollView}>
        <TextInput
          label="Model"
          style={styles.input}
        ></TextInput>

        <TextInput
          label="Year"
          style={styles.input}
        ></TextInput>

        <TextInput
          label="Color"
          style={styles.input}
        ></TextInput>

        <Text>Price range</Text>
        <Slider
          value={3}
          minimumValue={0}
          maximumValue={1000}
          step={10}
          trackClickable={true}
        />

        <View style={styles.rowView}>
          <Button
            mode="contained"
            onPress={() => console.log("reset pressed")}
            style={styles.ctaButton}
            contentStyle={styles.ctaButtonContent}
            labelStyle={styles.ctaButtonText}
          >
            RESET
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log('search pressed')}
            style={styles.ctaButton}
            contentStyle={styles.ctaButtonContent}
            labelStyle={styles.ctaButtonText}
          >
            SEARCH
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
