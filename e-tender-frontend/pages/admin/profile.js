import { useAuth } from './useAuth';
import MyLayout from '@/pages/admin/component/layout';
import UserLayout from './component/userdata';
import router from 'next/router';

import Swal from 'sweetalert2'


export default function GetUsers() {
  const userData = useAuth();

  const handleUpdateClick = () => {
    router.push(`/admin/update`);
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/Admin/delete/${userData.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        router.push("/admin/signin");
      })
      .catch(error => console.log(error)); // handle the error


  };

  return (
    <div className="bg-white-50 min-h-screen mt-8" >
      <MyLayout title="Profile" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userData ? <UserLayout data={userData} /> : <p>Loading...</p>}


        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleUpdateClick}
          >
            Update
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
