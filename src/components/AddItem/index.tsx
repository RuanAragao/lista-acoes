import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons';

type ActiveProps = {
  symbol: string,
  shortName: string
}

export function AddItem({ symbol, shortName }: ActiveProps) {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemNames}>
        <Text style={styles.itemSymbol}>{symbol}</Text>
        <Text style={styles.itemShortName}>{shortName}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
      >
        <Feather name="plus" size={24} color="#002E58" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    borderBottomColor: "#CEE8FF",
    borderBottomWidth: 1,
    paddingVertical: 12
  },
  itemNames: {
    flexDirection: "row",
    gap: 8
  },
  itemSymbol: {
    fontSize: 18,
    color: "#002E58",
    fontWeight: "600"
  },
  itemShortName: {
    fontSize: 18,
    color: "#002E58"
  }
});
