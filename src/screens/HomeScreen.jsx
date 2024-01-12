import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Text
        style={{
          fontSize: 28,
          textAlign: "center",
          padding: 16,
          marginBottom: 20,
        }}
      >
        PT. Grosir Sembako
      </Text>
      <Button
        title="Data Barang"
        onPress={() => navigation.navigate("DataBarang")}
      />
      <Button
        title="Data Customer"
        onPress={() => navigation.navigate("DataCustomer")}
      />
      <Button
        title="Data Penjualan/Transaksi"
        onPress={() => navigation.navigate("DataPenjualan")}
      />
      <Button
        title="Data Kasir"
        onPress={() => navigation.navigate("DataKasir")}
      />
    </View>
  );
}
