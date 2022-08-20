import React from 'react'
import './data.css'
import logo from '../assets/logo.jpg'
import Kashmir from '../assets/Kashmir.png'
import Leh from '../assets/Leh.png'
import Manali from '../assets/Manali/Manali.jpg'
import Goa from '../assets/Goa.png'
import Rishikesh from '../assets/Rishikesh.png'
import Rajasthan from '../assets/Rajasthan.png'
import Kerala from '../assets/Kerala.png'
import Punjab from '../assets/Punjab.png'
import Taj from '../assets/Agra/tajmahal.jpg'
import khajuraho from '../assets/Khajuraho/khajuraho.jpg'
import SOU from '../assets/Gujarat/statue.jpg'
import BGR from '../assets/Bengaluru/BGR.jpg'
import Port from '../assets/Andaman/Port.jpg'
import Main from '../assets/Pondi/main2.jpg'

const SearchItem = () => {
    const data = [
        {
            log: logo,
            image: Kashmir,
            title: "D-Resorts Srinagar",
            subTitle: "Explore Kashmir Like Never Before ",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹14,000",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation!!",
            reflink: '/destinations/info'
        },
        {
            log: logo,
            image: Leh,
            title: "D-Resorts Leh",
            subTitle: "Escape The Ordinary.",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹19,990",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation",
            reflink: "/destinations/leh"
        },
        {
            log: logo,
            image: Manali,
            title: "D-Resorts Manali",
            subTitle: " Feed Your Wanderlust.",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹17,990",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation!!",
            reflink: "/destinations/manali"
        },
        {
            log: logo,
            image: Punjab,
            title: "Amritsar",
            subTitle: "Experience The Excitement!",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹9,990 ",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation",
        },
        {
            log: logo,
            image: Goa,
            title: "Goa",
            subTitle: "Let Your Soul And Spirit Fly on the Beaches.",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹14,000",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation!!",
        },
        {
            log: logo,
            image: Kerala,
            title: "Kochi",
            subTitle: "Feel the Nature in God's Own Country",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹24,990",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation!!",
        },
        {
            log: logo,
            image: Rajasthan,
            title: "Udaipur",
            subTitle: "The Sand Dunes here Leaves You Speechless.",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹12,900",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation!!",
            reflink: '/destinations/udaipur'
        },
        {
            log: logo,
            image: Rishikesh,
            title: "Dehradun",
            subTitle: " Fuel Your Soul With Exciting Mountains",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹8,990",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            desc:"Free Cancellation!!",
        },
        {
            log: logo,
            image: Taj,
            title: "Agra",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: Rajasthan,
            title: "Jaipur",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: khajuraho,
            title: "Khajuraho",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: Manali,
            title: "Mussoorie",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: SOU,
            title: "Ahmedabad",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: BGR,
            title: "Bengaluru",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },

        {
            log: logo,
            image: Port,
            title: "Port Blair",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
            reflink: '/destinations/port_blair'
        },
        {
            log: logo,
            image: BGR,
            title: "New Delhi",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",

        },
        {
            log: logo,
            image: BGR,
            title: "Mumbai",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: BGR,
            title: "Ooty",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: BGR,
            title: "Varanasi",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },
        {
            log: logo,
            image: Main,
            title: "Pondicherry",
            subTitle: "Need a break from the Hustle?",
            address: "11 Maulana Azad Road, XYZ, ABC State, 123456",
            cost: "Starting ₹5,999",
            desc: "Free Cancellation!!",
            cancel:"Not sure about your plans? Don't worry Lock price Now & Pay Later",
        },


    ];
    return (
        <div className="abc">
            <div className="resorts">
                Our Resorts
            </div>
            <div className="xyz">
                {data.map((yuv) => {
                    return (
                        <div className="def">
                            <img src={yuv.image} alt="" className="ijk" />                      
                            <div className="desc">

                                <div className="pqr">{yuv.title}</div>
                                <div className="add">{yuv.address}</div>
                                <div className="tuv">{yuv.subTitle}</div>
                                <div className="jkl">{yuv.desc}</div>
                                <div className="cancel">{yuv.cancel}</div>          
                            </div>
                            <div className="rates">
                            <h4 className='cost'>{yuv.cost}</h4> 
                            <a className="mug" href={yuv.reflink}>View Rates</a>
                            </div>
                            <div className="logo">
                                <img src={yuv.log} className="ijk" alt='logo.jpg'/>
                            </div>
                            
                

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchItem