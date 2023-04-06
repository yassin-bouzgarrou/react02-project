import Grid from "../images/bikes-home.png"

export default function Main(){
    return (
        <section className="Main-dis">
        <img  className="hero-img" src={Grid}/> 
        <h1 className="hero-title">Online Rent <span className="bikes-dd">Bikes</span></h1>
        <p className="hero-text">This is a convenient and <span>affordable</span> way for people to rent bicycles for a variety 
        of purposes, such as commuting, <span>exercising</span>, or sightseeing.. Renting bikes online has become increasingly popular in recent years as people seek out more sustainable and healthy
         transportation options. It is also a great way to try out different bikes before making a purchase or to explore new areas 
        without having to <span>bring</span> your own bike along.</p>
        </section>
    )
}