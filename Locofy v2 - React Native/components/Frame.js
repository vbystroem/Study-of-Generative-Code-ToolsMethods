import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <Pressable style={[styles.frame, styles.frameFlexBox]}>
      <Text
        style={[styles.hurVillDu, styles.hurVillDuFlexBox]}
        numberOfLines={1}
      >
        Hur vill du lägga till aktiviteter?
      </Text>
      <Pressable
        style={[styles.button, styles.frameFlexBox]}
        onPress={() => {}}
      >
        <Text
          style={[styles.vljFrnLista, styles.hurVillDuFlexBox]}
          numberOfLines={1}
        >
          Välj från lista
        </Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frame1FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  hurVillDuFlexBox: {
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
  },
  hurVillDu: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
  },
  vljFrnLista: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  button: {
    borderRadius: Border.br_3xs,
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
    width: 249,
    backgroundColor: Color.colorWhite,
  },
  frame: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default Frame;
