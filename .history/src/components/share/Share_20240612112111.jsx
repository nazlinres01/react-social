import "./share.css"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop"></div>
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="What's  in your mind Safak?" className="shareInput" />
                <div className="shareBottom"></div>
            </div>
        </div>
    )
}
