import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent
} from 'react-native'
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { storage } from '../../config/storage';

type AddItemProps = {
  symbol: string,
  shortName?: string,
  type?: string,
  callback?: () => void
}

function addItemToStorage (symbol: string): void {
  storage.set('list', JSON.stringify([
    ...JSON.parse(storage.getString('list') || '[]'),
    symbol
  ]));
}

function removeItemFromStorage (symbol: string): void {
  const list = JSON.parse(storage.getString('list') || '[]');
  const newList = list.filter((item: string) => item !== symbol);
  storage.set('list', JSON.stringify(newList));
}

export function ActionItem({ symbol, shortName = '', type = 'add', callback }: AddItemProps) {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAddItem = (event: GestureResponderEvent): void => {
    removeItemFromStorage(symbol);
    setFeedback(`Removed from your list`);
    callback && callback();
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
        {!feedback && <Feather name={ type === "remove" ? "trash" : "add" } size={24} color="#002E58" />}
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
