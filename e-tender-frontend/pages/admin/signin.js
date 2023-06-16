import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Swal from 'sweetalert2'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/Admin/signin', { email, password })
      var b = response.data;
      if (b) {
        sessionStorage.setItem('email', response.data);
        router.push("/admin/profile");
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Wrong Credentials',
          text: 'Try again'
        })
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Wrong Credentials',
        text: 'Try again'
      })
    }
  }

  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </Head>
      <div className="flex justify-center items-center mt-12">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-2" />
        <h2 className="text-2xl font-bold">Welcome To E-Tender</h2>
      </div>


      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-12">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>

      <div className="flex justify-center items-center mt-12">
        <button
          type="button"
          onClick={() => router.push('/admin/signup')}
          className="mt-4 block underline hover:text-blue-500"
        >
          Not Reigterd yet ? Click here to Sign Up
        </button>
      </div>
    </>
  )
}
