import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();



const Blog = () => {

    return (
        <div className="my-container border mt-10">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button className='btn' onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref}>
        <h1 className='font-bold text-center text-5xl mb-10'>BlogQuestion</h1>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>I. Tell us the differences between uncontrolled and controlled components.</h3>
                <p>In React, there are two ways to handle form inputs: uncontrolled components and controlled components.</p>
                <p>Uncontrolled inputs are those that govern their own internal state management and update it independently. This indicates that the DOM, not React, is in charge of managing the component's state. Only the ref attribute provides access to the input's state.
                </p>
                <p>The state that React manages is dependent on inputs known as controlled components. This indicates that React uses props to manage and update the input's state. A new value must be supplied to the input via the onChange event in order to change its value.
                </p>
                <p>Uncontrolled components can be more challenging to handle in complicated circumstances, but they are typically easier to set up and require less code. Although more difficult to set up, controlled components offer more flexibility and control over input values and can sometimes help prevent unexpected input behavior.
                </p>
            </div>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>II. How to validate React props using PropTypes</h3>
                <p>'prop-types' package's PropTypes should be imported.
                    Create a propTypes object with key-value pairs representing the anticipated prop kinds.
                    Your component should get the propTypes object as a second argument.
                    If the expected prop types are not accurately supplied to PropTypes, an error will be thrown.
                    To guarantee that a prop is supplied to your component, use the isRequired modifier.</p>
            </div>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>III. Tell us the difference between nodejs and express js.</h3>
                <p>Developers may run JavaScript code outside of a web browser thanks to the Node.js JavaScript runtime environment. It has a number of built-in modules for file system I/O, networking, and other low-level tasks and is based on Google Chrome's V8 engine.
                </p>
                <p>Express.js is a Node.js-based web framework that offers a number of abstractions for creating web apps. It offers a middleware architecture for handling errors, routing, and processing incoming requests and outgoing responses. Express.js's flexibility and adaptability enable developers to create web applications with less boilerplate code.
                </p>
                <p>In conclusion, Express.js offers a set of abstractions and tools for creating web apps on top of Node.js, whereas Node.js offers a runtime environment for JavaScript code to be performed outside of a web browser.
                </p>
            </div>
            <div className='border p-4 mb-3'>
                <h3 className='text-2xl'>IV. What is a custom hook, and why will you create a custom hook?</h3>
                <p>A custom hook is a piece of reusable code that wraps logic and stateful behavior in a function, allowing developers to share functionality across components. Custom hooks are written in order to increase code reuse, decrease redundancy, and make programming more modular.
                </p>
                <p>Custom hooks can be written by developers to abstract away sophisticated logic and state management that is required in numerous components. Custom hooks can help to simplify the codebase, improve consistency, and reduce the likelihood of errors.
                </p>
                <p>The React library defines a set of guidelines for creating custom hooks. A custom hook's name must begin with 'use,' and it must use other hooks internally to access React's built-in features. Custom hooks, like standard functions, can accept parameters and return values.
                </p>
            </div>
        </div>
      </div>
    );
};

export default Blog;