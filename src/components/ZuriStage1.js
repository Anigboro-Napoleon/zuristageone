import React from 'react'

const ZuriStage1 = () => {
    return (
        <>
            <div className='profile-photo'>
                <img src="/assets/profile_img.jpg" alt="Profile" id='profile__img' />
            </div>
            <p id='twitter'>Emmanuelolaolu5</p>
            <p id='slack'>LuHan</p>
            <div className="icon">
                <img src="/assets/icon.svg" alt="" />
                <img src="/assets/Icon2.svg" alt="" />
            </div>

            <div className="links-section">
                <div className="link-section">
                    <a href="https://twitter.com/Emmanuelolaolu5" id='btn__twitter' target='_blank' rel="noreferrer">
                        Twitter Link
                    </a>
                </div>
                <div className="link-section">
                    <a href="https://training.zuri.team/" id='btn__zuri' target='_blank' rel="noreferrer">Zuri Team</a>
                </div>
                <div className="link-section">
                    <a href="http://books.zuri.team" id='books' target='_blank' rel="noreferrer">Zuri Books</a>
                </div>
                <div className="link-section">
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=Olaoluwa Anigboro-Napoleon" id='books' target='_blank' rel="noreferrer">
                        Python Books
                    </a>
                </div>
                <div className="link-section">
                    <a href="https://background.zuri.team" id='pitch' target='_blank' rel="noreferrer">
                        Background check for Coders
                    </a>
                </div>
                <div className="link-section">
                    <a href="https://books.zuri.team/design-rules" id='book__design' target='_blank' rel="noreferrer">
                        Design Books
                    </a>
                </div>
            </div>

            <div className="social-icon">
                <img src="/assets/slack.svg" alt="Slack Icon" />
                <img src="/assets/github.svg" alt="Github Icon" />
            </div>

            <div className="footer">
                <img src="/assets/Zuri_Logo.svg" alt="Zuri's Logo" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src="/assets/I4G.png" alt="" />
            </div>
        </>
    )
}

export default ZuriStage1