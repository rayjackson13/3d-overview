// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  storageBucket: process.env.NEXT_PUBLIC_BUCKET,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const getFileLink = async (path: string): Promise<string | undefined> => {
  try {
    return await getDownloadURL(ref(storage, path));
  } catch (e) {
    console.error(e);
  }
};
