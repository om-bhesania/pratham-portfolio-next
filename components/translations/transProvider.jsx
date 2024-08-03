// TranslationProvider.js
import React, { createContext, useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../hooks/firebase.config';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const translationsCollection = collection(db, 'translations');
    const unsubscribe = onSnapshot(translationsCollection, (snapshot) => {
      const translationsData = [];
      snapshot.forEach(doc => {
        translationsData.push({ id: doc.id, ...doc.data() });
      });
      setTranslations(translationsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <TranslationContext.Provider value={{ translations, loading }}>
      {children}
    </TranslationContext.Provider>
  );
};
