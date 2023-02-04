import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Main from './comp/Main'
import Card  from './comp/Card';
import data from './data';
console.log(data)

function App() {
    const cards = data.map((e)=>{
        return (
            <Card 
            img={e.coverImg}
            rating={e.stats.rating}
            reviw={e.stats.reviewCount}
            title={e.title}
            country={e.location}
            price={e.price}
            openSpots={e.openSpots}

            
            


            />
        )
    })
 return (
  <div>
   <Navbar />
    <Main/> 
    <section className='cards-list'>
    {cards}
    </section>
  
  </div>
 )
}

export default App;
