import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const useAddData = () => {
    // Function to add a new tenant and return the document ID
    const addData = async (data) => {
        try {
            const prathamDataCollectionRef = collection(db, "webdata");
            const docRef = await addDoc(prathamDataCollectionRef, data);

            // Listen for real-time updates to ensure the document is added
            onSnapshot(
                docRef,
                (doc) => {
                    if (!doc.exists()) {
                        console.warn("Document not found after adding");
                    } else {
                        console.log("Tenant added successfully:", doc.data());
                    }
                },
                (error) => {
                    console.error("Error listening to tenant document:", error);
                }
            );

            return docRef.id;
        } catch (e) {
            console.error("Error adding tenant document:", e);
            throw e;
        }
    };


    return { addTenants };
};

export default useAddData;