// useTranslation.js
"use client";
import { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

const useTranslations = () => {
  const [translations, setTranslations] = useState({});
  const translationsCollection = collection(db, 'translations');

  useEffect(() => {
    const unsubscribe = onSnapshot(translationsCollection, (snapshot) => {
      const translationsData = {};
      snapshot.forEach(doc => {
        translationsData[doc.id] = doc.data().value;
      });
      setTranslations(translationsData);
    });

    return () => unsubscribe();
  }, []);

  const addTranslation = async (key, value) => {
    try {
      await addDoc(translationsCollection, { key, value });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const getTranslationByKey = (key) => {
    return translations[key] || null;
  };

  return { translations, addTranslation, getTranslationByKey };
};

export default useTranslations;
