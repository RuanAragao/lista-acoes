import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Lock() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Feather name="lock" size={192} color="#002E58" />
      <TouchableOpacity
        style={styles.unlockButton}
        activeOpacity={0.7}
        onPress={() => navigate('List')}
      >
        <Text style={styles.unlockButtonTitle}>Desbloquear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32
  },
  unlockButton: {
    padding: 10,
    paddingStart: 24,
    paddingEnd: 24,
    backgroundColor: "#2DBBF9",
    borderRadius: 4
  },
  unlockButtonTitle: {
    fontSize: 36,
    color: "#FFFFFF"
  }
});