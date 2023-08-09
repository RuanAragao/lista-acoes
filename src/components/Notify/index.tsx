import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

type NotifyProps = {
  label?: string;
  show?: boolean;
  duration?: number;
};

export function Notify({
  label = "Notify",
  show = true,
  duration = 3000
}: NotifyProps) {
  const [showNotify, setShowNotify] = useState<boolean>(show);

  useEffect(() => {
    if (showNotify) {
      const timer = setTimeout(() => {
        setShowNotify(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showNotify]);

  return showNotify ? (
    <View style={styles.notify}>
      <Text style={styles.notifyText}>{label}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setShowNotify(false)}>
        <Feather name="x" size={24} color="#CEE8FF" />
      </TouchableOpacity>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  notify: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#0077E6",
    gap: 8,
  },
  notifyText: {
    color: "#CEE8FF",
    fontSize: 18,
  },
});
