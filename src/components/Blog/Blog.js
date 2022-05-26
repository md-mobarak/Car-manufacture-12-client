import React from 'react';

const Blog = () => {
    return (
        <div className='px-12'>
            <div>
                <h1 className='mt-4 text-5xl text-center text-primary'> How will you improve the performance of a React Application?</h1>

                <p className='text-xl text-justify mt-3'>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.Keeping component state local where necessary
                    We’ve learned that a state update in a parent component re-renders the parent and its child components.

                    So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code.</p>
            </div>
            <div>
                <h1 className='mt-4 text-5xl text-center text-primary'>What are the different ways to manage a state in react application</h1>
                <p className='text-xl text-justify mt-3'>Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.

                    There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.</p>
            </div>
            <div>
                <h1 className='mt-4 text-5xl text-center text-primary'>How Does prototypical inheritance work??</h1>
                <p className='text-xl text-justify mt-3'>Inheritance, a prominent feature of a programming language, emerged with the introduction of object-oriented programming languages. Most of these languages were class-based languages. Here, class is like a plan or blueprint and objects are its manifestation. Meaning, in order to create an object, first we have to create a class. Then we can create any number of objects from one class.

                    Imagine, we have a class that represents a smartphone. This class has features like capturing images,
                    We have now discussed [[Prototype]]. It’s nothing but a standard notation to designate the prototype of an object. Many developers get it confused with .prototype property, which is an entirely different thing.

                    Let’s explore the .prototype property.</p>
            </div>
            <div>
                <h1 className='mt-4 text-5xl text-center text-primary'>What is a unit test?why should write unit test?</h1>
                <p className='text-xl text-justify mt-3'>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
            </div>
            <div>
                <h1 className='mt-4 text-5xl text-center text-primary'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            </div>
        </div>
    );
};

export default Blog;