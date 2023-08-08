import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent
} from 'react-native'
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({ id: 'quote_list'})

type AddItemProps = {
  symbol: string,
  shortName: string
}

function addItemToStorage (symbol: string): void {
  storage.set('list', JSON.stringify([
    ...JSON.parse(storage.getString('list') || '[]'),
    symbol
  ]));
}

export function AddItem({ symbol, shortName }: AddItemProps) {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAddItem = (event: GestureResponderEvent): void => {
    addItemToStorage(symbol);
    setFeedback(`Added to your list`);
    setTimeout(() => {
      setFeedback(null);
    }, 3000);
  }

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemNames}>
        <Text style={styles.itemSymbol}>{symbol}</Text>
        <Text style={styles.itemShortName}>{shortName}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleAddItem}
      >
        {!feedback && <Feather name="plus" size={24} color="#002E58" />}
        {feedback && <Feather name="check" size={24} color="green" />}
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
  },
  feedback: {
    fontSize: 14,
    color: 'green',
    marginTop: 4,
  },
});
