import React from 'react'
import './post.css'
import img3 from '../../assets/3.jpg'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={img3} alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">i love enjoying my life.
                </span>
                <hr/>
                <span className="postDate">1 hour ago.</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic dolore, qui nobis voluptate nemo eveniet a in rem harum suscipit velit veniam debitis ratione dicta nihil aliquid. Quas, tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic dolore, qui nobis voluptate nemo eveniet a in rem harum suscipit velit veniam debitis ratione dicta nihil aliquid. Quas, tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic dolore, qui nobis voluptate nemo eveniet a in rem harum suscipit velit veniam debitis ratione dicta nihil aliquid. Quas, tempore!</p>
        </div>
    )
}
