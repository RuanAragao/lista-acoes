import {
  StyleSheet,
  TextInput,
  View
} from "react-native";
import { Feather } from '@expo/vector-icons';

export function SearchField() {
  return (
    <View style={styles.fieldWrapper}>
      <Feather name="search" size={24} color="#858585" />
      <TextInput
        style={styles.fieldInput}
        placeholder="PESQUISE PELO ATIVO"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldWrapper: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
    gap: 12,
    backgroundColor: "#E3E3E3",
    borderRadius: 4,
    marginHorizontal: 16,
    marginVertical: 22
  },
  fieldInput: {
    fontSize: 18
  }
});
