import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";

export function Add() {
  return (
    <View>
      <Header />
      <SubHeader title="Adicionar ação" />
      <Text>
        Adicionar Ação
      </Text>
    </View>
  );
}