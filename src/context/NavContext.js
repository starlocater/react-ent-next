'use client'

import React, { createContext, useState, useContext } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen, isGuideOpen, setIsGuideOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);