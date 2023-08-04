import { useState } from "react";
import {
  View,
  FlatList
} from "react-native";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { SearchField } from "../../components/SearchField";
import { AddItem } from "../../components/AddItem";

type ItemProps = {
  item: {
    symbol: string,
    shortName: string
  }
}

export function Add() {
  const [resultList, setResultList] = useState([]);

  function handleSearch(response: Array<String>) {
    setResultList(response);
  }

  return (
    <View>
      <Header />
      <SubHeader title="Adicionar ação" />
      <SearchField onSearch={handleSearch} />
      <FlatList
        data={resultList}
        renderItem={({item}: ItemProps) => <AddItem symbol={item?.symbol} shortName={item?.shortName} />}
      />
    </View>
  );
}