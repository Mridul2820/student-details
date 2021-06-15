import { db } from '../firebase/firebase'

export async function fetchStudentData(){
    const result = await db.collection('students').get()

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
  
    return user;
} 