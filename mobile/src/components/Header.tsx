import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header = ({ title, showCancel = true }: HeaderProps) => {
  const { navigate, goBack } = useNavigation();

  function handleGoBackToAppHomePage() {
    navigate("OrphanagesMap");
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => goBack()}>
        <Feather name="arrow-left" size={26} color="#15b6d6" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomePage}>
          <Feather name="x" size={26} color="#FF669D" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFC",
    padding: 24,
    paddingTop: 44,
    borderBottomWidth: 1,
    borderColor: "#DDE3F0",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#8FA7B3",
    fontSize: 16,
  },
});

export default Header;
