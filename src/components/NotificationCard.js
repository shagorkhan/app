import React from "react";
import { View, Text } from "react-native";

const NotificationCard = ({ title, description, date,read }) => {
  return (
    <View
      style={{
        paddingVertical: 7,
        paddingHorizontal: 12,
        backgroundColor: `${read? 'white': "#CEDDFF"}`,
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
       
          <Text style={{ fontSize: 10, fontWeight: 400, color: "#000000" }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 8,
              fontWeight: 400,
              color: `${read? '#000000': "#FF0000"}`,
              marginTop:7
            }}
          >
            {read || 'UNREAD'}
          </Text>
       </View>
       <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 10, fontWeight: 400, color: "#000000",width:244 }}>
            {description}
        </Text>
       <Text style={{ fontSize: 8, fontWeight: 400, color: "#858585" }}>
            {date}
          </Text>
      </View>
  );
};

export default NotificationCard;
