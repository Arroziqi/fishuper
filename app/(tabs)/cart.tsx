import { Avatar } from "@/components/Avatar";
import { Break } from "@/components/Break";
import SmallButton from "@/components/button/SmallButton";
import Divider from "@/components/Divider";
import RowView from "@/components/RowView";
import { ThemedText } from "@/components/ThemedText";
import AddRemoveButton from "@/components/ui/button/AddRemoveButton";
import { TopBarCart } from "@/components/ui/TopBar/TopBarCart";
import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBarCart />
      <LinearGradient colors={["white", CustomColors.gold]} style={{ flex: 1 }}>
        <ScrollView style={{ padding: 20 }}>
          <View style={styles.container}>
            <View style={styles.card}>
              <RowView style={styles.headerCard} gap={5}>
                <Avatar />
                <ThemedText type="heading">Pengambilan</ThemedText>
                <SmallButton style={styles.smallButton} text={"Ubah"} />
              </RowView>
              <View style={styles.bodyCard}>
                <View style={styles.courierContainer}>
                  <RowView
                    justifyContent="space-between"
                    style={styles.courier}
                  >
                    <ThemedText>Express</ThemedText>
                    <ThemedText type="label">Rp100.000</ThemedText>
                  </RowView>
                  <ThemedText type="label">Langsung diantar</ThemedText>
                </View>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.address}>
                <ThemedText>Alamat Pengambilan</ThemedText>
                <RowView justifyContent="space-between">
                  <ThemedText type="title2">Kampus Saya</ThemedText>
                  <SmallButton style={styles.smallButton} text="Ganti Alamat" />
                </RowView>
                <ThemedText type="label">
                  Universitas Pertamina, Kebayoran Lama, Jakarta Selatan
                </ThemedText>
                <RowView gap={18}>
                  <SmallButton
                    textStyles={styles.ringButtonText}
                    style={styles.ringButton}
                    text="Isi detail alamat"
                  />
                  <SmallButton
                    textStyles={styles.ringButtonText}
                    style={styles.ringButton}
                    text="Catatan"
                  />
                </RowView>
              </View>
              <Break />
              <View style={styles.detail}>
                <ThemedText type="defaultBold">Detail Produk</ThemedText>
                <Break />
                <RowView style={styles.item} justifyContent="space-between">
                  <View>
                    <ThemedText type="defaultBold">Nyonya Puff</ThemedText>
                    <SmallButton style={styles.smallButton} text="Premium" />
                  </View>
                  <View style={styles.quantity}>
                    <ThemedText>Rp100/gr</ThemedText>
                    <AddRemoveButton />
                  </View>
                  <ThemedText>Rp10.000</ThemedText>
                </RowView>
                <Break />
                <RowView style={styles.addStyle} justifyContent="space-between">
                  <View>
                    <ThemedText type="defaultBold">
                      Mau tambah supply?
                    </ThemedText>
                    <ThemedText type="label">
                      Dapatkan lebih banyak potongan harga
                    </ThemedText>
                  </View>
                  <SmallButton style={styles.smallButton} text="Tambah" />
                </RowView>
                <View style={styles.summary}>
                  <ThemedText type="defaultBold">
                    Ringkasan Pendapatan
                  </ThemedText>
                  <RowView justifyContent="space-between">
                    <ThemedText>Total Harga</ThemedText>
                    <ThemedText>Rp119.000</ThemedText>
                  </RowView>
                </View>
                <Break />
                <Divider />
                <Break />
                <RowView style={styles.total} justifyContent="space-between">
                  <ThemedText type="defaultBold">Total Pendapatan</ThemedText>
                  <ThemedText type="defaultBold">Rp117.000</ThemedText>
                </RowView>
              </View>
            </View>
          </View>
          <Break height={20} />
          <TouchableOpacity>
            <LinearGradient
              colors={[
                CustomColors.seaBlue,
                CustomColors.darkBlue,
                CustomColors.darkBlue,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.submitButton}
            >
              <ThemedText type="textButton" lightColor="white">
                Pilih Metode Pembayaran
              </ThemedText>
            </LinearGradient>
          </TouchableOpacity>
          <Break height={40} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 38,
    gap: 20,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    boxShadow: "0 7 199 3 rgba(0, 0, 0, 0.25)",
    borderRadius: 38,
  },
  headerCard: {},
  avatar: {
    width: 43.14,
    height: 43.14,
    resizeMode: "contain",
  },
  smallButton: {
    borderRadius: 7,
    backgroundColor: CustomColors.blue,
  },
  bodyCard: {},
  content: {},
  address: {
    gap: 5,
  },
  detail: {},
  courier: {},
  courierContainer: {},
  ringButton: {
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
  },
  ringButtonText: {
    color: "black",
    fontWeight: "regular",
  },
  item: {
    alignItems: "flex-start",
    paddingVertical: 7,
    borderTopWidth: 1,
  },
  quantity: {
    alignItems: "center",
  },
  addStyle: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  summary: {
    paddingVertical: 12,
  },
  total: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 12,
  },
});
