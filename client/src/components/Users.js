import { useEffect, useState } from 'react';
import { getUsers, getAddresses } from '../api/dataFetch';
import UserItem from './UserItem';
import UserDetails from './UserDetails';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [isCurrent, setIsCurrent] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [current, setCurrent] = useState({});
    // fetch data and set state
    const getAllUsers = async () => {
        const allUsers = await getUsers();
        if(allUsers) setUsers(allUsers);
    }
    const getAllAddresses = async () => {
        const allAddresses = await getAddresses();
        if(allAddresses) setAddresses(allAddresses);
    }
    // sets "current" state on component button click 
    const handleDetailBtn = (id) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id && addresses[i].id === id) {
                setIsCurrent(true);
                setCurrent({ ...current, user: users[i], address: addresses[i]});
            }
        }
    }

    useEffect(() => {
        getUsers();
        getAddresses();
        getAllUsers();
        getAllAddresses();
        if (isCurrent) {
            document.title = "Details";
        } else {
            document.title = "Users";
        }
        setIsLoading(false);
    }, [isCurrent, current, users])
    
    if (!users) {
        return <h1 className='center-text m-heading'>No Users Found!</h1>
    } else {
        return (
            <main className='user-list'>
                <h1 className='center-text m-heading'>{isCurrent ? "User Details" : "All Users"}</h1>
                    {isCurrent && users ? <UserDetails 
                    current={current}
                    setCurrent={setCurrent}
                    isCurrent={isCurrent}
                    setIsCurrent={setIsCurrent}
                    isLoading={isLoading}
                /> 
                : users.map((person => {
                    const { id, name, first_name, email } = person;
                    return <UserItem 
                    key={id} 
                    id={id} 
                    firstName={first_name}
                    name={name} 
                    email={email} 
                    users={users} 
                    addresses={addresses} 
                    setCurrent={setCurrent}
                    handleDetailBtn={handleDetailBtn}
                    isLoading={isLoading}
                    /> 
                }))}
            </main>
        )}
}

export default Users;