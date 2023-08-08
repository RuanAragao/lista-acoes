import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';

export function Lock() {
  const { navigate } = useNavigation();

  async function verifyAvailableAuthentication() {
    const isAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isAvailable) return false;

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) return false;

    return true;
  }

  async function handleAuthentication() {
    if (!verifyAvailableAuthentication()) {
      return Alert.alert("Autenticação", "Não foi possível autenticar");
    }

    const auth = await LocalAuthentication.authenticateAsync();
    if (auth.success) navigate("List");
  }

  return (
    <View style={styles.container}>
      <Feather name="lock" size={192} color="#002E58" />
      <TouchableOpacity
        style={styles.unlockButton}
        activeOpacity={0.7}
        onPress={handleAuthentication}
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