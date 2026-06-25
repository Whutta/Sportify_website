import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../home_page/view/footer';
import membershipBg from '../../../assets/membership_background.png';

function MembershipView() {
    const [lightbox, setLightbox] = useState(false);

    return (
        <>
        <div className="bg-black min-h-screen text-white">
            <div className="relative border-b-1 border-zinc-800 px-24 pt-52 pb-32 overflow-hidden -mt-20"
                style={{ background: 'radial-gradient(ellipse at 40% 60%, #f1057b98 0%, #0a0a0a 65%)' }}>
                <p className="text-pink-500 font-mono text-sm tracking-wider">Member Registration</p>
                <h1 className="text-white text-7xl font-sans font-extrabold tracking-tight">
                    For whole <span className="text-7xl font-sans font-extrabold neon-pink tracking-tight">life.</span>
                </h1>
                <p className="text-gray-300 tracking-wide font-sans pt-6 text-lg w-170">
                    A one-time fee unlocks member pricing everywhere in Sportify, a free birthday-month visit, and skate product discounts for life.
                </p>
            </div>

            <div className="flex flex-row gap-6 bg-zinc-950 px-24 pt-32 pb-12">
                <div className='flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl p-8'>
                    <p className='font-mono text-sm tracking-wider text-pink-300'>STUDENT</p>
                    <h1 className='text-7xl font-extrabold text-white py-1'>RM 25</h1>
                    <p className='text-gray-400 font-mono text-xs font-thin tracking-wider pb-8'>ONE TIME FOR WHOLE LIFE</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor" className="text-pink-300">
                                <path d="M1024 320.496c0-35.344-28.654-64-63.998-64H850.754c28.272-27.888 46.368-64.447 46.368-109.472 0-55.44-31.84-115.664-121.216-115.664-117.6 0-215.84 125.216-262 195.408-46.192-70.176-147.44-195.392-265.024-195.392-89.376 0-121.216 60.224-121.216 115.664 0 45.008 18.592 81.584 47.44 109.472H64.002c-35.344 0-64 28.656-64 64V512.08h64.56v416.56c0 35.344 28.655 64 64 64h767.68c35.343 0 64-28.656 64-64V512.064h63.76V320.496zM775.906 95.376c39.568 0 57.216 16.625 57.216 51.665 0 71.088-79.344 109.439-153.968 109.439H570.818c45.471-67.536 125.504-161.104 205.088-161.104zm-527.025.001c79.6 0 162.655 93.568 208.127 161.088H348.64c-74.624 0-156.976-39.344-156.976-110.432 0-35.024 17.648-50.656 57.217-50.656zm711.12 352.687h-416V320.496h416v127.568zm-896-127.568h416v127.568h-416zm64.56 191.568h351.44v416.56h-351.44zm767.696 416.56H544.001v-416.56h352.256v416.56z"/>
                            </svg>
                            <p className = "font-mono text-sm">Birthday month free entry (1 time per year)</p>
                        </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
                        </svg>
                        <p className = "font-mono text-sm">Discount on skates products</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
                        </svg>
                        <p className = "font-mono text-sm">Exclusive member pricing across all <br></br>attractions</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
                        </svg>
                        <p className = "font-mono text-sm">Priority booking for workshops & parties</p>
                    </div>
                    </div>
                    <button className='bg-zinc-800 border border-zinc-700 text-white py-4 rounded-full mt-6 font-bold cursor-pointer hover:bg-zinc-700 transition-colors duration-300'>Register as Student</button>
                </div>
                <div className='relative flex flex-col bg-zinc-900 border border-pink-600 rounded-2xl p-8'>
                    <div className='absolute -top-3.5 left-20 -translate-x-1/2 bg-pink-600 text-white text-xs font-mono tracking-widest px-4 py-1 rounded-full'>MOST POPULAR</div>
                    <p className='font-mono text-sm tracking-wider text-pink-600'>ADULT</p>
                    <h1 className='text-7xl font-extrabold text-white py-1'>RM 35</h1>
                    <p className='text-gray-400 font-mono text-xs font-thin tracking-wider pb-8'>ONE TIME FOR WHOLE LIFE</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor" className="text-pink-600">
                                <path d="M1024 320.496c0-35.344-28.654-64-63.998-64H850.754c28.272-27.888 46.368-64.447 46.368-109.472 0-55.44-31.84-115.664-121.216-115.664-117.6 0-215.84 125.216-262 195.408-46.192-70.176-147.44-195.392-265.024-195.392-89.376 0-121.216 60.224-121.216 115.664 0 45.008 18.592 81.584 47.44 109.472H64.002c-35.344 0-64 28.656-64 64V512.08h64.56v416.56c0 35.344 28.655 64 64 64h767.68c35.343 0 64-28.656 64-64V512.064h63.76V320.496zM775.906 95.376c39.568 0 57.216 16.625 57.216 51.665 0 71.088-79.344 109.439-153.968 109.439H570.818c45.471-67.536 125.504-161.104 205.088-161.104zm-527.025.001c79.6 0 162.655 93.568 208.127 161.088H348.64c-74.624 0-156.976-39.344-156.976-110.432 0-35.024 17.648-50.656 57.217-50.656zm711.12 352.687h-416V320.496h416v127.568zm-896-127.568h416v127.568h-416zm64.56 191.568h351.44v416.56h-351.44zm767.696 416.56H544.001v-416.56h352.256v416.56z"/>
                            </svg>
                            <p className = "font-mono text-sm">Birthday month free entry (1 time per year)</p>
                        </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
                        </svg>
                        <p className = "font-mono text-sm">Discount on skates products</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
                        </svg>
                        <p className = "font-mono text-sm">Exclusive member pricing across all <br></br>attractions</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-pink-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
                        </svg>
                        <p className = "font-mono text-sm">Priority booking for workshops & parties</p>
                    </div>
                    </div>
                    <button className='bg-pink-600 border border-pink-700 text-white py-4 rounded-full mt-6 cursor-pointer font-bold hover:bg-pink-700 transition-colors duration-300'>Register as Adult</button>
                </div>
                <div className='flex-1 rounded-2xl overflow-hidden min-h-80 cursor-zoom-in'
                    onClick={() => setLightbox(true)}>
                    <img src={membershipBg} alt='Membership' className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
                </div>

                {lightbox && (
                    <div
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out'
                        onClick={() => setLightbox(false)}
                    >
                        <img src={membershipBg} alt='Membership' className='max-w-full max-h-[90vh] object-contain rounded-xl' />
                        <button
                            className='absolute top-6 right-8 text-white text-3xl font-bold hover:text-pink-400 transition-colors'
                            onClick={() => setLightbox(false)}
                        >&times;</button>
                    </div>
                )}
            </div>
            <div className = "flex flex-row gap-4 px-25 pb-24">
            <div className="flex-1 flex flex-col border border-zinc-800 bg-zinc-900 p-5 rounded-lg">
                <h1 className = "text-5xl font-bold text-pink-300">1x</h1>
                <p className = "text-sm text-gray-300 font-light font-mono">FREE ENTRY BIRTHDAY MONTH</p>
            </div>
            <div className="flex-1 flex flex-col border border-zinc-800 bg-zinc-900 p-5 rounded-lg">
                <h1 className = "text-5xl font-bold text-pink-300">3</h1>
                <p className = "text-sm text-gray-300 font-light font-mono">MAX MEMBER TICKETS / DAY</p>
            </div>
            <div className="flex-1 flex flex-col border border-zinc-800 bg-zinc-900 p-5 rounded-lg">
                <h1 className = "text-5xl font-bold text-pink-300">-RM3</h1>
                <p className = "text-sm text-gray-300 font-light font-mono">IF U BRING YOUR OWN SKATES</p>
            </div>
            <div className="flex-1 flex flex-col border border-zinc-800 bg-zinc-900 p-5 rounded-lg">
                <h1 className = "text-5xl font-bold text-pink-300">∞</h1>
                <p className = "text-sm text-gray-300 font-light font-mono">LIFETIME MEMBERSHIP</p>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default MembershipView