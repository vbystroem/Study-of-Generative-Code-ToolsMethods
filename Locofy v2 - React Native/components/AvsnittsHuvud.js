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
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AvsnittsHuvud = ({ style }) => {
  return (
    <View style={[styles.avsnittshuvud, style, styles.frameFlexBox]}>
      <Image
        style={styles.baktpilIcon}
        resizeMode="cover"
        source={require("../assets/baktpil.png")}
      />
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
  baktpilIcon: {
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

export default AvsnittsHuvud;
