import { useCallback } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import db from "../db";

const ListItem = ({ isCompleted = false, content, targetId }) => {
  const checkHendler = useCallback((prev) => {
    // db의 해당 id에 데이터 중, isCompleted를 prev의 반대값으로 바꿔주세요

    // 유의 데이터 중 하나를 뽑았다.
    const targetData = db.filter((item) => item.id === targetId);

    // 뽑은 데이터를 targetData에 저장한다.

    //db라는 데이터는 배열이고, 5개의 데이터가 있다.
    //targetData란 데이터는 배열이고, 1개의 데이터가 있다.

    targetData[0].isCompleted = !prev;

    // targetData의 isCompleted 값을 수정했다.
    console.log(targetData[0]);
  });

  return (
    <View style={styles.ItemContainer}>
      <Text
        style={[styles.commonTxt, isCompleted ? styles.completedTxt : null]}
      >
        {String(content).length > 18 ? substring(0, 17) + "..." : content}
      </Text>

      <View style={styles.ItemContainer}>
        {isCompleted ? null : (
          <>
            <Pressable style={styles.checkButton}>
              <Text
                style={[styles.commonTxt, styles.checkText]}
                onPress={() => checkHendler(isCompleted)}
              >
                Check
              </Text>
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
    color: "#888",
  },

  commonTxt: {
    fontSize: 16,
  },

  checkButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#c7e7d0",
    borderRadius: 5,
    marginRight: 5,
  },

  removeButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#e5f3da",
    borderRadius: 5,
  },

  checkText: {
    color: "#fff",
    fontWeight: "700",
  },
});
