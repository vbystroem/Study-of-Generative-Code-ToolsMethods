import React, { useState, useCallback } from "react";
import { Pressable, Image, StyleSheet, Text, View, Modal } from "react-native";
import Frame from "../components/Frame";
import { useNavigation } from "@react-navigation/native";
import OverlayAktivitetenTillagdSt from "../components/OverlayAktivitetenTillagdSt";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhoneSE93NYSeEnITa1 = () => {
  const navigation = useNavigation();
  const [button2Visible, setButton2Visible] = useState(false);

  const openButton2 = useCallback(() => {
    setButton2Visible(true);
  }, []);

  const closeButton2 = useCallback(() => {
    setButton2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.iphoneSe93NySeEnITa}>
        <View style={[styles.aktivitetsfrslag, styles.frameFlexBox1]}>
          <View style={[styles.frame, styles.frameFlexBox1]}>
            <Text
              style={[styles.villDuLgga, styles.villDuLggaTypo]}
              numberOfLines={1}
            >
              Vill du lägga till denna aktivitet?
            </Text>
            <View style={[styles.frame, styles.frameFlexBox1]}>
              <View style={[styles.frame2, styles.frameFlexBox1]}>
                <View style={styles.frameChild} />
                <Text
                  style={[styles.hoppaHopprep, styles.villDuLggaTypo]}
                  numberOfLines={1}
                >
                  Hoppa hopprep
                </Text>
              </View>
              <Frame
                bildobjektXstort={require("../assets/bildobjekt-xstort1.png")}
              />
            </View>
          </View>
          <View style={[styles.frame3, styles.frameFlexBox]}>
            <Pressable style={styles.buttonShadowBox}>
              <Pressable
                numberOfLines={1}
                onPress={() => navigation.navigate("IPhoneSE92NYSeEnITa1")}
              >
                <Text style={styles.jaLggTillTypo}>Nej, inte den</Text>
              </Pressable>
            </Pressable>
            <Pressable style={styles.buttonShadowBox} onPress={openButton2}>
              <Text style={styles.jaLggTillTypo} numberOfLines={1}>
                Ja, lägg till
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={button2Visible}>
        <View style={styles.button2Overlay}>
          <Pressable style={styles.button2Bg} onPress={closeButton2} />
          <OverlayAktivitetenTillagdSt onClose={closeButton2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  villDuLggaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "stretch",
  },
  villDuLgga: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameChild: {
    borderColor: Color.colorBlack,
    borderWidth: 0.7,
    height: 358,
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
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  hoppaHopprep: {
    marginTop: -358,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
  },
  frame2: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  jaLggTillTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    alignSelf: "stretch",
  },
  buttonShadowBox: {
    width: 130,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray,
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
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  button2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  button2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frame3: {
    marginTop: 15,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  aktivitetsfrslag: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhitesmoke,
    alignItems: "center",
  },
  iphoneSe93NySeEnITa: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default IPhoneSE93NYSeEnITa1;
