import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const AvsnittsHuvud = ({ onBaktpilPress }) => {
  return (
    <View style={styles.avsnittshuvud}>
      <View style={[styles.avsnittshuvudChild, styles.stngkryssIconPosition]} />
      <Pressable style={styles.baktpil} onPress={onBaktpilPress}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/baktpil.png")}
        />
      </Pressable>
      <Text style={styles.avsnittsrubrik}>Mina favoriter</Text>
      <Image
        style={[styles.stngkryssIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/stngkryss.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stngkryssIconPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
  },
  avsnittshuvudChild: {
    backgroundColor: Color.colorWhite,
    height: "100%",
    left: "0%",
    width: "100%",
  },
  icon: {
    width: "100%",
  },
  baktpil: {
    top: "16.67%",
    right: "87.5%",
    bottom: "16.67%",
    width: "12.5%",
    height: "66.67%",
    left: "0%",
    position: "absolute",
  },
  avsnittsrubrik: {
    width: "75%",
    left: "12.5%",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  stngkryssIcon: {
    width: "18.75%",
    left: "81.25%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  avsnittshuvud: {
    height: "10.56%",
    bottom: "89.44%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
});

export default AvsnittsHuvud;
