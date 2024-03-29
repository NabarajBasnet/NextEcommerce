'use client'

'use client';

import { useEffect, useState } from "react";

const Fashion = () => {
    const api_url = `https://jsonplaceholder.typicode.com/users`;
    const [searchedWord, setSearchedWord] = useState('');
    const [fetchedUsers, setFetchedUsers] = useState([]);

    const getUsers = async () => {
        const res = await fetch(api_url);
        const data = await res.json();
        setFetchedUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [searchedWord]);

    return (
        <>
            <div>
                <h1>Fashion</h1>
                <h1>Searched word: {searchedWord}</h1>
                <form>
                    <input className="border-2 rounded w-full h-10" type="text" placeholder="Search users..." value={searchedWord} onChange={(e) => setSearchedWord(e.target.value)} />
                </form>

                <div>
                    {fetchedUsers.filter((user) => {
                        if (fetchedUsers === '') {
                            return user;
                        }
                        else if (
                            user.name.toLowerCase().includes(searchedWord.toLowerCase())
                        ) {
                            return user;
                        }
                        return null; // Return null if condition isn't met
                    }).map((user, i) => (
                        <div key={i}>
                            <ul>
                                <li>{user.name}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Fashion; 
