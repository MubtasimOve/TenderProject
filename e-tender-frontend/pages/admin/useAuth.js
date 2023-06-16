import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export function useAuth() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if (!email) {
      router.push('/admin/signin');
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/Admin/viewprofilebyemail/${email}`);
        setUserData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [router]);

  return userData;
}
