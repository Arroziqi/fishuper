import { Break } from "@/components/Break";
import Card, { CardProps } from "@/components/card/Card";
import CardWithButton from "@/components/card/CardWithButton";
import ModalWithInput from "@/components/modal/ModalWithInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import { TopBar } from "@/components/ui/TopBar/TopBar";
import { CustomColors } from "@/constants/Colors";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function FishermanScreen() {
  return (
    <>
      <ThemedView style={styles.container}>
        <TopBar role="fisherman" />
        <Content />
      </ThemedView>
    </>
  );
}

const Content: React.FC = () => {
  const model: CardProps[] = [
    {
      image: require("@/assets/images/illustrations/fish.png"),
      subTitle: "Ikan Laut Segar",
    },
    {
      image: require("@/assets/images/illustrations/octopus.png"),
      subTitle: `Olahan \n Frozen Food`,
    },
    {
      image: require("@/assets/images/illustrations/crab.png"),
      subTitle: "Produk Premium",
    },
  ];

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View style={styles.contentContainer}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Break height={40} />
          <ToggleMenu color="white" style={styles.toggle} />
          <View style={styles.content}>
            <View style={styles.supplyContainer}>
              <ThemedText>Pilih Supply</ThemedText>
              <View style={styles.supply}>
                {model.map((item) => (
                  <Card
                    onPress={() => router.push("/products/1")}
                    style={styles.supplyCard}
                    backgroundColor="white"
                    color="black"
                    image={item.image}
                    subTitle={item.subTitle}
                    key={item.subTitle}
                  />
                ))}
              </View>
            </View>

            <CardWithButton
              contentStyle={styles.contentStyleRight}
              imageStyle={styles.imageStyleRight}
              title="Peminjaman Modal"
              subTitle="Buat pengajuan dan konsultasikan dengan konsultan ahli dari FishUPER"
              image={require("@/assets/images/illustrations/customer-service-right.png")}
              textButton={"Buat Pengajuan Sekarang"}
              onPress={() => {
                setModalOpen(!modalOpen);
              }}
            />

            <CardWithButton
              contentStyle={styles.contentStyleLeft}
              imageStyle={styles.imageStyleLeft}
              title="Nabung di FishUPER"
              subTitle="Simpan pendapatan dan bantu nelayan lain mendapatkan modal"
              image={require("@/assets/images/illustrations/customer-service-left.png")}
              textButton={"Nabung Sekarang"}
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </View>

      {modalOpen && (
        <ModalWithInput
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          title={"Ajukan Modal?"}
          placeholder="Masukan jumlah pengajuan..."
          textButton={"Konfirmasi"}
          onPress={() =>
            router.push("/(responses)/(success)/submissionAccepted")
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    backgroundColor: CustomColors.gold,
  },
  contentContainer: {
    flex: 1,
    position: "relative",
  },
  scrollView: {
    width: "100%",
  },
  content: {
    gap: 35,
    justifyContent: "center",
    paddingBottom: 30,
    paddingHorizontal: 25,
  },
  supplyContainer: {
    gap: 10,
  },
  supply: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  supplyCard: {},
  toggle: {
    top: 20,
    left: 20,
  },
  contentStyleRight: {
    paddingRight: 65,
  },
  imageStyleRight: {},
  contentStyleLeft: {
    paddingLeft: 70,
  },
  imageStyleLeft: {
    left: -31,
  },
});
