import { useState, useEffect } from 'react';
import { appStorage, appFirestore, timestamp } from '../firebase/config';

const useStorage = (file, title, description, userId) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = appStorage.ref(file.name);
        const collectionRef = appFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, title, description, userId, createdAt });
            setUrl(url);
        });
    }, [file, title, description, userId]);

    return { progress, url, error };
}

export default useStorage;