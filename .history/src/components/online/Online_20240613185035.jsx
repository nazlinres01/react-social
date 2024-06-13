import "./online.css"

export default function Online(user) {
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
    )
}
