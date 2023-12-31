import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>
          AÇÕES
        </Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate('Add')}
          >
            <Feather name="plus" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Feather name="refresh-cw" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <Feather name="settings" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 128,
    paddingTop: 44,
    backgroundColor: "#002E58"
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginStart: 16,
    marginEnd: 16,
    marginTop: 24
  },
  headerTitle: {
    fontSize: 36,
    alignItems: "center",
    color: "#FFFFFF"
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  }
});