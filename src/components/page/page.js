import * as React from 'react'
import Post from '../post/post'
import './page.css'
import messenger from '../../assets/messenger.svg'
import pages from '../../assets/goal.svg'
import watch from '../../assets/play.svg'
import group from '../../assets/team.svg'
import calendar from '../../assets/calendar.svg'
import news from '../../assets/photography.svg'
import coin from '../../assets/coin.svg'
import joystick from '../../assets/joystick.svg'
import ads from '../../assets/speaker.svg'
import saved from '../../assets/bookmark.svg'
import ProfileUnit from '../profile-unit/profile-unit'

export default function Page(props) {
    return (
        <div className='page-wrapper'>
            <div className="spacer"></div>

            <div className="side-pane-wrapper">
                <div className="side-pane">
                    <div className="side-pane-tab side-pane-tab--active"><img alt="messenger" src={news} />News Feed</div>
                    <div className="side-pane-tab"><img alt="messenger" src={messenger} />Messenger</div>
                    <div className="side-pane-tab"><img alt="watch" src={watch} />Watch</div>
                    <div className="side-pane-tab-header">Explore</div>
                    <div className="side-pane-tab"><img alt="pages" src={pages} />Pages</div>
                    <div className="side-pane-tab"><img alt="group" src={group} />Groups</div>
                    <div className="side-pane-tab"><img alt="group" src={calendar} />Calendar</div>
                    <div className="side-pane-tab"><img alt="group" src={coin} />Fund Raisers</div>
                    <div className="side-pane-tab"><img alt="group" src={joystick} />Games</div>
                    <div className="side-pane-tab"><img alt="group" src={ads} />Recent ad activity</div>
                    <div className="side-pane-tab"><img alt="group" src={saved} />Saved</div>
                </div>
            </div>

            <div className="news-feed">
                {props.posts.map(post => <Post
                    username={post.username}
                    message={post.message}
                    date={post.date}
                    body={post.body}
                    imgUrls={post.imgUrls}
                    profilePicUrl={post.profilePicUrl}
                />)}

            </div>

            <div className="secondary-pane-wrapper">
                <div className="secondary-pane">
                    <div className="secondary-pane-header">People you may know</div>
                    <ProfileUnit name="Jay Lara" mutualFriendCount={12} imgUrl="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" />
                    <ProfileUnit name="Joanna Cortez (Jo)" mutualFriendCount={14} imgUrl="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
                    <ProfileUnit name="Martha Acosta" mutualFriendCount={23} imgUrl="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjM1MzgxMl5BMl5BanBnXkFtZTcwNDI0NDE5NQ@@._V1_UY256_CR4,0,172,256_AL_.jpg" />
                    <ProfileUnit name="Nettie Fry" mutualFriendCount={46} imgUrl="https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg" />
                </div>
            </div>
            <div className="spacer"></div>
        </div>
    )
}

