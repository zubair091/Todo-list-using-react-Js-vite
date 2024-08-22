import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../Config/Firebase';
export default function About() {
  const [user, setUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)

      } else {
        console.log("user is signed out")
      }
    });
    console.log("warking")
  }, [])

  return (
    <main className='py-5'>
      <div className="container">
        <div className="Row">
          <div className="col">
            <h2>Email:{user.email}</h2>
            <h2>UID:{user.uid}</h2>
          </div>
        </div>
      </div>
    </main>
  )
}
