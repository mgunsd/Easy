import React, { useState } from 'react'
import { Appearance } from 'react-native-appearance'
import { themes } from '../components';

const deviceMode = Appearance.getColorScheme();
export const ThemeContext = React.createContext({ colors: themes[deviceMode] });
export const useTheme = () => React.useContext(ThemeContext);

const ThemeManager = ({ children }) => {
  const [mode, setMode] = useState(deviceMode)
  return (
    <ThemeContext.Provider value={{ colors: themes[mode], setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeManager;