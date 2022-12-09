import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function getItems() {
    const documents = await getDocs(collection(db, "meals"));

    const loadedItems = [];
    documents.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        loadedItems.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price
        });
      });
    return loadedItems;
}

export async function orderItems(userData, cartData) {
    const docRef = await addDoc(collection(db, 'orders'), {
        userData: userData,
        cartData: cartData
    });
    console.log(docRef.id);
}