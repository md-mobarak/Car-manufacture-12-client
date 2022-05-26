import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='mx-auto my-12'>
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Hey! My name is Mobarak Hossen.</h2>
                    <p>I am a new fullstack web developer. I learned for frontend html, css, bootstrap, tailwinds, javascript and for backend I learned for node.js with express.js server site mongodb</p>
                    <div class="card-actions justify-end my-8">
                        <p> <span className='font-bold text-xl'>Education:</span> First of all let me say I am a non csc student. I started to like programming when I was in college. I have been trying this since then. I am now an honors second year student of political science.</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-xl'>My projects Links</h2>
                        <button className='my-4' onClick={() => window.location.replace("https://complete-surgical-care.web.app")}>
                            https://complete-surgical-care.web.app</button>

                        <button className='my-4' onClick={() => window.location.replace("https://assignment-11-51c6f.web.app/")}>
                            https://assignment-11-51c6f.web.app/</button>

                        <button className='my-4' onClick={() => window.location.replace("https://md-mobarak.github.io/practice-13-3-22/")}>
                            https://md-mobarak.github.io/practice-13-3-22/</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;