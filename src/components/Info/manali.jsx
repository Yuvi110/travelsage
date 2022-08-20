import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Info.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../footer/Footer';
import Solang from '../assets/Manali/Solang.jpg'
import Jogini from '../assets/Manali/Jogini.jpg'
import manu from '../assets/Manali/manu.jpg'
import Rohtang from '../assets/Manali/Rohtang.jpg'
import Hidimba from '../assets/Manali/Hidimba.jpg'
import seethan from '../assets/Manali/seethan.jpg'
import Parvati from '../assets/Manali/PARVATI-VALLEY.jpg'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import Carousel from "react-elastic-carousel";
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const fadeImages = [
    "https://imgs.search.brave.com/RGNgS-0xaIfCVKIuDY2nifMKF9TFM8zVXOph6ITR1Lw/rs:fit:550:367:1/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLXMv/MTIvNjUvODQvOTkv/c2l0dGluZy1hcmVh/LW9uLXRoZS1iYWNr/c2lkZS5qcGc",
    "https://imgs.search.brave.com/ijVqn9Gg2A0gyX1LRI3kttpr4CL0BW1OIXCX_97h78I/rs:fit:550:366:1/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLXMv/MDkvYjMvZGMvODEv/dGhlLWdyYW5kLWRy/YWdvbi1sYWRha2gu/anBn",
    "https://imgs.search.brave.com/FWOJWDi2tXEF6nhLqJEsMBYRtuynOBJh0OqE4k2kb6M/rs:fit:550:366:1/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLXMv/MGUvYjkvOGMvMzYv/Z29tYW5nLWJvdXRp/cXVlLWhvdGVsLmpw/Zw",
    
];

export const Manali = () => {

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
            icon: Solang,
            title: " Solang Valley ",
            subtitle: "One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra. It was built by the Mughal Emperor Shah Jahan as a memorial for his third wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan himself. Constructed entirely out of white marble in the 17th century, Taj Mahal is one of the most beautiful monuments in the world.",
        },
        {
            icon: manu,
            title: "Thiksey Monastery",
            subtitle: "Also known as Lal Qila, Fort Rouge or Red Fort of Agra, the Agra Fort is a UNESCO world heritage site. It is situated at a distance of about 2.5km northwest of the famous Taj Mahal. The construction of the massive fort of red sandstone by the banks of Yamuna river was started by emperor Akbar.",
        },
        {
            icon: Jogini,
            title: "Jogini Falls",
            subtitle: "Located at a distance of 40km from Agra, Fatehpur Sikri is a town in the Agra district and a famous tourist attraction. A city predominantly made of red sandstone, Fatehpur Sikri was founded in 1571 century by Mughal Emperor Akbar. It is essentially a fortified city built by the king and had been the capital of his Empire for fifteen years.",
        },
        {
            icon: Rohtang,
            title: "Rohtang Pass",
            subtitle: " Not many people are aware of this town, apart from the fact that the luxury boutique Raas Devigarh hotel is situated there. There are also thousands of temples (including ancient Jain temples), step wells, and a thriving crafts tradition. It's a prime example of a rural village that has undergone profound social changes over the past few years.",
        },
        {
            icon: Hidimba,
            title: "Hidimba Temple",
            subtitle: "Jain temples are known to be the most elaborate in India, and the temple complex at Ranakpur is absolutely astonishing. Dedicated to the first Tirthankar (savior and spiritual teacher) who founded Jainism, it's the country's biggest and most important Jain temple complex. ",
        },
        {
            icon: seethan,
            title: "seethan Valley",
            subtitle: "Jain temples are known to be the most elaborate in India, and the temple complex at Ranakpur is absolutely astonishing. Dedicated to the first Tirthankar (savior and spiritual teacher) who founded Jainism, it's the country's biggest and most important Jain temple complex. ",
        },
        {
            icon: manu,
            title: "Drass War Memorial",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore ipsam dolore nam reiciendis, ullam voluptatem consequuntur repudiandae unde expedita.",
        },
        {
            icon: Parvati,
            title: "Parvati Valley",
            subtitle: "Dal lake is perhaps one of the most famous and scenic lakes in all of India. Situated in Srinagar in Kashmir, Dal Lake stretches to a length of around 7 kms with a width of 3.5 kms. Since Moghul times Dal Lake has been an attraction because of its beauty and aptly named Jewel in the crown of Kashmir",
        },
    ]
    
    return (
        <>           
            <div className="resortInfo">
                
                <div className="location">
                <i>D-Resorts Manali <br/></i> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -10 28 32"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                    11 Maulana Azad Road, Manali, Himachal Pradesh 123456, India
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
