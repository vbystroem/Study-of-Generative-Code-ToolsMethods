import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import Frame from "../components/Frame";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhoneSE90NYLggaTill1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphoneSe90NyLggaTill}>
      <Frame />
      <Pressable
        style={styles.buttonShadowBox}
        onPress={() => navigation.navigate("IPhoneSE92NYSeEnITa1")}
      >
        <Text style={styles.seEnAktivitet} numberOfLines={1}>
          Se en aktivitet i taget
        </Text>
      </Pressable>
      <Pressable style={styles.buttonShadowBox} onPress={() => {}}>
        <Text style={styles.seEnAktivitet} numberOfLines={1}>
          Skapa en egen aktivitet
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  seEnAktivitet: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  buttonShadowBox: {
    marginTop: 40,
    width: 249,
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
    justifyContent: "center",
    alignItems: "center",
  },
  iphoneSe90NyLggaTill: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IPhoneSE90NYLggaTill1;
