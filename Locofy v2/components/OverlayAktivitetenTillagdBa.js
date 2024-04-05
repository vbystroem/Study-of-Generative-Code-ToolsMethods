import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OverlayAktivitetenTillagdBa = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.overlayAktivitetenTillagdBa}>
      <View style={styles.overlayAktivitetenTillagdBaChild} />
      <Image
        style={styles.stngkryssIcon}
        resizeMode="cover"
        source={require("../assets/stngkryss1.png")}
      />
      <Text style={styles.aktivitetenHarLagts}>
        Aktiviteten har lagts till i dina favoriter
      </Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("IPhoneSE90NYLggaTill")}
      >
        <View style={styles.buttonPosition} />
        <Text style={styles.knapp}>Stäng väljaren</Text>
      </Pressable>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("IPhoneSE93NYSeEnITa")}
      >
        <View style={styles.buttonPosition} />
        <Text style={styles.knapp}>Se nästa aktivitet</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 60,
    width: 130,
    top: 240,
    position: "absolute",
  },
  overlayAktivitetenTillagdBaChild: {
    top: -1,
    left: 16,
    backgroundColor: Color.colorGainsboro,
    borderColor: Color.colorBlack,
    width: 288,
    height: 342,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  stngkryssIcon: {
    top: 5,
    left: 258,
    width: 40,
    height: 40,
    position: "absolute",
  },
  aktivitetenHarLagts: {
    top: 37,
    left: 17,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 286,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  buttonPosition: {
    borderColor: Color.colorDarkslategray,
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  knapp: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  button: {
    left: 25,
  },
  button1: {
    left: 165,
  },
  overlayAktivitetenTillagdBa: {
    width: 320,
    height: 340,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default OverlayAktivitetenTillagdBa;
