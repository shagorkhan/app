import React from "react";
import { View, Text, Image } from "react-native";
import img1 from '../../assets/image12.png'
import img2 from '../../assets/image13.png'
const DepositWithdrawCard = () => {
  return (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: "white",
        marginBottom: 20,
        borderColor: "#97C5E6",
        borderWidth: 0.5,
        borderRadius: 10,
      }}
    >
      <View style={{}}>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom:4
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: 400, color: "#000000" }}>
              TransxID kfdjbvouiedghyghi
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 400, color: "#B18A00" }}>
              PENDING
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Image
                source={img1} 
                style={{}}
                resizeMode="cover"
              />
              <Text style={{ fontSize: 11, fontWeight: 400, color: "#507BE8" }}>
                200BDT
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Image
                source={img2} 
                style={{}}
                resizeMode="cover"
              />
              <Text style={{ fontSize: 11, fontWeight: 400, color: "#000000" }}>
                200BDT
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 10, fontWeight: 100, color: "#000000"}}>Remarks: We love your status. play....</Text>
        </View>
      </View>
    </View>
  );
};

export default DepositWithdrawCard;
