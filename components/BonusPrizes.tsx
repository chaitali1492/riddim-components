import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    height: 56,
    width: 56,
    backgroundColor: "#fff",
    borderRadius: 50,
    // boxWithShadow:
    //   "inset -0.5px -0.5px 1.5px rgba(0, 0, 0, 0.56), inset 0.5px 0.5px 1px rgba(255, 255, 255, 0.65)",
    shadowColor:"rgba(0, 0, 0, 0.2)",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
  },
  imgContainer: {
    height: 49,
    width: 49,
    position: "absolute",
    top: 3.5,
    left: 3.5,
    padding: 3.5,
    backgroundColor: "#bbb",
    borderRadius: 50,
    overflow: "hidden",
  },
  badge:{
      height:24,
      width:24,
      shadowColor:"rgba(0, 0, 0, 0.2)",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
  }
});

interface BonusPrizesType {
  imgs: {
    uri: string;
    badge?: {
      icon: React.ReactElement;
    };
  }[];
}

const BonusPrize: React.FunctionComponent<BonusPrizesType> = ({ imgs }) => {
  return (
    <View style={{flexDirection:"row"}}>
      {imgs.map((img) => {
        return (
          <View style={styles.avatar} key={img.uri}>
            <ImageBackground
              resizeMode="cover"
              source={{ uri: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" }}
              style={styles.imgContainer}
            />
            {
                img.badge &&  <View style={styles.badge}>{img.badge.icon}</View>
            }
          </View>
        );
      })}
    </View>
  );
};

export default BonusPrize;
