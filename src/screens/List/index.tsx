import {
  FlatList,
  View,
  Text,
  StyleSheet
} from "react-native";
import { Header } from "../../components/Header";
import { ListItem } from "../../components/ListItem";
import { Notify } from "../../components/Notify";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/axios";
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({ id: 'quote_list' })

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
  const [refreshNotification, setRefreshNotification] = useState<string | null>(null);

  const getQuoteList = async () => {
    const response = await axios.get(`${BASE_URL}/quote/${ticketListString}`);
    const quoteList = response.data.results;
    setQuoteResponseList(quoteList);
    setRefreshNotification('A lista foi atualizada');
  };

  useEffect(() => {
    getQuoteList();
  }, []);

  useEffect(() => {
    if (refreshNotification) {
      setTimeout(() => {
        setRefreshNotification(null);
      }, 3000);
    }
  }, [refreshNotification]);

  return (
    <View>
      <Header refreshCallback={getQuoteList} />
      {refreshNotification && <Notify label={refreshNotification} duration={3000} />}
      <FlatList
        data={quoteResponseList}
        renderItem={({ item }) => <ListItem key={item?.symbol} quote={item} />}
      />
      {ticketList.length === 0 && (
        <Text style={styles.noResult}>Nenhuma ação adicionada</Text>
      )}
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
