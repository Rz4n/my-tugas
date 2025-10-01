import React from 'react'
import "./portofolio.css";
import Image from 'next/image';
import muka from './muka.jpg';
import muka2 from './muka2.jpg';

export default function page() {
  return (
    <div>
        <main>
            {/* navbar */}
            <div className='nav sticky top-0 z-50'>
                <div className='nav-kiri'>
                    <h1>Portofolio</h1>
                </div>
                    <ul className='nav-kanan'>
                        <li>
                            <a className='a-nav'>Home</a>
                        </li>
                        <li>
                            <a className='a-nav'>About</a>
                        </li>
                        <li>
                            <a className='a-nav'>Skills</a>
                        </li>
                        <li>
                            <a className='a-nav'>Portofolio</a>
                        </li>
                        <li>
                            <a className='a-nav'>contact</a>
                        </li>
                    </ul>
            </div>
            {/* navbar */}

            {/* name */}
            <div className='name'>
                <div>
                    <ul className='ul-name'>
                        <li className='nama1'><a>Hello! It's Me</a></li>
                        <li className='nama2'><a>Andi Reza Syahputra</a></li>
                        <li className='nama1'><a>I am a student at Telkom Makassar Vocational School</a></li>
                        <li className='nama3'><a>Visit My social media</a></li>
                    </ul>
                    <ul className='ul-social-media'>
                        <li className='social-media'><a></a></li>
                        <li className='social-media'><a></a></li>
                        <li className='social-media'><a></a></li>
                        <li className='social-media'><a></a></li>
                    </ul>
                    <ul>
                        <li className='more'><a>More About Me</a></li>
                    </ul>
                </div>
                <div className='drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] border-blue-400'>
                    <Image src={muka} alt="muka" className='muka'/>
                </div>
            </div>
            {/* name */}
            {/* about me */}
            <div className='about'>
                <div>
                    <Image src={muka2} alt="muka2" className='muka2 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] border-blue-400'/>
                </div>
                <div className='about-me-container'>
                    <div className='about-me-judul'>
                        <h1>About Me</h1>
                    </div>
                    <div className='about-me '>
                        <p>Saya Andi Reza Syahputra, seorang pribadi yang selalu bersemangat untuk belajar hal baru dan mengembangkan diri. Saya memiliki ketertarikan pada bidang teknologi dan desain, serta senang bekerja sama dengan orang lain untuk mencapai tujuan bersama.</p>
                    </div>
                </div>
            </div>
            
            {/* about me */}

            {/* my service */}
            <div className='my-service'>
                <div className='my-service-judul'>
                    <h1>My Service</h1>
                </div>
                <div className='my-service-konten'>
                    <div className='my-service-box drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] border-blue-400'>
                        <div>
                            <h1 className='judul-service'>UI/UX DESIGN</h1>
                            <p className='isi-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <ul>
                                <li className='more-service'><a>More About Me</a></li>
                            </ul>                        
                        </div>
                    </div>
                    <div className='my-service-box drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] border-blue-400'>
                        <div>
                            <h1 className='judul-service'>GRAPHIC DESIGN</h1>
                            <p className='isi-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <ul>
                                <li className='more-service'><a>More About Me</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='my-service-box drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] border-blue-400'>
                        <div>
                            <h1 className='judul-service'>FRONTEND DEV</h1>
                            <p className='isi-service'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <ul>
                                <li className='more-service'><a>More About Me</a></li>
                            </ul>                       
                        </div>
                    </div>
                </div>                
            </div>
            {/* my service */}
            {/* contact me */}
            <div className='contact-me-main'>
                <div>
                    <h1>Contact Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <ul>
                        <li>
                            <a>andirz4n@gmail.com</a>
                        </li>
                        <li>
                            <a>081242326002</a>
                        </li>
                    </ul>
                    <ul className='ul-social-media'>
                        <li className='social-media'><a></a></li>
                        <li className='social-media'><a></a></li>
                        <li className='social-media'><a></a></li>
                        <li className='social-media'><a></a></li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </main>
    </div>

  )
}
