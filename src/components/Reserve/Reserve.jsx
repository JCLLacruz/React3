import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reserve.css';

const Reserve = () => {
	const navigate = useNavigate();

	const initialState = {
		name: '',
		email: '',
		date: '',
		time: '',
		guests: '',
	};

	const [data, setData] = useState(initialState);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		localStorage.reserves += JSON.stringify(data);
		setData(initialState);
		navigate('/');
	};

	const validateForm = () => {
		switch (true) {
			case !data.name:
				setMessage('We need a name');
				setBtnDisabled(true);
				break;
			case data.name.length < 3:
				setMessage('Name must be at least 3 characters');
				setBtnDisabled(true);
				break;
			case data.email == '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/':
				setMessage('Insert valid email');
				setBtnDisabled(true);
				break;
			case !data.date:
				setMessage('Date must be defined');
				setBtnDisabled(true);
				break;
			case !data.time:
				setMessage('Time must be defined');
				setBtnDisabled(true);
				break;
			case !data.guests:
				setMessage('Number of guest must be defined');
				setBtnDisabled(true);
				break;
			default:
				setMessage('');
				setBtnDisabled(false);
				break;
		}
	};
	useEffect(() => {
		validateForm();
	}, [data]);

	return (
		<>
			<form id='reserveForm' onSubmit={handleOnSubmit}>
				<h1>Reserve</h1>
				<div>
					<label htmlFor='name'>Name: </label>
					<input type='text' name='name' id='name' placeholder='Insert your name' onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor='email'>Email: </label>
					<input type='email' name='email' id='email' placeholder='Your email' onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor='date'>Date: </label>
					<input type='date' name='date' id='date' placeholder='Date of reservation' onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor='time'>Time: </label>
					<input type='time' name='time' id='time' placeholder='Time of reservation' onChange={handleInputChange} />
				</div>
				<div>
					<label htmlFor='guests'>Number of guests: </label>
					<input type='number' name='guests' id='guests' placeholder='Number of guests' onChange={handleInputChange} />
				</div>
				<div>
					<input type='submit' name='submit' id='submit' value='Submit' placeholder='Submit' onChange={handleInputChange} disabled={btnDisabled} />
				</div>
			</form>
			<h2>{message}</h2>
		</>
	);
};

export default Reserve;
