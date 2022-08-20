import React from 'react'
import './styles.css'
import Kashmir from '../assets/Kashmir.png'
import Leh from '../assets/Leh.png'
import Himachal from '../assets/Himachal.png'
import Goa from '../assets/Goa.png'
import Rajasthan from '../assets/Rajasthan.png'
import Port from '../assets/Andaman/Port.jpg'


const MostLoved = () => {

    const data = [
        {
            image: Kashmir,
            title: "Kashmir",
            subTitle: "Don't Listen To What They Say, Go See.",
            cost: "Starting ₹14,000",
            duration: "3N 4D",
            reflink : '/destinations/info'
        },
        {
            image: Leh,
            title: "Leh",
            subTitle: "Escape The Ordinary.",
            cost: "Starting ₹19,990",
            duration: "2N 3D",
            reflink: "/destinations/leh"
        },
        {
            image: Himachal,
            title: "Manali",
            subTitle: " Feed Your Wanderlust.",
            cost: "Starting ₹17,990",
            duration: "3N 4D",
        },
        {
            image: Goa,
            title: "Goa",
            subTitle: "Let Your Soul And Spirit Fly on the Beaches.",
            cost: "Starting ₹14,000",
            duration: "3N 4D",
        },
        {
            image: Rajasthan,
            title: "Udaipur",
            subTitle: "The Sand Dunes here Leaves You Speechless.",
            cost: "Starting ₹12,900",
            duration: "3N 4D",
            reflink: '/destinations/udaipur'
        },
        {
            image: Himachal,
            title: "Mussoorie",
            subTitle:"Need a break from the Hustle?",
            cost: "Starting ₹5,999",
            duration: "3N 4D ",
        },
        {
            image: Port,
            title: "Andaman & Nicobar Islands",
            subTitle:"Need a break from the Hustle?",
            cost: "Starting ₹5,999",
            duration: "3N 4D ",
            reflink:'/destinations/port_blair'
        },
        {
            image: Goa,
            title: "Ooty",
            subTitle:"Need a break from the Hustle?",
            cost: "Starting ₹5,999",
            duration: "3N 4D ",
        },
       


    ];
    



    return (
        
        <div className="places">
            

            <div className="rd">
                Most Loved Destinations
            </div>
            <div className="destinations">
                {data.map((destination) => {
                    return (
                        <div className="destination">
                            <img src={destination.image} alt="" className='pla'/>
                            <div className='place'>{destination.title}</div> 
                            <div className="tag">{destination.subTitle}</div>
                            <div className="info">      
                            </div>
                            <h4 className='cost'>{destination.cost}</h4>
                            <div className="distance">
                                <a className='plac_btn' href={destination.reflink}>Explore</a>
                                <span><b>{destination.duration}</b></span>
                               
                            </div>

                        </div>


                    )

                })}
            </div>
        </div>


    )
}

export default MostLoved