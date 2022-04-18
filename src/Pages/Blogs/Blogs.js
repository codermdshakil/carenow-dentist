import React from 'react';
import './Blogs.css';


const Blogs = () => {
    return (
        <div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-8  col-md-10 col-11 d-block m-auto">
                        <div className="questionAndAnsBox">
                            <h2 className='text-center text-info mb-4' >Questions and Answers</h2>
                            <div className="qustionAndAns">
                                <h5> <b>Question 1</b>. Differente between authorization and authentication ?</h5>
                                <p><b className='text-decoration-underline text-dark'>Answer </b> :  <b className='text-dark'>Authentication</b> is the process of verifying who a user is, while <b className='text-dark'>Authorization</b> is the process of verifying what they have access to. Comparing these processes to a real-world <b className='text-dark'>example</b>, when you go through security in an airport, you show your ID to authenticate your identity. In computing, authentication is the process of verifying the identity of a person or device.Authorization is the process of giving someone the ability to access a resource.A good <b className='text-dark'>example</b> is house ownership.</p>
                            </div>
                            <div className="qustionAndAns">
                                <h5> <b>Question 2</b>. Why are you use firebase? What other option do you have to implement authentication?</h5>
                                <p><b className='text-decoration-underline text-dark'>Answer </b> : To use <b className='text-dark'>firebase</b> cause is The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. The Other option to emplement authentication We can sign in users to your Firebase app either by using FirebaseUI as a complete drop-in auth solution or by using the Firebase Authentication SDK to manually integrate one or several sign-in methods into your app.</p>
                            </div>
                            <div className="qustionAndAns">
                                <h5> <b>Question 3</b>. What other services does firebase provide other than authenticate ?</h5>
                                <p><b className='text-decoration-underline text-dark'>Answer </b> : Without authentication firebase also provide <b className='text-dark'>Hosting</b>,  <b className='text-dark'>Cloud Firestore</b>, <b className='text-dark'>Cloud Functions</b>, <b className='text-dark'>Cloud Storage</b>,
                                    <b className='text-dark'>Google Analytics</b> and <b className='text-dark'>Predictions</b> . <b className='text-dark'> Cloud Storage</b> is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps - at global scale . Firebase <b className='text-dark'>Hosting</b> is production-grade web content hosting for developers. <b className='text-dark'>Cloud Storage</b> is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service. <b className='text-dark'>Google Analytics</b> helps you understand how people use your web, Apple, or Android app. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;