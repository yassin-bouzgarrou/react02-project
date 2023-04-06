import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './comp/Navbar';
import Main from './comp/Main'
import Card from './comp/Card';
import Crad from './images/card.png'
import Cardchek from './comp/Cardchek';
import axios from 'axios';
import AddBike from './comp/AddBike';




function App() {
    const switchView = (x) => {
        setView(x)
    }
    const [data, setdata] = useState([])
    const [addtocard,setcard] = useState([])
    const [agian,setagain]=useState(false)
    const [view, setView] = useState("home");
    useEffect(() => {
        axios.get('http://localhost:5001/api/rent').then((res) => {
            setdata(res.data)

        }).catch((err) => {
            console.log(err);
        })
    }, [agian])

  const getonedata=(x)=>{
    setcard(olddata=>[...olddata,x])
  }
  const handlerolad =()=>{
    setagain(!agian)

  }


    const cards = data.map((e) => {
        return (
            <Card handlerolad={handlerolad}  getonedata={getonedata }data={e} />
        )
    })
    return (
        <div>
            {view === "home" && <Navbar />}
            {view === "admin" && <AddBike/> }
          
          { view === "home" && <div ><button  className='bike-id' onClick={() => { switchView("admin") }} >Add bike</button></div>}
            {view === "card" &&  addtocard.length> 0 ?<Cardchek addtocard={addtocard}  setcard={setcard} /> : view === "card"  && <h1>nothing on the card</h1>}
         
           {view === "home"&& <div className='fix-me' onClick={() => { switchView("card") }} ><a href="#" ><img className='image-card' src={Crad}></img></a></div>}
            {view === "home" && <Main  />}
         
            {view === "home" && <section className='cards-list'>
                {cards}
           
            </section>}

        </div>
    )
}

export default App;
