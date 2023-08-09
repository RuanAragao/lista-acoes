import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Alert
} from "react-native";
import { Header } from "../../components/Header";
import { ListItem } from "../../components/ListItem";
import { Notify } from "../../components/Notify";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/axios";
import { storage } from '../../config/storage';

export function List() {
  const [quoteResponseList, setQuoteResponseList] = useState<string[]>([]);
  const [refreshNotification, setRefreshNotification] = useState<string | null>(null);

  const [ticketList, setTicketList] = useState<string[]>([]);

  const getTicketList = (callback?: () => any): void => {
    const list = JSON.parse(storage.getString('list') || '[]');
    setTicketList(list);
    callback && callback();
  }

  const getQuoteList = async () => {
    getTicketList(() => {
      const ticketListString = ticketList.join("%2C");
      axios.get(`${BASE_URL}/quote/${ticketListString}`)
        .then(response => {
          const quoteList = response.data.results;
          setQuoteResponseList(quoteList);
          setRefreshNotification('A lista foi atualizada');
        })
        .catch(error => {
          Alert.alert('Erro', 'Não foi possível carregar a lista de ações');
        });
    });

    console.log(ticketList);
  };
  

  useEffect(() => {
    getQuoteList();
  }, []);

  useEffect(() => {
    if (refreshNotification) {
      const timeout = setTimeout(() => {
        setRefreshNotification(null);
      }, 3000);

      return () => clearTimeout(timeout);
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
