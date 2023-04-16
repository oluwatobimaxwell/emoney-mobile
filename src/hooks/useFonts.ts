import { useState, useEffect } from "react";
import * as Font from "expo-font";

const useLoadFont = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fonts = {
    Regular: require('@fonts/GalanoGrotesqueAlt.otf'),
    Thin: require('@fonts/GalanoGrotesqueAltThin.otf'),
    Bold: require('@fonts/GalanoGrotesqueAltSemiBold.otf'),
    SemiBold: require('@fonts/GalanoGrotesqueAltExtraBold.otf'),
    ExtraBold: require('@fonts/GalanoGrotesqueAltBold.otf'),
    Italic: require('@fonts/GalanoGrotesqueAltItalic.otf'),
    Light: require('@fonts/GalanoGrotesqueAltLight.otf'),
    Medium: require('@fonts/GalanoGrotesqueAltMedium.otf'),
  };
  

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync(fonts);
        setIsLoaded(true);
      } catch (err) {
        setError(err as any);
      }
    };

    loadFonts();
  }, []);

  return { isLoaded, error };
};

export default useLoadFont;
