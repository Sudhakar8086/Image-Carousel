import { useState } from "react";
import "./styles.css"


const images  = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/819370/pexels-photo-819370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1114318/pexels-photo-1114318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1003848/pexels-photo-1003848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/16671235/pexels-photo-16671235/free-photo-of-campsite-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/16136086/pexels-photo-16136086/free-photo-of-sunset-over-mountains-seen-from-an-observation-deck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600"
]


export default function App(){
  const [current, SetCurrent] = useState(0);

function nextSlide(){
  SetCurrent(current === images.length -1 ? 0 : current +1 )
}

function previousSlide(){
  SetCurrent(current=== 0 ? images.length -1 : current -1 )
}


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '5px', // Add padding to create space below the heading
};



return(
  <div className="container" style={containerStyle} >
    <h1 className="heading">
      Image Carousel
    </h1>
    <div className="slider-container">
    <div className="left-arrow" onClick={previousSlide}>
          ⬅Previous
        </div>
        {
          images.map(
            (image, index) => 
            current === index && (
              <div key={image} className="slide">
              <img  className="carousel-image" src={image} alt="images"/>
              </div>
            )
          )
        }
        <div className="right-arrow" onClick={nextSlide}>
         Next  ⮕
        </div>
    </div>
  </div>
)

}