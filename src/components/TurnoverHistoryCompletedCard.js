import React from "react";
import { View, Text, Image } from "react-native";
import url from "../apis/url";

const TurnoverHistoryCompletedCard = ({
  title,
  completed,
  confirmation,
  date,
}) => {
  return (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 10,
      }}
    >
      <View style={{}}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 16, fontWeight: 400, color: "#000000",marginBottom:1 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: 400, color: "#E8B500" }}>{completed}</Text>
          <Text style={{ fontSize: 10, fontWeight: 400, color: "#616161" }}>{confirmation}</Text>

          {/* <ProgressBarComponent 
          completed={parseInt(completedAmount)} 
          target={parseInt(targetAmount)}
          ></ProgressBarComponent> */}
          
          <Text style={{ fontSize: 8, fontWeight: 400, color: "#616161" }}>{date}</Text>
      </View>
    </View>
  );
};

export default TurnoverHistoryCompletedCard;


// const ProgressBarComponent = ({ completed, target }) => {
//   // Calculate the percentage completed
//   const percentage = (completed / target) * 100;

//   return (
//     <View>
//       <View style={{ flexDirection: 'row', height: 10, borderRadius:10, backgroundColor:'#D9D9D9' }}>
//         <View style={{ backgroundColor: '#407BFF',borderRadius:10, width: `${percentage}%` }} />
//       </View>
//       <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               marginVertical:3
//             }}
//           >
//             <Text style={{ fontSize: 10, fontWeight: 400, color: "#000000" }}>
//               {completed}/{target}
//             </Text>
//             <Text
//               style={{
//                 fontSize: 10,
//                 fontWeight: 400,
//                 color: "#000000",
//               }}
//             >
//             {percentage}%
//             </Text>
//           </View>
//     </View>
//   );
// };
