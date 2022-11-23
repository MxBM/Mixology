import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import DrinkCard from '../components/DrinkCard';
import SimpleDrinkCard from '../components/SimpleDrinkCard';
import { db } from '../../client/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function DrinkScreen({ route }) {
  //const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const { category } = route.params;

  const getDrinks = async () => {
    const queryDrink = query(collection(db, 'drinks'), where('category ', '==', category));
    const querySnapShot = await getDocs(queryDrink);
    querySnapShot.forEach((doc) => {
      setDrinks(doc.data());
    });
  };

  useEffect(() => {
    getDrinks();
    console.log(drinks);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={drinks}
        renderItem={({ item }) => <SimpleDrinkCard food={item} />}
      />
    </SafeAreaView>
  );
}
