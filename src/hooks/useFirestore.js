import { useState, useEffect } from "react";
import { appFirestore } from "../firebase/config";

const useFirestore = (collection) => {

    const [docs, setDocs] =  useState([]);

    useEffect (()=> {
        const unsub = appFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
            .onSnapshot((snapShot) => {
                let documents =[];
                snapShot.forEach(doc => {
                    documents.push ({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });

        return () => unsub(); 
    }, [collection])

    return { docs };
};
 export default useFirestore;