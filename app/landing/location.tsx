import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import { CustomColors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Location: React.FC = () => {
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ThemedView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.content}>
          <ThemedText style={styles.text4}>Gudang dan Toko</ThemedText>
          <TouchableOpacity
            onPress={() =>
              openURL(
                "https://www.google.com/maps/search/?api=1&query=TPI+Weru+Paciran,+Lamongan"
              )
            }
          >
            <Image
              source={require("@/assets/images/gudang.png")}
              style={[styles.image]}
            />
          </TouchableOpacity>
          <ThemedText style={styles.text4}>Kantor Resmi</ThemedText>
          <TouchableOpacity
            onPress={() =>
              openURL(
                "https://www.google.com/maps/search/?api=1&query=Universitas+Pertamina"
              )
            }
          >
            <Image
              source={require("@/assets/images/kantor.png")}
              style={[styles.image]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href={"/landing"} style={styles.link}>
              Back to Log In
            </Link>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

const Header: React.FC = () => {
  const isPresented = router.canGoBack();
  return (
    <HeaderView
      backgroundColors={[
        CustomColors.secondaryColor,
        CustomColors.primaryColor,
      ]}
      style={styles.topbar}
    >
      {isPresented && (
        <Link href={".."}>
          <ToggleMenu
            onPress={() => {
              router.push("/landing/menu");
            }}
            color={CustomColors.blue}
            active={true}
          />
        </Link>
      )}
      <ThemedText style={styles.text1}>Kunjungi</ThemedText>
      <ThemedText style={styles.text2}>FishUPER</ThemedText>
      <ThemedText style={styles.text3}>Tersedia di daerah tertentu</ThemedText>
    </HeaderView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: 316,
    height: 226,
    resizeMode: "contain",
    marginBottom: 5,
  },
  topbar: {
    justifyContent: "space-between",
    gap: 2,
    paddingBottom: 24,
    position: "relative",
  },
  ringButton: {
    backgroundColor: "white",
    borderWidth: 2,
  },
  text1: {
    marginTop: 15,
    color: "white",
    fontWeight: "regular",
    fontSize: 48,
    lineHeight: 48,
    fontFamily: "Karla",
  },
  text2: {
    color: "white",
    fontWeight: "900",
    fontSize: 48,
    lineHeight: 48,
    fontFamily: "Karla",
  },
  text3: {
    color: "white",
    fontWeight: "regular",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "Karla",
  },
  text4: {
    color: "#002E86",
    fontWeight: "900",
    fontSize: 32,
    lineHeight: 36,
    fontFamily: "Karla",
  },
  link: {
    color: CustomColors.blue,
    fontSize: 24,
  },
});

export default Location;
