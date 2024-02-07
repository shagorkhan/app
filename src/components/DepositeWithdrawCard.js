import React from "react";
import { View, Text, Image } from "react-native";
import url from "../apis/url";


const DepositWithdrawCard = ({tnxId,status,amount,offer,remark,icon1,icon2,date,icon3,walletName}) => {
  return (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: "white",
        marginBottom: 10,
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
              marginBottom: 4,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: 400, color: "#000000" }}>
              TransxID {tnxId}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 400, color: `${status === 'PENDING' ? '#B18A00':status === 'ACCEPTED' ? '#00B147':'#B10000'}` }}>
              {status}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Image source={icon1} style={{}} resizeMode="cover" />
              <Text style={{ fontSize: 11, fontWeight: 400, color: "#507BE8" }}>
                {amount}BDT
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Image source={icon2} style={{}} resizeMode="cover" />
              <Text style={{ fontSize: 11, fontWeight: 400, color: "#000000" }}>
                {offer}BDT
              </Text>
            </View>
          </View>
          <View style={{display: "flex", flexDirection: "row", justifyContent:'space-between',marginTop:6}}>
            <View>
              <Text style={{ fontSize: 10, fontWeight: 100, color: "#000000" }}>
                Remarks: {remark}
              </Text>
              <Text style={{ fontSize: 10, fontWeight: 400, color: "#737272",marginTop:6 }}>
                Date- {date}
              </Text>
            </View>
            <View>
              <View style={{display: "flex", alignItems:"flex-end"}}>
              <Image src={`${url}${icon3}`} style={{height:16, width:20}} resizeMode="cover" />

              </View>
           
              <Text style={{ fontSize: 10, fontWeight: 400, color: "#727272" }}>
                Deposit by {walletName}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DepositWithdrawCard;
