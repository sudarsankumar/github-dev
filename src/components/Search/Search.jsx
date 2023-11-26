import React, { useState} from 'react'
import Repositories from '../Repositories/Repositories'
import './Search.css'
import axios from 'axios'

const Search = () => {
	let repositories = []
	const [userName, setUserName] = useState("sudarsankumar")
	const [userRepo, setUserRepo] = useState("")
	const url = "https://api.github.com/users/"
	const [data, setData] = useState("")
	const handleUserNameChange = (e) => {
		setUserName(e.target.value)
	}
	const fetchData = () => {
		console.log(userName);
		const fetchUrl = `${url}${userName}`
		axios.get(fetchUrl).then((response) => {
			setData(response)
			axios.get(`${fetchUrl}/repos`).then((response) => {
				setUserRepo(response)
				for(let i = 1; i <= 4; i++ ){
					repositories.push(userRepo.data[`${i}`])
				}
			})
			console.log(data);
			console.log(userRepo);
			console.log(repositories);
		})
	}
	return (
		<div className="container">
			<div className="search-container">
				<div className="search-div">
					<div onClick={fetchData} className='search-btn'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="11" cy="11" r="7" stroke="#97A3B6" stroke-width="2"/>
							<path d="M20 20L17 17" stroke="#97A3B6" stroke-width="2" stroke-linecap="round"/>
						</svg>
					</div>
					<input type="text" name="userName" id="userName" value={userName} onChange={handleUserNameChange} />
				</div>
			</div>
			<div className="repo-container">
				{
					data !== "" && userRepo !== "" &&
					<Repositories userName={userName} data={data} repos={userRepo} />
				}
			</div>
		</div>
	)
}

export default Search