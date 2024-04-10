import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhoneSE90NYLggaTill = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphoneSe90NyLggaTill}>
      <Text style={[styles.hurVillDu, styles.hurVillDuLayout]}>
        Hur vill du lägga till aktiviteter?
      </Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.knapp, styles.knappFlexBox]}>Välj från lista</Text>
      </View>
      <Pressable
        style={[styles.button1, styles.buttonLayout]}
        onPress={() => navigation.navigate("IPhoneSE92NYSeEnITa")}
      >
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.knapp, styles.knappFlexBox]}>
          Se en aktivitet i taget
        </Text>
      </Pressable>
      <View style={[styles.button2, styles.buttonLayout]}>
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.knapp, styles.knappFlexBox]}>
          Skapa en egen aktivitet
        </Text>
      </View>
      <View style={[styles.avsnittshuvud, styles.buttonLayout]}>
        <View
          style={[styles.avsnittshuvudChild, styles.stngkryssIconPosition]}
        />
        <Image
          style={[styles.baktpilIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/baktpil.png")}
        />
        <Text style={[styles.avsnittsrubrik, styles.knappFlexBox]}>
          Mina favoriter
        </Text>
        <Image
          style={[styles.stngkryssIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/stngkryss.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hurVillDuLayout: {
    width: 320,
    left: 0,
  },
  buttonLayout: {
    height: 60,
    position: "absolute",
  },
  knappFlexBox: {
    top: "0%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  stngkryssIconPosition: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hurVillDu: {
    top: 60,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
    width: 320,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 0,
  },
  buttonShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    left: "0.16%",
    bottom: "0%",
    right: "0.12%",
    width: "99.72%",
    backgroundColor: Color.colorWhite,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  knapp: {
    width: "91.68%",
    left: "4.16%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    top: "0%",
    height: "100%",
  },
  button: {
    top: 170,
    width: 250,
    left: 35,
    height: 60,
  },
  button1: {
    top: 270,
    width: 250,
    left: 35,
    height: 60,
  },
  button2: {
    top: 370,
    width: 250,
    left: 35,
    height: 60,
  },
  avsnittshuvudChild: {
    left: "0%",
    backgroundColor: Color.colorWhite,
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  baktpilIcon: {
    height: "66.67%",
    width: "12.5%",
    top: "16.67%",
    right: "87.5%",
    bottom: "16.67%",
    left: "0%",
  },
  avsnittsrubrik: {
    width: "75%",
    left: "12.5%",
    color: Color.colorGray,
    top: "0%",
    height: "100%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
  },
  stngkryssIcon: {
    width: "18.75%",
    left: "81.25%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  avsnittshuvud: {
    top: 0,
    width: 320,
    left: 0,
    height: 60,
  },
  iphoneSe90NyLggaTill: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 568,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhoneSE90NYLggaTill;
