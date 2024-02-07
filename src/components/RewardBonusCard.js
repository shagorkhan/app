import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const DepositBonusCard = ({ bonusID, date, amount }) => {
  return (
    <View
      style={{
        paddingVertical: 7,
        paddingHorizontal: 12,
        backgroundColor: "white",
        marginBottom: 10,
        borderColor: "#97C5E6",
        borderWidth: 0.5,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 10, fontWeight: 400, color: "#000000" }}>
            Bonus ID: {bonusID}
          </Text>
          <Text
            style={{
              fontSize: 8,
              fontWeight: 400,
              color: "#858585",
              marginTop:7
            }}
          >
            {date}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:'center',
            alignItems: "center",
            gap:4,
          }}
        >
          <AntDesign name="plus" size={20} color="#407BFF" />
          <Text style={{ fontSize: 20, fontWeight: 400, color: "#407BFF" }}>
            {amount}BDT
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DepositBonusCard;
