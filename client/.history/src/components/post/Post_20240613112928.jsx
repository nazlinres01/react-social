import { MoreVert } from "@material-ui/icons"
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">Safak Kocaoglu</span>
                        <span className="postDate">5 mins ago</span>

                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post:)</span>
                    <img className="postImg" src="assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft"></div>
                    <div className="postBottomRight"></div>

                </div>

            </div>

        </div>
    )
}
