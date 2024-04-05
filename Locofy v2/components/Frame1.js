import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame = ({ bildobjektXstort }) => {
  return (
    <View style={styles.frame}>
      <ImageBackground
        style={styles.bildobjektXstortIcon}
        resizeMode="cover"
        source={bildobjektXstort}
      />
      <Pressable style={styles.button}>
        <Text style={styles.seBeskrivning} numberOfLines={1}>
          Se beskrivning
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bildobjektXstortIcon: {
    height: 220,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  seBeskrivning: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    width: 130,
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  frame: {
    width: 220,
    marginTop: -298,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Frame;
