import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string
}

export function SubHeader({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => goBack()}
      >
        <Feather name="chevron-left" size={32} color="#002E58" />
      </TouchableOpacity>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 10,
    paddingEnd: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#2DBBF9",
    gap: 12
  },
  title: {
    color: "#002E58",
    fontSize: 32
  }
});