import { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet
} from "react-native";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { SearchField } from "../../components/SearchField";
import { AddItem } from "../../components/AddItem";

type ItemProps = {
  length: number;
  item: {
    symbol: string,
    shortName: string
  }
}

export function Add() {
  const [resultList, setResultList] = useState<ItemProps>([]);

  const handleSearch = (response: ItemProps[]): void => {
    setResultList(response);
  };

  const renderResult = resultList.length === 0 ? (
    <Text style={styles.noResult}>Nenhum resultado encontrado</Text>
  ) : null;

  return (
    <View>
      <Header />
      <SubHeader title="Adicionar ação" />
      <SearchField onSearch={handleSearch} />
      <FlatList
        data={resultList}
        renderItem={({item}: ItemProps) => <AddItem symbol={item?.symbol} shortName={item?.shortName} />}
      />
      {renderResult}
    </View>
  );
}

const styles = StyleSheet.create({
  noResult: {
    marginHorizontal: 16,
    fontSize: 18,
    color: "#858585"
  }
});
