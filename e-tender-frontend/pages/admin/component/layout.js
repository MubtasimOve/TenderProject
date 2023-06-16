import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import SessionCheck from "./sessioncheck";
import axios from "axios";
import { useRouter } from 'next/router';

export default function MyLayout(props) {
  const router = useRouter(); 
  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/Admin/signout')
      sessionStorage.removeItem('email');
      router.push('/admin/signin');
    } catch (error) {
      console.error(error)
    }

  };

  return (
    <>
      <SessionCheck />
      <Header title={props.title} />

      <nav class="fixed top-0 z-10 flex items-center justify-between flex-wrap bg-white text-black p-2 shadow-md w-full">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Image src="/headerlogo.png" alt="me" width="164" height="100" />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" >
          <div className="text-sm lg:flex-grow" >
            <Link href="/admin/profile" className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-100 mr-4">
              Profile
            </Link>
            

          </div>
        </div>


        <button onClick={handleSignOut}>
          <img src="/logout.png" alt="logout icon" class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" />
        </button>


      </nav>



      <div className="fixed bottom-0 w-full bg-white text-black text-center shadow-lg">
        E-Tender © {new Date().getFullYear()}
      </div>
    </>
  );
}
