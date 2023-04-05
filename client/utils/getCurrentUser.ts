import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const getCurrentUser = () => { 
 const [currentUser, setCurrentUser] = useState<string | null>(null);
  useEffect(() => {
    const userId:string = Cookies.get('userId')!.toString();
    setCurrentUser(userId);
  }, []);

  return currentUser;
}