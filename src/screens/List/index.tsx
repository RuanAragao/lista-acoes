import {
  FlatList,
  View,
  Text,
  StyleSheet
} from "react-native";
import { Header } from "../../components/Header";
import { ListItem } from "../../components/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/axios";
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export function List() {
  // const ticketList = [
  //   "PETR4",
  //   "VALE3",
  //   "ITUB4",
  //   "BBDC4",
  //   "ABEV3",
  //   "BBAS3",
  //   "PETR3",
  //   "B3SA3",
  //   "BDIV11",
  // ];
  const ticketList = JSON.parse(storage.getString('list') || '[]');
  const ticketListString = ticketList.join("%2C");
  const [quoteResponseList, setQuoteResponseList] = useState<string[]>([]);

  const blankQuoteListMessage = ticketList.length === 0 
    ? (<Text style={styles.noResult}>Nenhuma ação adicionada</Text>) 
    : null;

  useEffect(() => {
    axios.get(`${BASE_URL}/quote/${ticketListString}`)
      .then((result) => {
        if (result && !result?.error) setQuoteResponseList(result.data.results);
      })
  }, []);

  return (
    <View>
      <Header />
      <FlatList
        data={quoteResponseList}
        renderItem={({ item }) => <ListItem key={item?.symbol} quote={item} />}
      />
      {blankQuoteListMessage}
    </View>
  );
}

const styles = StyleSheet.create({
  noResult: {
    marginHorizontal: 16,
    marginTop: 16,
    fontSize: 18,
    color: "#858585"
  }
});
