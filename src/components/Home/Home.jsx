import React from 'react'
import home from '../assets/home.png'
import Footer from '../footer/Footer';
import Services from '../services/Services';
import './style_home.css'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import MostLoved from '../Places/MostLoved';

const Home = () => {
  const [query, setQuery] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <>


      <div className="head">

        <div className="bground">
          <img src={home} alt='' />
        </div>
        <div className="content">
          <div className="title"><h1>A Vast World Awaits <br />you for being Explored</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt animi ipsum veritatis? Quo ut eligendi facilis tenetur nemo explicabo?
            </p>
          </div>

          <div className="search">
            <div className="con">
              <label htmlFor="">Where Do you Want to Go?</label>
              <input type="text" placeholder='Search Your Location' onChange={e => setQuery(e.target.value)} />
            </div>
            <div className="searchitem">
              <span className="searchText" onClickCapture={() => setOpenDate(!openDate)}><label htmlFor="date" className="check">Check-in</label>
              <br />
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />}
            </div>


            <div className='explore'>

              <button type="submit">Explore Now!</button>
            </div>


          </div>
        </div>



      </div>
      <Services />
      <MostLoved />
      <Footer />



    </>
  )
}

export default Home