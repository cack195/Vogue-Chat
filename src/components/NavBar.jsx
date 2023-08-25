import React, { useContext } from "react";
import {signOut} from "firebase/auth"
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function NavBar(){
	const {user} = useContext(AuthContext)
	return(
		<div className="navbar">
			<span className="logo">Vogue Chat</span>
			<div className="user">
				<img src={user.photoURL} alt="photo" />
				<span id="userName">{user.displayName}</span>
				<button onClick={()=>signOut(auth)}>logout</button>
			</div>
		</div>
	)
}