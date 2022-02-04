import React from 'react'

export default function AppFooter({ visits }) {
    return (
        <footer className="site-footer">
                <div>
                    <div>
                        This website is not affiliated with <a className='footer-links' href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord.</a>
                    </div>
                    <div>
                        Checkout my others Discord related projects: &nbsp;
                        <a className='footer-links' href='https://github.com/Heyimlulu/Paanya' target="_blank" rel="noopener noreferrer">Paanya</a>
                        <span> & </span>
                        <a className='footer-links' href='https://github.com/Heyimlulu/SlashBot' target="_blank" rel="noopener noreferrer">Ottism</a>
                        <span> - </span>
                        Numbers of lookups today: <span className="count">{ visits }</span>
                    </div>
                    <div>
                        <span>Feel free to contact me on Discord if you have any questions: </span>
                        <a className='footer-links' href='https://discord.com/users/265896171384340480' target="_blank" rel="noopener noreferrer">Lulu 🍉#6969</a>
                    </div>
                </div>
        </footer>
    )
}
