'use client';



import React, { createContext, useContext, useState } from 'react';



const ModalContext = createContext({

  bookingOpen: false,

  bookingTopic: '',

  openBooking: (topic = '') => {},

  closeBooking: () => {},

  remoteSupportOpen: false,

  openRemoteSupport: () => {},

  closeRemoteSupport: () => {},

});



export function ModalProvider({ children }) {

  const [bookingOpen, setBookingOpen] = useState(false);

  const [bookingTopic, setBookingTopic] = useState('');

  const [remoteSupportOpen, setRemoteSupportOpen] = useState(false);



  const openBooking = (topic = '') => {

    setBookingTopic(topic);

    setBookingOpen(true);

  };



  const closeBooking = () => {

    setBookingOpen(false);

  };



  const openRemoteSupport = () => {

    setRemoteSupportOpen(true);

  };



  const closeRemoteSupport = () => {

    setRemoteSupportOpen(false);

  };



  return (

    <ModalContext.Provider

      value={{

        bookingOpen,

        bookingTopic,

        openBooking,

        closeBooking,

        remoteSupportOpen,

        openRemoteSupport,

        closeRemoteSupport,

      }}

    >

      {children}

    </ModalContext.Provider>

  );

}



export function useModal() {

  return useContext(ModalContext);

}

