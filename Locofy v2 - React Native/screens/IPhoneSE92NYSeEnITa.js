import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OverlayAktivitetenTillagdBa from "../components/OverlayAktivitetenTillagdBa";
import AvsnittsHuvud from "../components/AvsnittsHuvud";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhoneSE92NYSeEnITa = () => {
  const navigation = useNavigation();
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false);

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true);
  }, []);

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.iphoneSe92NySeEnITa, styles.aktivitetsfrslagLayout]}>
        <View style={[styles.aktivitetsfrslag, styles.aktivitetsnamnPosition]}>
          <Text
            style={[styles.aktuellAktivitetsfrga, styles.aktivitetsnamnFlexBox]}
          >
            Vill du lägga till denna aktivitet?
          </Text>
          <Pressable
            style={[styles.button, styles.buttonPosition1]}
            onPress={() => navigation.navigate("IPhoneSE93NYSeEnITa")}
          >
            <View style={styles.buttonPosition} />
            <Text style={[styles.knapp, styles.knappPosition]}>
              Nej, inte den
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button1, styles.buttonPosition1]}
            onPress={openButtonContainer1}
          >
            <View style={styles.buttonPosition} />
            <Text style={[styles.knapp, styles.knappPosition]}>
              Ja, lägg till
            </Text>
          </Pressable>
          <View style={styles.aktivitet}>
            <View style={styles.aktivitetChild} />
            <Text style={[styles.aktivitetsnamn, styles.aktivitetsnamnFlexBox]}>
              Cykla
            </Text>
            <View style={styles.button2}>
              <View style={styles.buttonPosition} />
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
          <AvsnittsHuvud
            onBaktpilPress={() => navigation.navigate("IPhoneSE90NYLggaTill")}
          />
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
  aktivitetsfrslagLayout: {
    height: 568,
    backgroundColor: Color.colorWhitesmoke,
  },
  aktivitetsnamnPosition: {
    width: 320,
    left: 0,
    top: 0,
  },
  aktivitetsnamnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  buttonPosition1: {
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
  aktuellAktivitetsfrga: {
    height: "7.04%",
    top: "10.56%",
    fontSize: FontSize.size_xl,
    left: "0%",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: "100%",
  },
  buttonPosition: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  knapp: {
    fontSize: FontSize.size_xl,
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
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  aktivitetsnamn: {
    fontSize: FontSize.size_5xl,
    height: 60,
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
    right: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  aktivitetsfrslag: {
    position: "absolute",
    height: 568,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    top: 0,
  },
  iphoneSe92NySeEnITa: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 568,
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default IPhoneSE92NYSeEnITa;
