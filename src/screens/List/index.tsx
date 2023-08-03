import { View } from "react-native";
import { Header } from "../../components/Header";
import { ListItem } from "../../components/ListItem";

export function List() {
  return (
    <View>
      <Header />
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  );
}
