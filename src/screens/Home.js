import React from "react";
import { View } from "react-native";
import AlbumList from "../component/AlbumList";

const HomeScreen = ({ navigation }) => {
  return (
    <View >
      <AlbumList 
        navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;