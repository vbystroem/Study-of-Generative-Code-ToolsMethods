import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AvsnittsHuvud2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.avsnittshuvud, style, styles.frameFlexBox]}>
      <Pressable
        style={styles.baktpil}
        onPress={() => navigation.navigate("IPhoneSE90NYLggaTill1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/baktpil.png")}
        />
      </Pressable>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={styles.avsnittsrubrik} numberOfLines={1}>
          Mina favoriter
        </Text>
        <Image
          style={styles.stngkryssIcon}
          resizeMode="cover"
          source={require("../assets/stngkryss.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  baktpil: {
    width: 40,
    height: 40,
  },
  avsnittsrubrik: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 240,
    height: 60,
    alignItems: "center",
  },
  stngkryssIcon: {
    width: 60,
    height: 60,
  },
  frame: {
    width: 280,
    overflow: "hidden",
  },
  avsnittshuvud: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
});

export default AvsnittsHuvud2;
