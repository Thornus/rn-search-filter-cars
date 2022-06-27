import { useState, useEffect, SetStateAction } from 'react';
import GradientWrapper from '../components/GradientWrapper';
import LastRentedView from '../components/LastRentedView';
import ResultsFlatList from '../components/ResultsFlatList';
import SearchbarWithFilters from '../components/SearchbarWithFilters';

const HomeScreen: React.FC = ({ navigation }) =>  {
  const [searchText, setSearchText] = useState('');
  const [cars, setCars] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [shouldShowResults, setShouldShowResults] = useState(false);

  useEffect(() => {
    getAllCars();
  }, []);

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

    const filteredCars = cars.filter(obj => obj.car.startsWith(query))
    setSearchResults(filteredCars);
  };

  return (
    <GradientWrapper>
      <SearchbarWithFilters
        changeTextHandler={onSearch}
        searchText={searchText}
        navigateTo={(screenName: string) => navigation.navigate(screenName)}
      />

      {!shouldShowResults && <LastRentedView/>}
      {shouldShowResults && <ResultsFlatList results={searchResults}/>}

    </GradientWrapper>
  );
}

export default HomeScreen;