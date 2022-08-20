import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Info.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../footer/Footer';
import Chittor from '../assets/Chittor.jpg'
import Ranakpur from '../assets/Ranakpur.jpg'
import Kumbhalgarh from '../assets/Kumbhalgarh.jpg'
import Delwara from '../assets/Delwara.jpg'
import Eklinji from '../assets/Eklinji.jpg'
import LakeBadi from '../assets/LakeBadi.jpg'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import Carousel from "react-elastic-carousel";
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const fadeImages = [
    "https://media.radissonhotels.net/image/radisson-hotel-srinagar/guestroom/16256-114091-f63664802_3xl.jpg?impolicy=HomeHero",
    "https://www.clubmahindra.com/blog/media/section_images/shuttersto-60d8967abd4ab87.jpg",
    "https://www.holidify.com/images/bgImages/ANANTNAG.jpg"
];

export const Info1 = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
    ];
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 2,
        children: 0,
        room: 1,
    })
    const handleOption = (nam, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [nam]: operation === "i" ? options[nam] + 1 : options[nam] - 1,
            }
        })
    }


    const KPlaces = [
        {
            icon: Chittor,
            title: "Chittorgarh",
            subtitle: "The Mewar dynasty's most important fort, Chittorgarh was the capital of their kingdom for over 800 years. The Mewar dynasty's most important fort, Chittorgarh was the capital of their kingdom for over 800 years",
        },
        {
            icon: Kumbhalgarh,
            title: "Kumbhalgarh Fort",
            subtitle: "Isolated Kumbhalgarh Fort was built high in the Avarali Ranges by Mewar ruler Rana Kumbha in the 15th century and is also a UNESCO World Heritage Site. It's said to be the second longest continuous wall in the world (after the iconic Great Wall of China). ",
        },
        {
            icon: Eklinji,
            title: "Shri Eklingji Prabhu Temple",
            subtitle: "Dedicated to Lord Shiva, the temple complex is made completely out of marble. It also contains large colorfully painted statues of Lord Shiva’s Nandi Bull. The original shrine was built by Bapa Rawal, founder of the Mewar Dynasty.",
        },
        {
            icon: Delwara,
            title: "Delwara",
            subtitle: " Not many people are aware of this town, apart from the fact that the luxury boutique Raas Devigarh hotel is situated there. There are also thousands of temples (including ancient Jain temples), step wells, and a thriving crafts tradition. It's a prime example of a rural village that has undergone profound social changes over the past few years.",
        },
        {
            icon: Ranakpur,
            title: "Ranakpur",
            subtitle: "Jain temples are known to be the most elaborate in India, and the temple complex at Ranakpur is absolutely astonishing. Dedicated to the first Tirthankar (savior and spiritual teacher) who founded Jainism, it's the country's biggest and most important Jain temple complex. ",
        },
        {
            icon: Ranakpur,
            title: "Ranakpur",
            subtitle: "Jain temples are known to be the most elaborate in India, and the temple complex at Ranakpur is absolutely astonishing. Dedicated to the first Tirthankar (savior and spiritual teacher) who founded Jainism, it's the country's biggest and most important Jain temple complex. ",
        },
        {
            icon: LakeBadi,
            title: "Laki Badi",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore ipsam dolore nam reiciendis, ullam voluptatem consequuntur repudiandae unde expedita.",
        },
        {
            icon: Chittor,
            title: "Nathdwara",
            subtitle: "Dal lake is perhaps one of the most famous and scenic lakes in all of India. Situated in Srinagar in Kashmir, Dal Lake stretches to a length of around 7 kms with a width of 3.5 kms. Since Moghul times Dal Lake has been an attraction because of its beauty and aptly named Jewel in the crown of Kashmir",
        },
    ]
    
    return (
        <>           
            <div className="resortInfo">
                
                <div className="location">
                <i>D-Resorts Udaipur <br/></i> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -10 28 32"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                    11 Maulana Azad Road, Udaipur, Rajasthan, 123456, India
                    <div className="extra">|</div>
                    <div className="phone">☎</div>
                    <div className="phone1">1293 202 313</div>
                    <div className="extra">|</div>
                    <div className="mail">✉</div>
                    <div className="mail1">abcxyz1110@gmail.com</div>
                    
                </div>
            </div>

            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <img src={fadeImages[0]} alt='' className="image" />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[1]} alt='' className="image" />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[2]} alt='' className="image" />
                    </div>

                </Fade>
                <div className="booking">
                    <div className="searchitem">
                        <label htmlFor="date" className="check">Check-in</label>
                        <label htmlFor="date" className="check">Check-Out</label>
                        <br />
                        <span className="searchText" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>

                    <div className="searchitem">
                        <label htmlFor="rooms" className="check">Occupancy</label>
                        <br />
                        <span className="searchText" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult | ${options.children} children | ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="optionCounterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                            </div>


                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="optionCounterBtn" onClick={() => handleOption("children", "d")} >-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>


                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.room <= 1}
                                        className="optionCounterBtn" onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button

                                        className="optionCounterBtn"
                                        onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="searchitem">
                        <button className="searchBtn">CHECK AVAILABILITY</button>
                    </div>
                </div>

            </div>
            <div className="rooms">
                <Carousel breakPoints={breakPoints}>

                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            className="roomsClass"
                            image="https://media.radissonhotels.net/image/radisson-hotel-srinagar/guestroom/16256-114091-f63664802_3xl.jpg?impolicy=Card"

                        />
                        <CardContent>
                            <Typography className="roominfo" gutterBottom variant="h5" component="div">
                                <center>Classic Room</center>
                            </Typography>
                            <Typography variant="p" >
                                <center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi sed labore officia quae! Dolorem voluptate nobis debitis?s</center>
                            </Typography>

                            <center><Button size="medium">Book Now</Button></center>


                        </CardContent>

                    </Card>

                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            className="roomsClass"
                            image="https://media.radissonhotels.net/image/radisson-hotel-srinagar/guestroom/16256-114091-f63664812_3xl.jpg?impolicy=Card"
                        />
                        <CardContent>
                            <Typography className="roominfo" gutterBottom variant="h5" component="div">
                                <center> Premium Room</center>
                            </Typography>
                            <Typography variant="p">
                                <center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi sed labore officia quae! Dolorem voluptate nobis debitis?s</center>
                            </Typography>

                            <center><Button size="medium">Book Now</Button></center>


                        </CardContent>

                    </Card>

                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            image="https://media.radissonhotels.net/image/radisson-hotel-srinagar/suite/16256-114091-f63664816_3xl.jpg?impolicy=Card"
                            className="roomsClass"

                        />
                        <CardContent>
                            <Typography className="roominfo" gutterBottom variant="h5" component="div">
                                <center>Deluxe Suite</center>
                            </Typography>
                            <Typography variant="p" >
                                <center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi sed labore officia quae! Dolorem voluptate nobis debitis?s</center>
                            </Typography>

                            <center><Button size="medium">Book Now</Button></center>


                        </CardContent>

                    </Card>

                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            image="https://imgs.search.brave.com/Und8FknyvlZEJF8rRyUmxrDNItPDQxA_kDPDaFSCqok/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/Sy1KdWdUUTZic0xS/bEgyV3RZUDNBSGFF/SyZwaWQ9QXBp"
                            className="roomsClass"

                        />
                        <CardContent>
                            <Typography className="roominfo" gutterBottom variant="h5" component="div" >
                                <center>Presidential Suite</center>
                            </Typography>
                            <Typography variant="h10" >
                                <center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi sed labore officia quae! Dolorem voluptate nobis debitis?s</center>
                            </Typography>

                            <center><Button size="medium">Book Now</Button></center>

                        </CardContent>

                    </Card>

                </Carousel>
            </div>
            <div className="section">
                    
                    {KPlaces.map((service, index) => {
                        return (
                            <div className="service1">
                                <div className="icon1">
                                    <img src={service.icon} alt="" id="image" />
                                </div>
                                <h2>{service.title}</h2>
                                <p className='para1'>{service.subtitle}</p>
                            </div>
                        );
                    })}
                </div>
                
            <Footer />
        </>
    )
}
