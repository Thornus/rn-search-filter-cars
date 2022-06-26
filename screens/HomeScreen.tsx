import { View, StyleSheet, Text, Image } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import GradientWrapper from '../components/GradientWrapper';

const HomeScreen: React.FC = ({ navigation }) =>  {
  return (
    <GradientWrapper>
      <Searchbar
        placeholder="Search"
        onChangeText={() => {}}
        value={''}
        style={styles.searchBar}
        clearIcon='car-key'
      />

      <View style={styles.lastRentedView}>
        <Text style={styles.title}>
          YOU LAST RENTED
        </Text>

        <Text style={styles.title}>
          Tesla Model Y
        </Text>

        <Image
          style={styles.lastRentedImage}
          source={require('../assets/images/tesla-model-y.png')}
        />

        <Text style={styles.title}>
          $150/day
        </Text>

        <Text style={styles.subtitle}>
          June 24, 2022 - June 25, 2022
        </Text>

        <Button
          icon="car-key"
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.ctaButton}
          contentStyle={styles.ctaButtonContent}
          labelStyle={styles.ctaButtonText}
        >
          RENT AGAIN
        </Button>
      </View>
    </GradientWrapper>
  );
}

const styles = StyleSheet.create({
  gradientWrapper: {
    flex: 1
  },
  searchBar: {
    marginTop: '10%',
    marginHorizontal: '10%'
  },
  lastRentedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  lastRentedImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '25%',
    marginVertical: '10%'
  },
  title: {
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 32
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 24
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

export default HomeScreen;