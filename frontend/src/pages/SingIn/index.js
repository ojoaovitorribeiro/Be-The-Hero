import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import logoImg from "../../assets/logo.png";
import heroes from "../../assets/heroes.png";

export default function SingIn() {
  const navigation = useNavigation();

  function navigateToIncidents(incidents) {
    navigation.navigate("Incidents", { incidents });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.heroesLogo}>
        <Image source={heroes} />

        <Image source={require("../../assets/heroes.png")} />
      </View>
      <View style={styles.form}>
        <Text style={styles.headerText}>Faça seu Login</Text>

        <TextInput
          style={{
            backgroundColor: "#737380",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            padding: 12,
            color: "white"
          }}
          placeholder="Digite sua credencial"
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
        <TouchableOpacity
          style={[
            styles.detailButton,
            { marginTop: 0, borderRadius: 8, backgroundColor: "#E02041" }
          ]}
          onPress={() => navigateToIncidents(incidents)}
        >
          <Text
            style={[
              styles.detailButtonText,
              {
                color: "#fff",
                padding: 12,
                marginHorizontal: 49,
                marginTop: 10
              }
            ]}
          >
            Entrar
          </Text>
          <Feather name="log-in" size={16} color="#fff"></Feather>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => navigateToRegister(incidents)}
        >
          <Feather name="user" size={16} color="#E02041"></Feather>

          <Text style={styles.detailButtonText}>Não tenho cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
