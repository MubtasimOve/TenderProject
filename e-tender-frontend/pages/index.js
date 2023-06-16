import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className="block">Welcome to PetShopper</span>
              <span className="block text-indigo-600">Make Your Projects Shine</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl">
            Pet Shopper is your one-stop-shop for everything your pet needs. From premium quality pet food to a wide range of medicines and expert advice from our experienced staff, we have everything you need to keep your pet healthy and happy.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </a>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="flex flex-col justify-between h-full">
              <div className="mx-auto w-full rounded-lg shadow-lg overflow-hidden lg:max-w-md">
                <img src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/271244379_1949090778604529_7217950559904637260_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2Dz2CNIn3_UAX_-gFSU&_nc_ht=scontent.fdac27-2.fna&oh=00_AfByxA0aKkOSvn0e4ixQe5BrkiW4fk3_FVAK0IrVUXxVqQ&oe=64670EE5" alt="Landing page" className="w-full" />
              </div>
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">Choose Your Role</h2>
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
                  
                  <a href="http://localhost:8001/admin/signin" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    Admin
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
