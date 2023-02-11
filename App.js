import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListItem from "./src/components/ListItem";
import db from "./src/db";

const containerShadowOption = {
  shadowColor: "#000",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3,
  elevation: 2,

  borderBottomColor: "#d7d7d7",
  borderBottomWidth: 0.3,
};

const RenderItem = ({}) => {
  return <ListItem />;
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
          <Ionicons name="book-outline" size={24} color="#b1d690" />
          <Text style={styles.subTitileBoxText}>TodoList</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {db
            .filter((v) => v.isCompleted === false)
            .map((item) => {
              return (
                <ListItem
                  key={item.id}
                  content={item.content}
                  targetId={item.id}
                />
              );
            })}
        </ScrollView>
      </View>

      {/* Completed Area */}
      <View style={styles.completedListcontainer}>
        <View style={styles.subTitileBox}>
          <Ionicons name="book-sharp" size={24} color="#c8e5af" />
          <Text style={styles.subTitileBoxText}>CompletedList</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {db
            .filter((v) => v.isCompleted === true)
            .map((item) => {
              return (
                <ListItem
                  key={item.id}
                  isCompleted={true}
                  content={item.content}
                />
              );
            })}
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
    fontSize: 19,
    marginLeft: 5,
    color: "#ffd9a2",
    fontWeight: "700",
  },

  scrollView: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ecf0f1",
  },
});
