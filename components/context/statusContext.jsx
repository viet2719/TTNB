import React, { useState } from "react";

const dataStatus = [
   {
      id: 1,
      avatar: "/img/group/mu1.jpg",
      name: "Thức Đẹp Trai",
      feel: "Đang cảm thấy lo lắng",
      withs: "cùng với",
      friend: "Nguyễn Thế Đạt",
      address: "Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội",
      content: "Win rồi ",
      collection: "/img/group/tq5.jpg",
      at: "tại",
      time: "2 ngày trước",
      videoSrc: "",
   },
   {
      id: 2,
      avatar: "/img/group/mu1.jpg",
      name: "Thức Đẹp Trai",
      feel: "Đang cảm thấy vô cùng đau đầu",
      withs: "",
      friend: "",
      address: "",
      content: "ok",
      collection: "/img/group/tq5.jpg",
      at: "",
      time: "5 ngày trước",
      videoSrc: "/img/group/ta_xua.mp4",
   },
   {
      id: 3,
      avatar: "/img/group/mu1.jpg",
      name: "Thức Đẹp Trai",
      feel: "",
      withs: "",
      friend: "",
      address: "",
      content: "Một ngày đẹp trời",
      collection: "/img/group/tq5.jpg",
      at: "",
      time: "6 ngày trước",
      videoSrc: "",
   },
   {
      id: 4,
      avatar: "/img/group/mu1.jpg",
      name: "Thức Đẹp Trai",
      feel: "Đang cảm thấy lo lắng",
      withs: "",
      friend: "",
      address: "Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội",
      content: " Chill",
      collection: "",
      at: "tại",
      time: "9 ngày trước",
      videoSrc: "/img/group/ta_xua.mp4",
   },
];

export const StatusCOntext = React.createContext();

export const StatusDataContext = ({ children }) => {
   const [dataStatusContext, setDataStatusContext] = useState(dataStatus);
   return <StatusCOntext.Provider value={{ dataStatusContext, setDataStatusContext }}>{children}</StatusCOntext.Provider>;
};
