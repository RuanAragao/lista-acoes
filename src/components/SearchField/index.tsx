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

interface SearchFieldProps {
  onSearch: (response: never[]) => void;
}

export function SearchField({onSearch}: SearchFieldProps) {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const fetchResults = debounce(() => {
      if (searchText) {
        performSearch();
      }
    }, 300);

    fetchResults();
    
    return () => {
      fetchResults.cancel();
    };
  }, [searchText]);

  const performSearch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/quote/${searchText}`);
      const results = response.data?.results || [];
      if (results.length > 0 && results[0].regularMarketTime) {
        onSearch(results);
      } else {
        onSearch([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (query: string) => {
    setSearchText(query.toUpperCase());
  };

  return (
    <View style={styles.fieldWrapper}>
      <Feather name="search" size={24} color="#858585" />
      <TextInput
        style={styles.fieldInput}
        placeholder="PESQUISE PELO ATIVO"
        autoCapitalize="characters"
        value={searchText}
        onChangeText={handleTextChange}
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
