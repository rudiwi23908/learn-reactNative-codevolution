// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function DataBarang() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text
//         style={{
//           fontSize: 24,
//           textAlign: "center",
//           padding: 10,
//           marginBottom: 20,
//         }}
//       >
//         Data Barang
//       </Text>
//       <View style={{ flex: 1, flexDirection: "column" }}>
//         <Text style={styles.text}>001</Text>
//         <Text style={styles.text}>Indomilk</Text>
//         <Button title="Hapus" />
//         <Button title="Edit" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from "react-native";

const BarangScreen = () => {
  const [dataBarang, setDataBarang] = useState([
    { id: "001", merek: "Indomilk" },
    { id: "002", merek: "Sedap Soto" },
    { id: "003", merek: "Kecap Bango" },
    // Tambahkan data barang lainnya sesuai kebutuhan
  ]);

  const handleEdit = (id) => {
    // Implementasikan logika edit data di sini
    Alert.alert(`Edit Barang dengan ID ${id}`);
  };

  const handleDelete = (id) => {
    // Implementasikan logika hapus data di sini
    setDataBarang((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleTambahData = () => {
    // Implementasikan logika tambah data di sini
    Alert.alert("Tambah Data Barang");
  };

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.id}</Text>
      <Text style={styles.tableCell}>{item.merek}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleEdit(item.id)}
          style={styles.buttonEdit}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={styles.buttonDelete}
        >
          <Text style={styles.buttonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>ID</Text>
        <Text style={styles.tableHeaderText}>Merek</Text>
        <Text style={styles.tableHeaderText}>Opsi</Text>
      </View>
      <FlatList
        data={dataBarang}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Tambah Data" onPress={handleTambahData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    // paddingHorizontal: 15,
    paddingBottom: 10,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonEdit: {
    backgroundColor: "blue",
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonDelete: {
    backgroundColor: "red",
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default BarangScreen;
