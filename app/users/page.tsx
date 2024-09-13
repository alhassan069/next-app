import React from 'react'

type Props = {}

interface User {
    id: number;
    name: string;
    email: string;

}

const Userspage = async (props: Props) => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache: 'no-store'});
   const users: User[] = await res.json();
  return (
    <div>
        <h1>
            Users
        </h1>
        <p>Render time {new Date().toLocaleTimeString()}</p>
        <table className='table table-zebra mx-4'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user=> <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>)}

            </tbody>
        </table>
        <ul>
        </ul>
    </div>
  )
}

export default Userspage