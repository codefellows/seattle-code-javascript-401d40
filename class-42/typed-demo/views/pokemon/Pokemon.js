import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from 'react-router-native';

export default function Pokemon() {

  let [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let data = await response.json();
    setPokemon(data.results);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <View>
      <Text>Pokemon View!</Text>
      <Link to="/">
        {/* <Button title="Go Home" /> */}
        <Text>Go Home</Text>
      </Link>
      <FlatList
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  )
}
