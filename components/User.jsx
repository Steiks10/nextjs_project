"use client";
import Link from 'next/link';

function User({user}) {
  return (
    <Link key={user.id} href={`/users/${user.id}`}>
      <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md
        text-black flex justify-between"
        onClick={() =>{
          alert(user.id)
        }}>
          <div>
            <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
            <p className="text-slate-100">email: {user.email}</p>
            <img src={user.avatar} className="rounded-full w-20"/>
          </div>
      </li>
    </Link>
  )
}

export default User