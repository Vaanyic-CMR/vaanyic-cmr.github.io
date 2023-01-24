import React, { useState } from 'react';
import {
    Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const ImageSlideShow = props => {
    const { images } = props;

    // ---------- Carousel Controls.
    // Carousel useStates
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // Carousel next & previous commands.
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    // Carousel navigate command.
    const navigate = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    // ---------- Modal Controls.
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    // ---------- Define Carousel Slides
    const slides = images.map((image) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={image.src}
            >
                <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.altText}
                    onClick={toggleModal}
                />
                <CarouselCaption
                    captionText={image.caption}
                    captionHeader={image.caption}
                />
            </CarouselItem>
        );
    });
    const carousel = () => {return(
        <Carousel
            className="my-lg-2 p-lg-5 carousel-fade border border-secondary rounded"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            keyboard={false}
            ride={'carousel'}
            dark={true}
            slide={true}
            fade={true}
            {...props}
        >
            <CarouselIndicators
                items={images}
                activeIndex={activeIndex}
                onClickHandler={navigate}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>)
    }

    return(
        <div>
            {carousel()}
            <Modal isOpen={modal} toggle={toggleModal} size="xl" centered>
                {/* <ModalHeader toggle={toggleModal}>{images[activeIndex].altText}</ModalHeader> */}
                <ModalBody>
                    {carousel()}
                </ModalBody>
            </Modal>
        </div>
    );
};
export default ImageSlideShow;