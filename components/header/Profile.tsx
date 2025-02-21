import { CustomColors } from "@/constants/Colors";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { Avatar } from "../Avatar";
import { ThemedText } from "../ThemedText";

interface ProfileProps {
  role: string;
  avatar?: ImageSourcePropType;
}

export default function Profile({ role, avatar }: ProfileProps) {
  return (
    <View style={styles.profile}>
      <Avatar source={avatar} />
      <View style={styles.textAvatarContainer}>
        <ThemedText style={styles.textAvatar}>Selamat datang,</ThemedText>
        <ThemedText style={styles.textAvatar} type="title">
          {getRoleUser(role)}
        </ThemedText>
      </View>
    </View>
  );
}

const getRoleUser = (role: string): string => {
  switch (role) {
    case "fisherman":
      return "FISHERMAN (NELAYAN)";
    case "fisherer":
      return "FISHERER (DISTRIBUTOR)";
    default:
      return "FISHERIES (PEMBELI)";
  }
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    gap: 7,
  },
  textAvatarContainer: {},
  textAvatar: {
    color: CustomColors.blue,
  },
});
