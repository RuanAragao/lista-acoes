import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { ListItem } from "../../components/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/axios";

export function List() {
  const ticketList = [
    "PETR4",
    "VALE3",
    "ITUB4",
    "BBDC4",
    "ABEV3",
    "BBAS3",
    "PETR3",
    "B3SA3",
    "BDIV11",
  ];
  const ticketListString = ticketList.join("%2C");
  const [quoteResponseList, setQuoteResponseList] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/quote/${ticketListString}`)
      .then((result) => {
        if (!result["error"]) setQuoteResponseList(result.data.results);
      })
  }, []);

  return (
    <View>
      <Header />
      <FlatList
        data={quoteResponseList}
        renderItem={({ item }) => <ListItem key={item?.symbol} quote={item} />}
      />
    </View>
  );
}
