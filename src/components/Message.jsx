import React from "react";

export default function Message(){
	return(
		<div className="message owner">
			<div className="messageInfo">
				<img src="https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg" alt="profile_image" />
				<span>just now</span>
			</div> 
			<div className="messageContent">
				<img src="https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg" alt="picture" />
				<p>Hello</p>
			</div>
		</div>
	);
}