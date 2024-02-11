//import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
  StatusBar,
} from "native-base";
import { useAuth } from "../context/AuthProvider";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-elements/dist/helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLoader } from "../context/LoaderContext";
import getWallets from "../apis/getWallets";
import { getValue } from "../functions/storage";
import url from "../apis/url";
import getPromotions from "../apis/getPromotions";
import Input from "../components/Input";
const { width, height } = Dimensions.get("window");

const DepositScreen = ({ navigation }) => {
  const { user, setUser } = useAuth();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const inset = useSafeAreaInsets();
  const [wallets, setWallets] = useState();
  const { showLoader, hideLoader } = useLoader();
  const [channel, setChannel] = useState("Cash Out");
  const [promotions,setPromotions]=useState()
  const [selectPromotions,setSelectPromotion]=useState()

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    // Add logic to handle the selected payment method (e.g., navigate to the next screen)
  };
  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
  };
  useEffect(() => {
    const func = async (channel) => {
      try {
        showLoader()
        const token = await getValue("token");
        const wal = await getWallets(token, channel);
        setWallets(wal.data);
        hideLoader()
      } catch (error) {
        hideLoader()
        console.error(error);
      }
    };
    func(channel);
  }, [channel]);
  useEffect(() => {
    const func = async () => {
      try {
        showLoader()
        const promo = await getPromotions();
        setPromotions(promo.data);
        hideLoader()
      } catch (error) {
        hideLoader()
        console.error(error);
      }
    };
    func();
  }, []);
  //console.log(user)
  if (!user) {
    navigation?.navigate("Login");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />

      <View style={[styles.container, { marginTop: inset.top }]}>
        <Text style={{ fontSize: 35, textAlign: "center", marginBottom: 15 }}>
          Deposit
        </Text>
        <Text style={{ fontSize: 13, textAlign: "center" }}>
          With your tasted wallet and explore more
        </Text>
        <Text style={{ fontSize: 13, textAlign: "center", marginBottom: 25 }}>
          gaming features with our client area
        </Text>
        <Text style={{ fontSize: 14, marginTop: 0, marginBottom: 10 }}>
          Deposit Channel
        </Text>
        <View style={{flexDirection:"row",gap:6}}>
          {["Cash Out", "Send Money"].map((d,i) => (
            <TouchableOpacity key={i}
              style={[
                styles.paymentOption2,
                channel === d && styles.selectedPayment,
              ]}
              onPress={() => setChannel(d)}
            >
              <Text style={styles.paymentText}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={[styles.title,{marginTop:15,marginBottom:5}]}>Select Payment Method</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
         {wallets?.map((wallet,i) => (
           <TouchableOpacity key={i}
           style={[
             styles.paymentOption,
             selectedPayment === wallet?._id&& styles.selectedPayment,
           ]}
           onPress={() => handlePaymentSelection(wallet?._id)}
         >
           <Image
             source={{
               uri: url+wallet?.icon
             }}
             style={styles.paymentLogo}
           />
         </TouchableOpacity>
         ))}
        </View>

        <Text style={{ fontSize: 14, marginTop: 20 }}>
          Amount 200 Taka- 25,000 Taka{" "}
        </Text>
        <View style={styles.amountContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.amountOption,
                selectedAmount === 200 && styles.selectedAmount,
              ]}
              onPress={() => handleAmountSelection(200)}
            >
              <Text
                style={[
                  styles.amountText,
                  { color: selectedAmount === 200 ? "white" : "black" },
                ]}
              >
                200
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.amountOption,
                selectedAmount === 500 && styles.selectedAmount,
              ]}
              onPress={() => handleAmountSelection(500)}
            >
              <Text
                style={[
                  styles.amountText,
                  { color: selectedAmount === 500 ? "white" : "black" },
                ]}
              >
                500
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.amountOption,
                selectedAmount === 1000 && styles.selectedAmount,
              ]}
              onPress={() => handleAmountSelection(1000)}
            >
              <Text
                style={[
                  styles.amountText,
                  { color: selectedAmount === 1000 ? "white" : "black" },
                ]}
              >
                1,000
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.amountOption,
                selectedAmount === 5000 && styles.selectedAmount,
              ]}
              onPress={() => handleAmountSelection(5000)}
            >
              <Text
                style={[
                  styles.amountText,
                  { color: selectedAmount === 5000 ? "white" : "black" },
                ]}
              >
                5,000
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.amountOption,
                selectedAmount === 10000 && styles.selectedAmount,
              ]}
              onPress={() => handleAmountSelection(10000)}
            >
              <Text
                style={[
                  styles.amountText,
                  { color: selectedAmount === 10000 ? "white" : "black" },
                ]}
              >
                10,000
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.amountOption,
                selectedAmount === 20000 && styles.selectedAmount,
              ]}
              onPress={() => handleAmountSelection(20000)}
            >
              <Text
                style={[
                  styles.amountText,
                  { color: selectedAmount === 20000 ? "white" : "black" },
                ]}
              >
                20,000
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Input
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
        />
        <Text style={{ fontSize: 14 }}>Deposit Bonus </Text>

        <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {}}
        >
          <Select.Item  label={"No Bonus"} value={""} />
          {promotions?.map((doc,i)=>(
               <Select.Item key={i} label={doc?.title} value={doc?._id} />
          ))}
        </Select>

        <TouchableOpacity style={styles.depositButton}>
          <Text style={[styles.paymentText, { color: "white" }]}>Deposit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  title: {
    fontSize: 14,
    //fontWeight: 'bold',
    marginBottom: 5,
  },
  paymentOption: {
    backgroundColor: "#e0e0e0",
    //padding: 10,
    //marginHorizontal: 5,
    //width: 80,
    //height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  paymentOption2: {
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    borderRadius: 10,
    width:130,
   
    padding: 10,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedPayment: {
    // backgroundColor: 'blue', // Change the color for the selected payment method
    borderColor: "#3B82F6",
    borderWidth: 2,
  },
  paymentLogo: {
    width: width / 4 - 22,
    height: width / 4 - 22,
    //marginBottom: 10,
    borderRadius: 10,
  },
  amountContainer: {
    //alignItems: 'center',
  },
  row: {
    flexDirection: "row",
    // justifyContent: 'space-around',
    gap: 5,
    rowGap: 1,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  amountOption: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginVertical: 5,
    width: 100,
    alignItems: "center",
    borderRadius: 7,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedAmount: {
    backgroundColor: "#3B82F6",
    borderColor: "white",
  },
  depositButton: {
    backgroundColor: "#3B82F6",
    padding: 10,
    //marginHorizontal: 30,
    //width: "100%",
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 100,
    marginBottom:10
  },
});

export default DepositScreen;
