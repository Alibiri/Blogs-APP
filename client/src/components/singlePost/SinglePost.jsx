import React from 'react'
import './singlePost.css'
import photo from '../../assets/4.jpg'
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={photo} alt="" className="singlePostImg"
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet .
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet aliquam aperiam at est temporibus excepturi earum 
                    sed ducimus suscipit hic. Vero laborum,
                    similique reiciendis fugit animi libero
                    beatae voluptatem laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet aliquam aperiam at est temporibus excepturi earum 
                    sed ducimus suscipit hic. Vero laborum,
                    similique reiciendis fugit animi libero
                    beatae voluptatem laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet aliquam aperiam at est temporibus excepturi earum 
                    sed ducimus suscipit hic. Vero laborum,
                    similique reiciendis fugit animi libero
                    beatae voluptatem laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet aliquam aperiam at est temporibus excepturi earum 
                    sed ducimus suscipit hic. Vero laborum,
                    similique reiciendis fugit animi libero
                    beatae voluptatem laudantium.</p>
            </div>
        </div>
    )
}
