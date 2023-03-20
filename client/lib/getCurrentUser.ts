import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const getCurrentUser = () => { 
 const [currentUser, setCurrentUser] = useState<string | null>(null);
  useEffect(() => {
    const userId = localStorage.getItem('userId')
    setCurrentUser(userId)
  }, []);

  return currentUser;
}