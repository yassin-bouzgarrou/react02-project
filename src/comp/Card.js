

export default function Card(propes) {
    console.log(propes)

    return (
        <div className="card">
           {propes.openSpots === 0 && <div className="opne-sea"> SOLD OUT</div>}
            <img src={`./images/${propes.img}`} className="card--image" />
            <div className="card-info">
                <img src="./images/Star1.png" className="Card-star" />
                <span >{propes.rating}</span>
                <span className="gray">({propes.reviw}) .</span>
                <span className="gray">{propes.country}</span>
            </div>
            <p className="card-title">{propes.title}</p>
            <p className="ps"><span className="bold">from ${propes.price}</span>/ person</p>
        </div>
    )

}