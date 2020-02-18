import React from 'react'
import './post.css'
import like from '../../assets/like3.svg'
import comment from '../../assets/chat2.svg'
import share from '../../assets/next.svg'
import menu from '../../assets/menu.svg'

export default function Post({ username, profilePicUrl, body, date, message, imgUrls }) {
    return (
        <div className='post'>
            <div className="post__header">
                <div className="post__header__profile-pic"><img alt="profile" src={profilePicUrl} /></div>
                <div className="post__header__title-wrapper">
                    <div className="post__header__title">
                        <div className="post__header__title__username">{username}&nbsp;</div>
                        <div className="post__header__title__message">{message}</div>
                    </div>
                    <div className="post__header__sub-title" >{date}</div>
                </div>
                <img alt="menu-btn" src={menu} height="16" />
            </div >
            {body !== undefined && <div className="post__body">{body.length > 300 ? <div>{body.substring(0, 300) + "..."}<div className="post__body__read-more">See more</div></div> : body}</div>}
            {imgUrls !== undefined && <div className="post__img-holder">{imgUrls.length === 1 && <img alt="post-img" className="post-img" src={imgUrls[0]} />}</div>}
            <div className="post__btn__wrapper" >
                <PostButton title="like" image={like} />
                <PostButton title="comment" image={comment} />
                <PostButton title="share" image={share} />
            </div>

            <div className="post__comment">
                <div className="post_comment_profile_pic">
                    <img alt="profile-pic" src="https://avatars1.githubusercontent.com/u/19506171?s=460&v=4" />
                </div>
                <input className="post__comment__message" placeholder="write a comment" />
            </div>
        </div>
    )
}

function PostButton({ title, image }) {
    return (
        <div className="post__btn">
            <img alt={title} src={image} />
            {title}
        </div>
    )
}