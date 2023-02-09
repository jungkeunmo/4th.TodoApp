import { StyleSheet, Text, View, Pressable } from "react-native";

const ListItem = ({ isCompleted }) => {
  return (
    <View style={styles.ItemContainer}>
      <Text style={[styles.commonTxt]}>ListItem</Text>

      <View style={styles.ItemContainer}>
        {isCompleted ? null : (
          <>
            <Pressable style={styles.checkButton}>
              <Text style={[styles.commonTxt, styles.checkText]}>Check</Text>
            </Pressable>

            <Pressable style={styles.removeButton}>
              <Text style={[styles.commonTxt, styles.checkText]}>X</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  ItemContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#fff",
    borderBottomWidth: 0.3,
  },

  completedTxt: {
    color: "#999",
  },

  commonTxt: {
    fontSize: 16,
  },

  checkButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#999",
    borderRadius: 5,
    marginRight: 5,
  },

  removeButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#999",
    borderRadius: 5,
  },

  checkText: {
    color: "#fff",
    fontWeight: "700",
  },
});
