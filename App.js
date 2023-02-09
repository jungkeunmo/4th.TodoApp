import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListItem from "./src/components/ListItem";

const containerShadowOption = {
  shadowColor: "#000",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3,
  elevation: 5,

  borderBottomColor: "#d7d7d7",
  borderBottomWidth: 0.3,
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Title Area */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Unknow App Name</Text>
      </View>

      {/* Todo List Area */}
      <View style={styles.todoListContainer}>
        <View style={styles.subTitileBox}>
          <Ionicons name="book-outline" size={24} color="black" />
        </View>

        <ScrollView style={styles.scrollView}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ScrollView>
      </View>

      {/* Completed Area */}
      <View style={styles.completedListcontainer}>
        <View style={styles.subTitileBox}>
          <Ionicons name="book-sharp" size={24} color="black" />
        </View>

        <ScrollView style={styles.scrollView}>
          <ListItem isCompleted={true} />
          <ListItem isCompleted={true} />
          <ListItem isCompleted={true} />
          <ListItem isCompleted={true} />
        </ScrollView>
      </View>

      {/* Create Area */}
      <View style={styles.createcontainer}></View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Title
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ...containerShadowOption,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "700",
  },

  // TodoList
  todoListContainer: {
    flex: 4,
    padding: 5,
    ...containerShadowOption,
  },

  // CompletedList
  completedListcontainer: {
    flex: 4,
    padding: 5,
    ...containerShadowOption,
  },

  // Create
  createcontainer: {
    flex: 1,
  },

  subTitileBox: {
    marginBottom: 5,
    flexDirection: "row",
  },

  subTitileBoxText: {
    fontSize: 18,
    marginLeft: 5,
  },

  scrollView: {
    padding: 10,
    borderRadius: 10,
  },
});
