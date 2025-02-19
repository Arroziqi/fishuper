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

export default function FisheriesScreen() {
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
      image: require("@/assets/images/illustrations/blowfish.png"),
      subTitle: "Nyonya Puff",
      description: "Rp100/gr",
    },
    {
      image: require("@/assets/images/illustrations/octopus.png"),
      subTitle: `Squidward`,
      description: "Rp100/gr",
    },
    {
      image: require("@/assets/images/illustrations/crab.png"),
      subTitle: "Mr. Krab",
      description: "Rp100/gr",
    },
    {
      image: require("@/assets/images/illustrations/snail.png"),
      subTitle: "Gary",
      description: "Rp100/gr",
    },
    {
      image: require("@/assets/images/illustrations/starfish.png"),
      subTitle: `Pattrick`,
      description: "Rp100/gr",
    },
    {
      image: require("@/assets/images/illustrations/whale.png"),
      subTitle: "Anak Mr. Krab",
      description: "Rp100/gr",
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
            <View style={styles.productContainer}>
              <ThemedText>Produk Populer</ThemedText>
              <View style={styles.product}>
                {model.map((item) => (
                  <Card
                    style={styles.productCard}
                    backgroundColor="white"
                    color="black"
                    image={item.image}
                    subTitle={item.subTitle}
                    description={item.description}
                    key={item.subTitle}
                  />
                ))}
              </View>
            </View>

            <CardWithButton
              contentStyle={styles.contentStyleRight}
              imageStyle={styles.imageStyleRight}
              title="Ajukan Produk Paketan"
              subTitle={`Butuh produk dengan jumlah besar? \n Ajukan paket spesial`}
              image={require("@/assets/images/illustrations/customer-service-right.png")}
              textButton={"Buat Pengajuan Sekarang"}
              onPress={() => {
                setModalOpen(!modalOpen);
              }}
            />

            <CardWithButton
              contentStyle={styles.contentStyleLeft}
              imageStyle={styles.imageStyleLeft}
              title="Belanja di FishUPER"
              subTitle={`Kumpulkan poin dan belanja \n sekarang di FishUPER`}
              image={require("@/assets/images/illustrations/customer-service-left.png")}
              textButton={"Belanja Sekarang"}
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
  productContainer: {
    gap: 10,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap", // Tambahan properti untuk membuat card wrap
  },
  productCard: {
    flexBasis: "30%", // Menentukan lebar tiap card sekitar sepertiga dari total lebar
    margin: 5,
  },
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
