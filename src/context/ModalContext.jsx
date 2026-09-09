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
  cookieSettingsOpen: false,
  openCookieSettings: () => {},
  closeCookieSettings: () => {},
});

export function ModalProvider({ children }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState('');
  const [remoteSupportOpen, setRemoteSupportOpen] = useState(false);
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

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

  const openCookieSettings = () => {
    setCookieSettingsOpen(true);
  };

  const closeCookieSettings = () => {
    setCookieSettingsOpen(false);
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
        cookieSettingsOpen,
        openCookieSettings,
        closeCookieSettings,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}



export function useModal() {

  return useContext(ModalContext);

}

