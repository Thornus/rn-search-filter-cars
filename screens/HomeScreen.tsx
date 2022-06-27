import { useState, useEffect, SetStateAction } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import GradientWrapper from '../components/GradientWrapper';
import LastRentedView from '../components/LastRentedView';
import ResultsFlatList from '../components/ResultsFlatList';
import SearchbarWithFilters from '../components/SearchbarWithFilters';

const HomeScreen: React.FC = ({ route, navigation }) =>  {
  const [cars, setCars] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [shouldShowResults, setShouldShowResults] = useState(false);

  useEffect(() => {
    getAllCars();
  }, []);

  useEffect(() => {
    if(shouldShowResults) {
      onSearch(searchText);
    }
  }, [route]);

  const getAllCars = async () => {
    try {
      const response = await fetch('https://myfakeapi.com/api/cars/');
      const json = await response.json();

      if(json.cars) {
        setCars(json.cars);
      } else {
        console.warn('Warning: API did not return cars.')
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSearch = (query: SetStateAction<string>) => {
    setSearchText(query);

    if(!query && shouldShowResults) {
      setShouldShowResults(false);
    } else if(!shouldShowResults) {
      setShouldShowResults(true);
    }

    const { priceMin, priceMax, model, year, color } = route.params;

    let filteredCars = cars.filter(obj => obj.car.startsWith(query));
    filteredCars = filteredCars.filter(obj => {
      const carPrice = Number(obj.price.replace(/[^0-9.-]+/g,""));
      return carPrice > priceMin && carPrice < priceMax;
    });
    
    if(model) {
      filteredCars = filteredCars.filter(obj => obj.car_model.toLowerCase().startsWith(model.toLowerCase()))
    }

    if(year) {
      filteredCars = filteredCars.filter(obj => obj.car_model_year == year)
    }

    if(color) {
      filteredCars = filteredCars.filter(obj => obj.car_color.toLowerCase() === color.toLowerCase())
    }
    
    setSearchResults(filteredCars);
  };

  return (
    <GradientWrapper>
      <SearchbarWithFilters
        changeTextHandler={onSearch}
        searchText={searchText}
        navigateTo={(screenName: string) => navigation.navigate(screenName, route.params)}
      />

      {!shouldShowResults && <LastRentedView/>}
      {shouldShowResults && <ResultsFlatList results={searchResults}/>}

    </GradientWrapper>
  );
}

export default HomeScreen;