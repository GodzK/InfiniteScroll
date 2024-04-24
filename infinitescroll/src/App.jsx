import React, { useEffect, useState } from "react";
import PhotoComponent from "./components/PhotoComponents";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImage = async () => {
    setIsLoading(true);
    try {
      const apiUrl = `https://api.sampleapis.com/codingresources/codingResources`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (Array.isArray(data)) {
        setPhotos((oldData) => {
          return [...oldData, ...data];
        });
      } else {
        console.error("Data received from API is not an array:", data);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImage();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !isLoading
      ) {
        setPage((oldPage) => oldPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <main>
      <h1 style={{textAlign:"center", color:"white"}}  >Infinite Scroll Phakaphol Devinit2</h1>
      <section className="photos">
        <div className="card-container">
          {photos.map((photo, index) => (
            <PhotoComponent key={index} {...photo} />
          ))}
        </div>
        {isLoading && <div>Loading...</div>}
      </section>
    </main>
  );
}

export default App;
