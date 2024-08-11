// src/App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'routes'; // Adjust the import path as per your project structure
import ScrollTop from 'components/ScrollTop'; // Adjust the import path as per your project structure
import ThemeCustomization from 'themes';
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext'; // Adjusted path

export default function App() {
  return (
    <CustomThemeProvider>
      <ThemeCustomization>
        <ScrollTop>
          <RouterProvider router={router} />
        </ScrollTop>
      </ThemeCustomization>
    </CustomThemeProvider>
  );
}
