import React from 'react'

export default function AppFooter({ visits }) {
    return (
        <footer className="text-lightgrey">
                <div className="py-6 lg:py-12">
                    <div className="text-base text-center leading-12 text-md">
                        <p>
                            This website is not affiliated with <a className='text-blurple font-semibold transition-all pl-0 hover:text-green' href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord.</a>
                            &nbsp; Numbers of lookups today: <span className="text-blurple font-semibold">{ visits }</span>
                        </p>
                        <p>
                            <span>Feel free to contact me on Discord if you have any questions: </span>
                            <a className='text-blurple font-semibold transition-all pl-0 hover:text-green' href='https://discord.com/users/265896171384340480' target="_blank" rel="noopener noreferrer">Lulu 🍉#6969</a>
                        </p>
                    </div>
                </div>
        </footer>
    )
}
