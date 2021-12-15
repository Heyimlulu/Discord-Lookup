import React from 'react'

export default function AppFooter() {
    return (
        <footer>
            <span>I do not save anything.</span>
            <div>
                <span>This website is not affiliated with </span>
                <a className='footer-link' href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord.</a>
            </div>
            <div>
                <span>Feel free to contact me on Discord if you have any questions: </span>
                <a className='footer-link' href='https://discord.com/users/265896171384340480' target="_blank">Ayuki#0001</a>
            </div>
        </footer>
    )
}
