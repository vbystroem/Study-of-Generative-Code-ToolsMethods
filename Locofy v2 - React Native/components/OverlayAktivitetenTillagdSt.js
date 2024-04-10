import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OverlayAktivitetenTillagdSt = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.overlayAktivitetenTillagdSt}>
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text
            style={[styles.aktivitetenHarLagts, styles.stngVljarenFlexBox]}
            numberOfLines={1}
          >
            Aktiviteten har lagts till i dina favoriter
          </Text>
        </View>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Pressable
            style={styles.buttonShadowBox}
            onPress={() => navigation.navigate("IPhoneSE90NYLggaTill1")}
          >
            <Text
              style={[styles.stngVljaren, styles.stngVljarenFlexBox]}
              numberOfLines={1}
            >
              Stäng väljaren
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox1]}>
        <Image
          style={styles.stngkryssIcon}
          resizeMode="cover"
          source={require("../assets/stngkryss1.png")}
        />
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Pressable
            style={styles.buttonShadowBox}
            onPress={() => navigation.navigate("IPhoneSE93NYSeEnITa1")}
          >
            <Text
              style={[styles.stngVljaren, styles.stngVljarenFlexBox]}
              numberOfLines={1}
            >
              Se nästa aktivitet
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    overflow: "hidden",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  stngVljarenFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  aktivitetenHarLagts: {
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  frame1: {
    width: 286,
  },
  stngVljaren: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  buttonShadowBox: {
    justifyContent: "center",
    borderColor: Color.colorDarkslategray,
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
    alignItems: "center",
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
  },
  frame2: {
    width: 130,
  },
  frame: {
    backgroundColor: Color.colorGainsboro,
    borderColor: Color.colorBlack,
    width: 288,
    paddingBottom: 40,
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
    overflow: "hidden",
  },
  stngkryssIcon: {
    left: 0,
    width: 45,
    height: 40,
    marginTop: 5,
  },
  frame3: {
    width: 133,
    paddingLeft: 3,
    paddingRight: 90,
  },
  overlayAktivitetenTillagdSt: {
    width: 320,
    paddingHorizontal: 17,
    paddingVertical: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default OverlayAktivitetenTillagdSt;
