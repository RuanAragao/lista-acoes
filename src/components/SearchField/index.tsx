import {
  StyleSheet,
  TextInput,
  View
} from "react-native";
import { Feather } from '@expo/vector-icons';
import axios from "axios";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { BASE_URL } from '../../config/axios';

export function SearchField({onSearch}: {onSearch: Function}) {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const fetch = debounce(() => {
      axios.get(`${BASE_URL}/quote/${searchText}`)
        .then((result) => {
          if (!result["error"]) onSearch(result.data.results);
        }).catch((err) => {
          console.log(err);
        });
    }, 300);
    fetch();
    return () => { fetch.cancel() }
  }, [searchText]);

  return (
    <View style={styles.fieldWrapper}>
      <Feather name="search" size={24} color="#858585" />
      <TextInput
        style={styles.fieldInput}
        placeholder="PESQUISE PELO ATIVO"
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType={"visible-password"}
        value={searchText}
        onChangeText={ query => setSearchText(query?.toUpperCase())}
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
