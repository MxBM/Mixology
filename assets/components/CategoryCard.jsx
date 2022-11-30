import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFontLoader } from '../../hooks/useFonts';
import colors from '../theme/colors';
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  seeAllStyle: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: colors.gray,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 9,
    height: HEIGHT * 0.16,
    borderColor: colors.black,
    borderWidth: 1.8,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'MontserratBold',
    fontSize: 14,
    marginTop: 10,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },

  categorySelectIcon: {
    alignSelf: 'center',
  },
});

const categoriesData = [
  //TODO: Remove with queried categories (local)
  {
    id: '1',
    image: require('../images/drinkIcons/wine.png'),
    title: 'Wine',
    selected: true,
  },
  {
    id: '2',
    image: require('../images/drinkIcons/brandy.png'),
    title: 'Brandy',
    selected: false,
  },
  {
    id: '3',
    image: require('../images/drinkIcons/gin.png'),
    title: 'Gin ',
    selected: false,
  },
  {
    id: '4',
    image: require('../images/drinkIcons/beer.png'),
    title: 'Beer',
    selected: false,
  },
  {
    id: '5',
    image: require('../images/drinkIcons/martini.png'),
    title: 'Martini',
    selected: false,
  },
  {
    id: '6',
    image: require('../images/drinkIcons/tequilla.png'),
    title: 'Tequila',
    selected: false,
  },
];

export default function CategoryCard() {
  const fontsLoaded = useFontLoader();
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <></>;
  }

  function renderCategoryItem({ item }) {
    const lowerCaseTitle = item.title.toLowerCase();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Category', { category: lowerCaseTitle })}
      >
        <View style={{ height: HEIGHT * 0.19 }}>
          <View
            style={[
              styles.categoryItemWrapper,
              {
                marginLeft: item.id == 1 ? 20 : 0,
              },
            ]}
          >
            <Image source={item.image} style={styles.categoryItemImage} />
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.categoriesWrapper}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllStyle}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
}
