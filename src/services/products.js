import { db, auth } from "@/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export async function addProduct(name) {
    if (!auth.currentUser) throw "Usuário não autenticado";

    return await addDoc(collection(db, "products"), {
        name,
        checked: false,
        userId: auth.currentUser.uid,
        createdAt: new Date()
    });
}

export async function getMyProducts() {
    if (!auth.currentUser) throw "Usuário não autenticado";

    const q = query(
        collection(db, "products"),
        where("userId", "==", auth.currentUser.uid)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
