import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

interface Quote {
  shortName: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: string;
  regularMarketPrice: number;
  symbol: string;
}

export function ListItem({ quote }: { quote: Quote }) {

  function formatTime(isoDate: string): string {
    const date = new Date(isoDate);

    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  const regularMarketTime = formatTime(quote.regularMarketTime);

  const regularChangesRender = () => {
    if (quote.regularMarketChange < 0) {
      return (
        <Text style={styles.itemChangesNegative}>
          {quote.regularMarketChange.toFixed(2)} ({quote.regularMarketChangePercent.toFixed(2)}%)
        </Text>
      )
    }

    return (
      <Text style={styles.itemChanges}>
        {quote.regularMarketChange.toFixed(2)} ({quote.regularMarketChangePercent.toFixed(2)})
      </Text>
    )
  }

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemFirstLine}>
        <Text style={styles.itemName}>{quote.shortName}</Text>
        <Text style={styles.itemValue}>{quote.regularMarketPrice}</Text>
      </View>
      <View style={styles.itemSecondLine}>
        <View style={styles.itemTimeWrapper}>
          <Feather name="clock" size={16} color="#002E58" />
          <Text style={styles.itemTime}>{regularMarketTime}</Text>
        </View>
        { regularChangesRender() }
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
    color: "#19B200"
  },
  itemChangesNegative: {
    fontSize: 18,
    color: "#B20000"
  }
});