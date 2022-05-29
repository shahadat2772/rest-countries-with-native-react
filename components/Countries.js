import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setCountries(data);
      });
  }, []);

  const handleSearch = (t) => {
    console.log();
    const searchedCountries = countries.filter((country) =>
      country.name.common.includes(t)
    );
    setResults(searchedCountries);
  };

  return (
    <View>
      <Text style={styles.headers}>Countries {results.length}</Text>
      <TextInput
        onChangeText={(t) => handleSearch(t)}
        style={styles.input}
      ></TextInput>
      <ScrollView>
        {results.map((country) => (
          <Country country={country}></Country>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headers: {
    marginTop: 50,
    fontSize: 40,
    color: "red",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
