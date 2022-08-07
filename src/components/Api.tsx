import React, {useState, useEffect } from "react";

type ParamType = {
    inputKeyword:string;
  } 

const YOUTUBE_SEARCH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = "AIzaSyAGcq6cYFwovcxEQhvZrFZOgiXUlMF0Ukg";

const Api = (props:ParamType) => {
    
    const {inputKeyword} = props;
    const [videoId, setVideoId] = useState("");

    const onClickSearch =() => {
        console.log("sent to the param:", inputKeyword);
        const params = {
            key:API_KEY,
            q:inputKeyword,
            type:"video",
            maxResults:"1",
            order: "viewCount",
        }
        const queryParams = new URLSearchParams(params);
    
       
            fetch(YOUTUBE_SEARCH_API_URI + queryParams)
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log("API success:" , result);
    
                    if(result.items && result.items.length !== 0){
                        const firstItem = result.items[0];
                        setVideoId(firstItem.id.videoId);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
      }

    // useEffect(() =>{

    // //define the query string
    // const params = {
    //     key:API_KEY,
    //     q:inputKeyword,
    //     type:"video",
    //     maxResults:"1",
    //     order: "viewCount",
    // }
    // const queryParams = new URLSearchParams(params);

   
    //     fetch(YOUTUBE_SEARCH_API_URI + queryParams)
    //     .then((res) => res.json())
    //     .then(
    //         (result) => {
    //             console.log("API success:" , result);

    //             if(result.items && result.items.length !== 0){
    //                 const firstItem = result.items[0];
    //                 setVideoId(firstItem.id.videoId);
    //             }
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    // },[])


    return (
        <>
            <button onClick={onClickSearch}>search</button>
            <iframe
                id="player"
                width="640"
                height="360"
                src={"https://www.youtube.com/embed/" + videoId}
                frameBorder = "0"
                allowFullScreen/>
        </>
    );
};

export default Api;