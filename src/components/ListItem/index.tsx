import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

export function ListItem() {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemFirstLine}>
        <Text style={styles.itemName}>PETROBRAS PN N2</Text>
        <Text style={styles.itemValue}>30.53</Text>
      </View>
      <View style={styles.itemSecondLine}>
        <View style={styles.itemTimeWrapper}>
          <Feather name="clock" size={16} color="#002E58" />
          <Text style={styles.itemTime}>19:45:00</Text>
        </View>
        <Text style={styles.itemChanges}>
          -0.07 (-0.23%)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
    backgroundColor: "#ECECEC",
    borderBottomColor: "#C8C8C8",
    borderBottomWidth: 0,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 16,
    gap: 4
  },
  itemFirstLine: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#002E58"
  },
  itemValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#002E58"
  },
  itemSecondLine: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemTimeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  itemTime: {
    fontSize: 16,
    color: "#002E58"
  },
  itemChanges: {
    fontSize: 18,
    color: "#002E58"
  }
});