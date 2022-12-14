import React, { useEffect, useState} from 'react'
import { MdArrowBack } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { useRouter } from 'next/router';

export default function Profile() {

    const route = useRouter();
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        fetchData();
    }, []);

    const fetchData = async () => {
          var requestOptions = {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
          fetch(
            "https://virtserver.swaggerhub.com/faqihassyfa/LesGoo/1.0.0/users",
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              const {data} = result;
              const {id, username, email, phone} = data;
              setId(id);
              setUsername(username);
              setEmail(email);
              setPhone(phone);
            })
            .catch((err) => {
              alert(err.toString())
            })
            .finally(() => setLoading(false));
    }

    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div>
        <div className='w-full h-12 bg-[#1abc9c] flex items-center'>
            <MdArrowBack id='back-to-home' className='absolute left-5' size={25} color='white' onClick={() => {route.push('/')}} />
            <h1 className='text-white text-xl mx-auto'>Profile</h1>
        </div>
        <div className='w-10/12 flex flex-col mx-auto items-center'>
            <CgProfile color='#2c3e50' size={70} className='mt-5' />
            <h1 className='text-xl mt-3'>{username}</h1>
            <div className='w-11/12 mx-auto justify-between flex mt-10'>
                <h2 className='text-lg font-regular'>EMAIL</h2>
                <p className=''>{email}</p>
            </div>
            <div className='w-11/12 mx-auto justify-between flex'>
                <h2 className='text-lg font-regular'>PHONE</h2>
                <p className=''>{phone}</p>
            </div>
        </div>
        <div className='w-full flex mt-5'>
            <button id='btn-editprofile' className='p-2 text-xs mx-auto rounded-full text-white bg-[#3498db]' onClick={() => {route.push('/editprofile')}}>Edit Profile</button>
        </div>
    </div>
  )
}
