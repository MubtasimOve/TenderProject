import { useState, useEffect } from "react";
import MyLayout from "@/pages/admin/component/layout";
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useAuth } from "./useAuth";
import Swal from 'sweetalert2'

export default function UpdateProfile() {


    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const user = useAuth();


    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        const form = {
            name: data.name,
            email: data.email,
            area: data.area,
            address: data.address,
            password: user.password,
            ImgfileName: user.ImgfileName,
            id: user.id,
        };

        try {
            const response = await axios.put(`http://localhost:3000/Admin/update`, form);
            Swal.fire(
                'Update Successful!',
                'Go Back to Profile!',
                'success'
            )
            router.push('/admin/profile')
            reset();
        } catch (error) {
           
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Update unsuccessful!'

            })
        }
    };


    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <MyLayout title="Profile" />

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10">
                <br></br>
                <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
                <div>
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('name', { required: true })}
                        defaultValue={user.name}
                    />
                    {errors.name && <p className="text-red-500">Name is required</p>}
                </div>

                <div>
                    <label htmlFor="area" className="block font-medium">Area</label>
                    <input
                        type="text"
                        id="area"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('area', { required: true })}
                        defaultValue={user.area}
                    />
                    {errors.area && <p className="text-red-500">Area is required</p>}
                </div>


                <div>
                    <label htmlFor="address" className="block font-medium">Address</label>
                    <input
                        type="text"
                        id="address"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('address', { required: true })}
                        defaultValue={user.address}
                    />
                    {errors.address && <p className="text-red-500">Address is required</p>}
                </div>


                <div>                 
                    <input
                        type="hidden"
                        id="email"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                        defaultValue={user.email}
                    />
                    {errors.email && (
                        <p className="text-red-500">
                            {errors.email.type === 'required'
                                ? 'Email is required'
                                : 'Invalid email address'}
                        </p>
                    )}
                </div>
                <br></br>
                <button
                    type="submit"
                    className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Update
                </button>
            </form>
        </>
    );
}
