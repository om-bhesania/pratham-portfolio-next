// TranslationsComponent.js
"use client";
import React, { useEffect, useState } from "react";
import { addDoc, updateDoc, deleteDoc, collection, doc, getDocs } from "firebase/firestore";
import { Box, Button, Input, Stack, Spinner } from "@chakra-ui/react";
import { db } from "../../hooks/firebase.config";

const TranslationsComponent = () => {
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    const fetchTranslations = async () => {
      const translationsCollection = collection(db, "translations");
      const translationSnapshot = await getDocs(translationsCollection);
      const translationList = translationSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTranslations(translationList);
      setLoading(false);
    };

    fetchTranslations();
  }, []);

  const handleAddTranslation = async () => {
    if (newKey.trim() && newValue.trim()) {
      const translationsCollection = collection(db, "translations");
      const docRef = await addDoc(translationsCollection, { key: newKey, value: newValue });
      const newTranslation = { id: docRef.id, key: newKey, value: newValue };
      setTranslations([newTranslation, ...translations]);
      setNewKey("");
      setNewValue("");
    }
  };

  const handleStartEdit = (id, currentValue) => {
    const updatedTranslations = translations.map(t => ({
      ...t,
      value: t.id === id ? currentValue : t.value // Reset other values if edited
    }));
    setTranslations(updatedTranslations);
  };

  const handleSaveTranslation = async (id, newValue) => {
    await updateDoc(doc(db, "translations", id), { value: newValue });
    setTranslations(translations.map(t => (t.id === id ? { ...t, value: newValue } : t)));
  };

  const handleDeleteTranslation = async (id) => {
    await deleteDoc(doc(db, "translations", id));
    setTranslations(translations.filter(t => t.id !== id));
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">Translations</h1>
      <Stack spacing={4} mb={4}>
        <Box display="flex" alignItems="center" gap={5}>
          <Input
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            placeholder="Key"
            className="rounded-lg px-2 py-1"
          />
          <Input
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Value"
            className="rounded-lg px-2 py-1"
          />
          <Button onClick={handleAddTranslation} className="text-white border border-white p-3 rounded-md hover:text-black hover:bg-white ease-in duration-100 active:scale-[0.9]">
            Add Translation
          </Button>
        </Box>
      </Stack>
      {translations.map((translation) => (
        <Box key={translation.id} className="flex items-center justify-between mt-4">
          <Input
            value={translation.key}
            isReadOnly
            className="w-1/3 px-2 py-1 rounded-lg"
          />
          <Input
            value={translation.value}
            onChange={(e) => handleStartEdit(translation.id, e.target.value)}
            className="w-1/2 px-2 py-1 rounded-lg"
          />
          <Button colorScheme="blue" onClick={() => handleSaveTranslation(translation.id, translation.value)} className="text-white border border-blue-500 p-3 rounded-md hover:text-black hover:bg-blue-500 ease-in duration-100 active:scale-[0.9]">
            Save
          </Button>
          <Button colorScheme="red" onClick={() => handleDeleteTranslation(translation.id)} className="text-white border border-red-500 p-3 rounded-md hover:text-black hover:bg-red-500 ease-in duration-100 active:scale-[0.9]">
            Delete
          </Button>
        </Box>
      ))}
    </div>
  );
};

export default TranslationsComponent;
