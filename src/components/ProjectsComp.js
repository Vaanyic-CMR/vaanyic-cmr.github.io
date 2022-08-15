import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

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

const ProjectsComp = props => {
    // Carousel useStates
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);
    const [animating1, setAnimating1] = useState(false);
    const [animating2, setAnimating2] = useState(false);
    const [animating3, setAnimating3] = useState(false);
    
    // Carousel next image commands.
    const carousel1Next = () => {
        if (animating1) return;
        const nextIndex = activeIndex1 === carousel1Images.length - 1 ? 0 : activeIndex1 + 1;
        setActiveIndex1(nextIndex);
    };
    const carousel2Next = () => {
        if (animating2) return;
        const nextIndex = activeIndex2 === carousel2Images.length - 1 ? 0 : activeIndex2 + 1;
        setActiveIndex2(nextIndex);
    };
    const carousel3Next = () => {
        if (animating3) return;
        const nextIndex = activeIndex3 === carousel3Images.length - 1 ? 0 : activeIndex3 + 1;
        setActiveIndex3(nextIndex);
    };

    // Carousel previous image commands.
    const carousel1Previous = () => {
        if (animating1) return;
        const nextIndex = activeIndex1 === 0 ? carousel1Images.length - 1 : activeIndex1 - 1;
        setActiveIndex1(nextIndex);
    };
    const carousel2Previous = () => {
        if (animating2) return;
        const nextIndex = activeIndex2 === 0 ? carousel2Images.length - 1 : activeIndex2 - 1;
        setActiveIndex2(nextIndex);
    };
    const carousel3Previous = () => {
        if (animating3) return;
        const nextIndex = activeIndex3 === 0 ? carousel3Images.length - 1 : activeIndex3 - 1;
        setActiveIndex1(nextIndex);
    };

    // Carousel navigate commands.
    const carousel1Navigate = (newIndex) => {
        if (animating1) return;
        setActiveIndex1(newIndex);
    };
    const carousel2Navigate = (newIndex) => {
        if (animating2) return;
        setActiveIndex2(newIndex);
    };
    const carousel3Navigate = (newIndex) => {
        if (animating3) return;
        setActiveIndex3(newIndex);
    };

    // Define Carousel Slides
    const carousel1Slides = carousel1Images.map((carousel1Images) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating1(true)}
                onExited={() => setAnimating1(false)}
                key={carousel1Images.src}
            >
            <img className="d-block w-100" src={carousel1Images.src} alt={carousel1Images.altText} />
            <CarouselCaption
                captionText={carousel1Images.caption}
                captionHeader={carousel1Images.caption}
            />
            </CarouselItem>
        );
    });
    const carousel2Slides = carousel2Images.map((carousel2Images) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating2(true)}
                onExited={() => setAnimating2(false)}
                key={carousel2Images.src}
            >
            <img className="d-block w-100" src={carousel2Images.src} alt={carousel2Images.altText} />
            <CarouselCaption
                captionText={carousel2Images.caption}
                captionHeader={carousel2Images.caption}
            />
            </CarouselItem>
        );
    });
    const carousel3Slides = carousel3Images.map((carousel3Images) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating3(true)}
                onExited={() => setAnimating3(false)}
                key={carousel3Images.src}
            >
            <img className="d-block w-100" src={carousel3Images.src} alt={carousel3Images.altText} />
            <CarouselCaption
                captionText={carousel3Images.caption}
                captionHeader={carousel3Images.caption}
            />
            </CarouselItem>
        );
    });

    return (
        <div
            className="p-3 bg-light border border-secondary rounded"
            style={ {textAlign: "left"} }
        >
            <img
                className=" mb-5 border border-secondary rounded p-1"
                style={ {width: "100%", height: "200px", objectFit: "cover" } }
                src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
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
                <Carousel
                    className="my-2 p-5 border border-secondary rounded"
                    activeIndex={activeIndex1}
                    next={carousel1Next}
                    previous={carousel1Previous}
                    keyboard={false}
                    dark={true}
                    slide={true}
                    fade={true}
                    {...props}
                >
                    <CarouselIndicators
                        items={carousel1Images}
                        activeIndex={activeIndex1}
                        onClickHandler={carousel1Navigate}
                    />
                    {carousel1Slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={carousel1Previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={carousel1Next}
                    />
                </Carousel>
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
                <Carousel
                    className="my-2 p-5 border border-secondary rounded"
                    activeIndex={activeIndex2}
                    next={carousel2Next}
                    previous={carousel2Previous}
                    keyboard={false}
                    dark={true}
                    slide={true}
                    fade={true}
                    {...props}
                >
                    <CarouselIndicators
                        items={carousel2Images}
                        activeIndex={activeIndex2}
                        onClickHandler={carousel2Navigate}
                    />
                    {carousel2Slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={carousel2Previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={carousel2Next}
                    />
                </Carousel>
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
                <Carousel
                    className="my-2 p-5 border border-secondary rounded"
                    activeIndex={activeIndex3}
                    next={carousel3Next}
                    previous={carousel3Previous}
                    keyboard={false}
                    dark={true}
                    slide={true}
                    fade={true}
                    {...props}
                >
                    <CarouselIndicators
                        items={carousel3Images}
                        activeIndex={activeIndex3}
                        onClickHandler={carousel3Navigate}
                    />
                    {carousel3Slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={carousel3Previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={carousel3Next}
                    />
                </Carousel>
            </div>
        </div>
    );
};
export default ProjectsComp;