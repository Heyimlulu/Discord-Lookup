import React from 'react'

export default function AppFooter({ visits }) {
    return (
        <footer className="bg-grey text-lightgrey">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <div className="text-base text-center leading-12 text-md">
                        <p>This website is not affiliated with <a className='text-blurple transition-all pl-0 hover:opacity-70' href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord.</a></p>
                        <p>
                            Checkout my others Discord related projects: &nbsp;
                            <a className='text-blurple transition-all pl-0 hover:opacity-70' href='https://github.com/Heyimlulu/Paanya' target="_blank" rel="noopener noreferrer">Paanya</a>
                            <span> & </span>
                            <a className='text-blurple transition-all pl-0 hover:opacity-70' href='https://github.com/Heyimlulu/SlashBot' target="_blank" rel="noopener noreferrer">Ottism</a>
                            <span> - </span>
                            Numbers of lookups today: <span className="text-blurple">{ visits }</span>
                        </p>
                        <p>
                            <span>Feel free to contact me on Discord if you have any questions: </span>
                            <a className='text-blurple transition-all pl-0 hover:opacity-70' href='https://discord.com/users/265896171384340480' target="_blank" rel="noopener noreferrer">Lulu 🍉#6969</a>
                        </p>
                    </div>

                    {/*
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
                    */}
                </div>
        </footer>
    )
}
