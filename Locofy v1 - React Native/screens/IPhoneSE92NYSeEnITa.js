import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OverlayAktivitetenTillagdBa from "../components/OverlayAktivitetenTillagdBa";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhoneSE92NYSeEnITa = () => {
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false);
  const navigation = useNavigation();

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true);
  }, []);

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.iphoneSe92NySeEnITa}>
        <View style={styles.aktivitetsfrslag}>
          <Text style={styles.aktuellAktivitetsfrga}>
            Vill du lägga till denna aktivitet?
          </Text>
          <Pressable
            style={[styles.button, styles.buttonPosition]}
            onPress={() => navigation.navigate("IPhoneSE93NYSeEnITa")}
          >
            <View style={styles.buttonShadowBox} />
            <Text style={[styles.knapp, styles.knappPosition]}>
              Nej, inte den
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button1, styles.buttonPosition]}
            onPress={openButtonContainer1}
          >
            <View style={styles.buttonShadowBox} />
            <Text style={[styles.knapp, styles.knappPosition]}>
              Ja, lägg till
            </Text>
          </Pressable>
          <View style={[styles.aktivitet, styles.aktivitetPosition]}>
            <View style={styles.aktivitetChild} />
            <Text style={[styles.aktivitetsnamn, styles.aktivitetsnamnFlexBox]}>
              Cykla
            </Text>
            <View style={styles.button2}>
              <View style={styles.buttonShadowBox} />
              <Text style={[styles.knapp2, styles.knappPosition]}>
                Se beskrivning
              </Text>
            </View>
            <Image
              style={styles.bildobjektXstortIcon}
              resizeMode="cover"
              source={require("../assets/bildobjekt-xstort.png")}
            />
          </View>
          <View style={[styles.avsnittshuvud, styles.aktivitetPosition]}>
            <View style={styles.avsnittshuvudChild} />
            <Pressable
              style={styles.baktpil}
              onPress={() => navigation.navigate("IPhoneSE90NYLggaTill")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/baktpil.png")}
              />
            </Pressable>
            <Text style={[styles.avsnittsrubrik, styles.aktivitetsnamnFlexBox]}>
              Mina favoriter
            </Text>
            <Image
              style={[styles.stngkryssIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/stngkryss.png")}
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <OverlayAktivitetenTillagdBa onClose={closeButtonContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    bottom: "4.4%",
    top: "85.04%",
    width: "40.63%",
    height: "10.56%",
    position: "absolute",
  },
  knappPosition: {
    fontFamily: FontFamily.interRegular,
    top: "0%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  aktivitetPosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  aktivitetsnamnFlexBox: {
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  aktuellAktivitetsfrga: {
    height: "7.04%",
    top: "10.56%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: "0%",
    position: "absolute",
    width: "100%",
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
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  knapp: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  button: {
    right: "53.13%",
    left: "6.25%",
  },
  buttonContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  button1: {
    right: "6.25%",
    left: "53.13%",
  },
  aktivitetChild: {
    left: 25,
    borderColor: Color.colorBlack,
    borderWidth: 0.7,
    width: 270,
    height: 358,
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
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  aktivitetsnamn: {
    height: 60,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 320,
    left: 0,
    top: 0,
  },
  knapp2: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
  },
  button2: {
    top: 300,
    left: 95,
    width: 130,
    height: 40,
    position: "absolute",
  },
  bildobjektXstortIcon: {
    top: 60,
    left: 50,
    width: 220,
    height: 220,
    position: "absolute",
    overflow: "hidden",
  },
  aktivitet: {
    height: "64.79%",
    top: "17.61%",
    bottom: "17.61%",
    overflow: "hidden",
  },
  avsnittshuvudChild: {
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
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
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray,
    top: "0%",
    height: "100%",
    fontSize: FontSize.size_5xl,
  },
  stngkryssIcon: {
    width: "18.75%",
    left: "81.25%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  avsnittshuvud: {
    bottom: "89.44%",
    top: "0%",
    height: "10.56%",
    right: "0%",
  },
  aktivitetsfrslag: {
    width: 320,
    left: 0,
    top: 0,
    position: "absolute",
    height: 568,
    backgroundColor: Color.colorWhitesmoke,
  },
  iphoneSe92NySeEnITa: {
    flex: 1,
    overflow: "hidden",
    height: 568,
    backgroundColor: Color.colorWhitesmoke,
    width: "100%",
  },
});

export default IPhoneSE92NYSeEnITa;
