import { RingButton } from "@/components/button/RingButton";
import { HeaderView } from "@/components/HeaderView";
import { ThemedView } from "@/components/ThemedView";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import { CustomColors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { Image, StyleSheet } from "react-native";

const Menu: React.FC = () => {
  return (
    <ThemedView style={styles.container}>
      <Header />
      <Image
        source={require("@/assets/images/logo-home.png")}
        style={[styles.image]}
      />
    </ThemedView>
  );
};

const Header: React.FC = () => {
  const isPresented = router.canGoBack();
  return (
    <HeaderView
      backgroundColors={[CustomColors.lightGold, CustomColors.gold]}
      style={styles.topbar}
    >
      {isPresented && (
        <Link href={".."}>
          <ToggleMenu
            onPress={() => {
              router.push("/landing");
            }}
            color={CustomColors.blue}
            active={true}
          />
        </Link>
      )}
      <RingButton
        text="Tentang FishUPER"
        borderColor="black"
        textStyles={{ color: "black" }}
        style={styles.ringButton}
        onPress={() => {
          router.push("/landing/about");
        }}
      />
      <RingButton
        text="Lokasi FishUPER"
        borderColor="black"
        textStyles={{ color: "black" }}
        style={styles.ringButton}
        onPress={() => {
          router.push("/landing/location");
        }}
      />
      <RingButton
        text="Website FishUPER"
        borderColor="black"
        textStyles={{ color: "black" }}
        style={styles.ringButton}
      />
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
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  topbar: {
    justifyContent: "space-between",
    gap: 18,
    position: "relative",
  },
  ringButton: {
    backgroundColor: "white",
    borderWidth: 2,
  },
});

export default Menu;
