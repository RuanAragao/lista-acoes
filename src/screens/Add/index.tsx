import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { SearchField } from "../../components/SearchField";

export function Add() {
  return (
    <View>
      <Header />
      <SubHeader title="Adicionar ação" />
      <SearchField />
      <Text>
        Adicionar Ação
      </Text>
    </View>
  );
}