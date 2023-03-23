import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export const getCurrentUser = () => { 
 const [currentUser, setCurrentUser] = useState<string | null>(null);
  useEffect(() => {
    // const userData = async () => { 
    //   const user = await axios.get('http://localhost:3000/current_user')
    //   console.log(user)
    //   setCurrentUser(user.data)
    // }
    const userId = localStorage.getItem('userId')
    setCurrentUser(userId)
  }, []);

  return currentUser;
}