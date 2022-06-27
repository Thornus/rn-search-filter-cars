import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, Title, Paragraph, Subheading, ActivityIndicator } from 'react-native-paper';
import DefaultCoverImage from '../assets/images/car-placeholder.png';

export type Props = {
  results: []
};

const ResultsFlatList: React.FC<Props> = ({ results }) => {
  if(!results.length) {
    return (
      <View style={styles.notFoundView}>
        <Text style={styles.notFoundText}>We couldn't find any cars!</Text>
        <Text style={styles.notFoundText}>Try another search or tune the filters.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={results}
      renderItem={({item}) => {
        return (
          <Card style={styles.card} onPress={() => console.log('go to rent screen')}>
            <View style={{flexDirection: 'row'}}>
              <Card.Cover
                defaultSource={DefaultCoverImage}
                source={{ uri: 'https://picsum.photos/700' }}
                style={styles.coverImage}
                />
              
              <View style={styles.contentView}>
                <View style={{marginLeft: 15, marginTop: '10%'}}>
                  <Text
                    style={styles.title}
                    numberOfLines={1}
                    adjustsFontSizeToFit>{item.car + ' ' + item.car_model}</Text>
                  <Text style={styles.subtitle}>{item.car_model_year}</Text>
                  <Text style={styles.subtitle}>{item.car_color}</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Card.Content style={styles.cardContent}>
                    <Subheading style={styles.price}>{item.price}/day</Subheading>
                  </Card.Content>
                </View>
              </View>
            </View>
          </Card>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
      style={styles.flatList}
    />
  );
};

export default ResultsFlatList;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
    marginVertical: '10%',
    paddingHorizontal: '10%'
  },
  notFoundView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notFoundText: {
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 16,
    color: '#777777'
  },
  card: {
    marginVertical: '5%',
    flexDirection: 'row'
  },
  title: {
    width: '100%',
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 20,
    paddingRight: '10%'
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 16,
    color: '#bbbbbb'
  },
  price: {
    alignSelf: 'center',
    paddingVertical: '10%',
    fontWeight: 'bold',
    color: '#4287f5'
  },
  coverImage: {
    flex: 0.40,
    height: 'auto'
  },
  contentView: {
    flex: 0.60
  }
});