import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mx-auto my-12'>
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Hey! My name is Mobarak Hossen.</h2>
                    <p>I am a web developer based in programming Hero
                        I have been working as a freelance designer and front-end developer since 2007.
                        I’ve always been someone who has both a creative and a logical side.
                        When I discovered web design in college, I realized it would be the perfect fit.
                        I could use my creative side to design and my logical side to code.
                        As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Accept</button>
                        <button class="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;