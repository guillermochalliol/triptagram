import { useState, useEffect } from "react";
import { appFirestore } from "../firebase/config";


const useFirestore = (collection, userId) => {
    const [docs, setDocs] = useState([]);
console.log(userId)
    useEffect(() => {
        const unsub = appFirestore.collection(collection);
        unsub.where('userId', '==', userId || "")
            .onSnapshot((querySnapshot) => {
                let documents = [];
                querySnapshot.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            });
    }, [collection, userId])

    return { docs };
};

export default useFirestore;