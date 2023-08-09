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
        <Feather name="chevron-left" size={24} color="#CEE8FF" />
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
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#0056A6",
    gap: 12
  },
  title: {
    color: "#CEE8FF",
    fontSize: 22
  }
});