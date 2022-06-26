import React from "react";
import { View, StyleSheet} from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';

export type Props = {
  changeTextHandler: () => {};
  navigateTo: (screenName: string) => {};
  searchText: string;
};

const SearchbarWithFilters: React.FC<Props> = ({changeTextHandler, navigateTo, searchText }) => {
  return (
    <View style={styles.searchBarView}>
      <Searchbar
        placeholder="Search"
        onChangeText={changeTextHandler}
        value={searchText}
        clearIcon=''
        style={styles.searchBar}
      >
      </Searchbar>

      <IconButton
        color='gray'
        style={styles.filtersIconButton}
        icon='tune'
        onPress={() => navigateTo('Filters')}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
    width: '100%',
    marginTop: '10%',
  },
  searchBar: {
    marginHorizontal: '10%',
  },
  filtersIconButton: {
    position: 'absolute',
    right: '10%'
  }
});

export default SearchbarWithFilters;