// Translation.js
import React, { useContext } from 'react';
import { TranslationContext } from './transProvider';


const Translation = ({ translationKey }) => {
  const { translations, loading } = useContext(TranslationContext);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!translations || translations.length === 0) {
    console.error('Translations not available or empty:', translations);
    return <span>Translations not available</span>;
  }

  // Find the translation value directly from the translations array
  const translation = translations.find(item => item.key === translationKey);

  // If translation value is found, display it; otherwise, show a fallback message
  const translationValue = translation ? translation.value : `Translation not found for key: ${translationKey}`;

  return <>{translationValue}</>;
};

export default Translation;
