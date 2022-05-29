import { View, Text, Image } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Image
        source={{ uri: country.flags.png }}
        style={{ with: 200, height: 200 }}
      ></Image>
      <Text>{country.name.common}</Text>
    </View>
  );
}
