import React, { useEffect, useState, Component, state } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";
import api from "../../services/api";

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail(incidentDetail) {
    navigation.navigate("Detail", { incidentDetail });
  }
  function navigateToSingIn(singIn) {
    navigation.navigate("SingIn", { singIn });
  }

  const [incident, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }
    if (total > 0 && incident.length === total) {
      return;
    }
    setLoading(true);

    const res = await api.get(`/listIncidents?page=${page}`, loadIncidents);
    setIncidents([...incident, ...res.data]);
    setTotal(res.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require("../../assets/logo.png")} /> */}
        <Image source={logoImg} />
        <View>
          <TouchableOpacity
            style={[
              styles.loginButton,
              { flexDirection: "row", justifyContent: "space-between" }
            ]}
            onPress={() => navigateToSingIn(singIn)}
          >
            <Text style={styles.headerText}>Login</Text>

            <Feather name="log-in" size={16} color="#E02041"></Feather>
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
          </Text>
        </View>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia!!!
      </Text>

      <FlatList
        style={styles.incidentList}
        data={incident}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG: </Text>
            <Text style={styles.incidentValue}>{item.name}</Text>

            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentValue}>{item.title}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>

            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("bt-Br", {
                style: "currency",
                currency: "BRL"
              }).format(item.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041"></Feather>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
