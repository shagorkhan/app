import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useLoader } from "../context/LoaderContext";
import { getValue } from "../functions/storage";
import NotificationCard from "../components/NotificationCard";
import getUserNotification from "../apis/getNotification";



const Notification = ({navigation}) => {
  const { showLoader, hideLoader } = useLoader();
  const [data,setData]=useState([])

  useEffect(() => {
    const loadNotifications = async () => {
      
      try {
        const token = await getValue("token");
        showLoader();
        if (!token) {
          hideLoader();
          return navigation.goBack();
        }
        const res = await getUserNotification(token);
        setData(res.data);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.error(error);
      }
    };
   loadNotifications();
  }, []);

  return (
    <View  style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardContainer}>
        {
          data?.map((d,i)=><NotificationCard
          key={i}
          title={d.title}
          description={d.details}
          date={d.date}
          read={d.read}
        ></NotificationCard>)
        }
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginTop: 20,
  },
});

export default Notification;
