import { useEffect, useState } from "react";
import "./gallery.scss";
import axios from "axios";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const Gallery = () => {
  const [curatedPhotos, setCuratedPhotos] = useState([]);
  //dummy state for liking photos
  const [liked, setLiked] = useState(false);
  //dummy state for bookmarking
  const [bookMark, setBookMark] = useState(false);

  useEffect(() => {
    const fetchCuratedPhotos = async () => {
      await axios
        .get("http://localhost:3000/curated")
        .then((res) => setCuratedPhotos(res.data.photos.reverse()));
    };
    fetchCuratedPhotos();
  }, []);

  const handleBookmark = () => {
    //dummy logic for bookmarking
    setBookMark((prev)=>!prev);
  };
  const handleLike = () => {
    //dummy logic for liking
    setLiked((prev)=>!prev);
  };

  console.log(curatedPhotos);
  return (
    <div className="gallery">
      <div className="container">
        <div className="selectDiv">
          <h2>Ücretsiz Stok Fotoğraflar</h2>
          <select>
            <option>Yükseliştekiler</option>
            <option>Yeniler</option>
            <option>Takip edilenler</option>
          </select>
        </div>
        <div className="photos">
          <div className="row">
            {curatedPhotos?.map((photo) => (
              <div className="photo" key={photo.id}>
                <div className="imgDiv">
                  <img alt="" src={photo?.src?.medium} className="img" />
                </div>
                <div className="hoverObjects">
                  <div className="top">
                    <div className="item" onClick={handleBookmark}>
                    {bookMark ? <BookmarksIcon /> : <BookmarkBorderIcon />}
                    </div>
                    <div className="item" onClick={handleLike}>
                      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </div>
                  </div>
                  <div className="bottom">
                  <div className="artist">
                    <img alt="artist" src={photo?.src.tiny}/>
                  <span>{photo?.photographer}</span>
                  </div>
                    <div className="item">
                      <FileDownloadOutlinedIcon />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
