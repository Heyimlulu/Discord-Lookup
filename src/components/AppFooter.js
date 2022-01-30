import React from 'react'

export default function AppFooter({ visits }) {
    return (
        <footer className="site-footer">
                <div>
                    <div>
                        I do not save anything: <a href='https://github.com/Heyimlulu/Discord-Lookup-Frontend' target="_blank" rel="noopener noreferrer">See sources.</a>&nbsp;
                        This website is not affiliated with <a className='footer-links' href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord.</a>
                    </div>
                    <span>Numbers of search today: <span className="count">{ visits }</span></span>
                    <div>
                        <span>Feel free to contact me on Discord if you have any questions: </span>
                        <a className='footer-links' href='https://discord.com/users/265896171384340480' target="_blank" rel="noopener noreferrer">Lulu 🍉#6969</a>
                    </div>
                </div>
        </footer>
    )
}
