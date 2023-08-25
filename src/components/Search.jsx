import React, { useState } from "react";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase"

export default function Search(){
	const[username, setUsername] = useState("")
	const [user, setUser] = useState(null)
	const [err, setErr] = useState(false)

	const handleSearch = () =>{

	}

	const handleKey = (e) =>{
		e.code === "Enter" && handleSearch();
	};

	return(
		<div className="search">
			<div className="searchForm">
				<input type="text" placeholder="Search Contact" onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
			</div>
			<div className="userChat">
				<img src="https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg"></img>
				<div className="userChatInfo">
					<span>Cack</span>
				</div>
			</div>
		</div>
	)
}

function handleSearch() {
	throw new Error("Function not implemented.");
}
