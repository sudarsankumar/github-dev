import React, { useEffect } from 'react'
import './Repositories.css'
import Logo from './github.png'
import Repository from '../Repository/Repository'

const Repositories = ({userName, data, repos}) => {
	let repositories = []
	console.log(data.data);
	console.log(repos.data);
	for(let i = 1; i <= 4; i++ ){
		repositories.push(repos.data[`${i}`])
	}
	console.log(repositories);
	return (
		<div className="repository-container">
			<div className="repositories-container">
				<div className="banner">
					<div className="banner-section1">
						<img src={Logo} alt="" />
					</div>
					<div className="banner-section2">
						<div className="follower-details">
							<div className="text">Followers</div>
							<div className="number">{data.data.followers}</div>
						</div>
						<div className="follower-details">
							<div className="text">Following</div>
							<div className="number">{data.data.following}</div>
						</div>
						<div className="follower-details">
							<div className="text">Location</div>
							<div className="number">{data.data.location}</div>
						</div>
					</div>
				</div>
				<div className="git-content">
					<div className="heading">GitHub</div>
					<div className="description">How people build software.</div>
				</div>
				<div className="repository">
					{
						repositories.map(repository => {
							return <Repository repo={repository} />
						})
					}
				</div>
				<div className="footer">View all repositories</div>
			</div>
		</div>
	)
}

export default Repositories