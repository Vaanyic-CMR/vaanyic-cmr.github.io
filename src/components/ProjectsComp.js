import React from 'react';

import ImageSlideShow from './sub_components/ImageSlideShow';

const carousel1Images = [
    {
        src: require('../images/Project-Images/SSMS/image_1.png'),
        altText: 'Slide 1',
        // caption: '1',
        key: 1,
    },
    {
        src: require('../images/Project-Images/SSMS/image_2.png'),
        altText: 'Slide 2',
        // caption: '2',
        key: 2,
    },
    {
        src: require('../images/Project-Images/SSMS/image_3.png'),
        altText: 'Slide 3',
        // caption: '3',
        key: 3,
    },
    {
        src: require('../images/Project-Images/SSMS/image_4.png'),
        altText: 'Slide 4',
        // caption: '4',
        key: 4,
    },
    {
        src: require('../images/Project-Images/SSMS/image_5.png'),
        altText: 'Slide 5',
        // caption: '5',
        key: 5,
    },
    {
        src: require('../images/Project-Images/SSMS/image_6.png'),
        altText: 'Slide 6',
        // caption: '6',
        key: 6,
    },
    {
        src: require('../images/Project-Images/SSMS/image_7.png'),
        altText: 'Slide 7',
        // caption: '7',
        key: 7,
    },
];
const carousel2Images = [
    {
        src: require('../images/Project-Images/Online-SSMS/image_1.png'),
        altText: 'Slide 1',
        // caption: '1',
        key: 1,
    },
    {
        src: require('../images/Project-Images/Online-SSMS/image_2.png'),
        altText: 'Slide 2',
        // caption: '1',
        key: 2,
    },
    {
        src: require('../images/Project-Images/Online-SSMS/image_3.png'),
        altText: 'Slide 3',
        // caption: '1',
        key: 3,
    },
];
const carousel3Images = [
    {
        src: require('../images/Project-Images/OurSpace/image_1.png'),
        altText: 'Slide 1',
        // caption: '1',
        key: 1,
    },
    {
        src: require('../images/Project-Images/OurSpace/image_2.png'),
        altText: 'Slide 2',
        // caption: '1',
        key: 2,
    },
    {
        src: require('../images/Project-Images/OurSpace/image_3.png'),
        altText: 'Slide 3',
        // caption: '1',
        key: 3,
    },
    {
        src: require('../images/Project-Images/OurSpace/image_4.png'),
        altText: 'Slide 4',
        // caption: '1',
        key: 4,
    },
];

const ProjectsComp = _props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded"
            style={ {textAlign: "left"} }
        >
            <img
                className=" mb-5 border border-secondary rounded p-1"
                style={ {width: "100%", height: "200px", objectFit: "cover" } }
                src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt={""}
            ></img>
            <div className="mx-5 my-4">
                <h2>Snack Shack Management System | <small className="text-muted">Position: Solo-Project/Owner</small></h2>
                <p className="lead ms-5">
                    This system will store various data related to San Juan Bible Camp's Snack Shack.
                    It tracks inventory, camper and staff accounts, including monetary account balances.
                    It also tracks any transaction history whether from saved accounts or other forms of payment.
                    The program will build a shopping list for low inventory that needs to be restocked based on user determined thresholds.
                    (Still under development)
                </p>
                <ul className="ms-5">
                    <li>Tkinter Python library for GUI.</li>
                    <li>Socket Python library for local network communication.</li>
                    <li>JSON and SQLite library for databases.</li>
                </ul>
                <a
                    className="ms-5 fs-5"
                    href="https://github.com/Vaanyic-CMR/Snack-Shack-Management-System"
                >
                    GitHub
                </a>
                <ImageSlideShow images={carousel1Images} />
            </div>
            <div className="mx-5 my-4">
                <h2>Online - Snack Shack Management System | <small className="text-muted">Position: Solo-Project/Owner</small></h2>
                <p className="lead ms-5">
                    This system will store and track various data for consession and merch stands.
                    It tracks inventory, customer and staff accounts, as well as any purchase history.
                    The program will build a shopping list for low inventory that needs to be restocked based on user determined thresholds.
                    Ultimately, this is the begining of expanding the range of the local application based "Snack Shack Management System" for online use.
                    The goal of this project is to also expand it's user range to other companies and organizations.
                    (Still under development)
                </p>
                <ul className="ms-5">
                    <li>MERN Web Development stack.</li>
                    <ul>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>Mongoose & MongoDB</li>
                    </ul>
                </ul>
                <a
                    className="ms-5 fs-5"
                    href="https://github.com/Vaanyic-CMR/Online-Snack_Shack_Management_System"
                >
                    GitHub
                </a>
                <ImageSlideShow images={carousel2Images} />
            </div>
            <div className="mx-5 my-4">
                <h2>OurSpace | <small className="text-muted">Position: Backend - Server API</small></h2>
                <p className="lead ms-5">
                    A mock social media app project developed by Bernardo, Caleb, and Jaxon for the Coding Dojo Algos and Projects course.
                </p>
                <ul className="ms-5 unstyled">
                    <li>Front End - Client</li>
                    <ul>
                        <li>Node.js</li>
                        <li>React.js</li>
                    </ul>
                    <li>Back End - Server API</li>
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>MySQL</li>
                    </ul>
                </ul>
                <a
                    className="ms-5 fs-5"
                    href="https://github.com/handtjaxon1/Social-Media-Site"
                >
                    GitHub
                </a>
                <ImageSlideShow images={carousel3Images} />
            </div>
        </div>
    );
};
export default ProjectsComp;