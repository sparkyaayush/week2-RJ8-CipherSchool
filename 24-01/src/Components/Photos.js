// import React, {useEffect, useState} from "react";
// const Photos = () => {
//     const [photoList, setPhotoList] = useState([]);
//     const [isLoading, setisLoading] = useState(true);
//     useEffect(()=>{
//        fetch("https://jsonplaceholder.typicode.com/photos")
      
//        .then((response) => response.json())
//        .then((json)=> setPhotoList(JSON.parse(json)))
//        .finally(()=> setisLoading(false));
//     },[]);
import React, {useEffect, useState} from "react";
import Axios from "axios"
const Photos = () => {
    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(()=>{
       Axios.get("https://jsonplaceholder.typicode.com/photos")
      
       .then((response) => {
      let foundPhotos = response.data;
      setPhotoList(foundPhotos);
       }).catch((err)=>console.error(err)).finally(()=> setisLoading(false));
    },[]);
    if(isLoading){
        return <h4>Loading...</h4>
    }
    return (
        <div>
            {photoList.map((photo, index) => {
                <div key={index}>
                    <img src= {photo.url} alt={photo.title}/>
                </div>
            })}
        </div>
    )
}
export default Photos