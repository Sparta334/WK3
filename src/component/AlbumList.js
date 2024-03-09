import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Detail from "./Detail";
import sections from "../json/books.json";

const AlbumList = ({ navigation }) => {

  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>
        {sections[0].title}
      </Text>
      <FlatList
        horizontal={true}
        data={sections[0].data}
        renderItem={({item}) => <Detail album={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
        keyExtractor={item => item.title}
      />
      <Text style={styles.sectionHeader}>
        {sections[1].title}
      </Text>
      <FlatList
        horizontal={true}
        data={sections[1].data}
        renderItem={({item}) => <Detail album={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
        keyExtractor={item => item.title}
      />
    </View>
  );  
};

const styles = StyleSheet.create({
  section: {
    marginLeft: 20,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 8
  }
})

export default AlbumList;
