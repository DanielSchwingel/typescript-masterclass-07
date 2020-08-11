import React, { useState, useEffect } from 'react';
import api from './services/api';
import User from './components/Users';

interface IUser{
	name: string;
	email: string;
}

function App() {
	const [users, setUsers] = useState<Array<IUser>>([]);

	useEffect(()=>{
		api.get<Array<IUser>>('/users').then(response => {
			setUsers(response.data)
		})
	},[])

	return (
		<div>
			{users.map(user => 
				<User key={user.email} user={user}/>
			)}
		</div>
	);
}

export default App;
