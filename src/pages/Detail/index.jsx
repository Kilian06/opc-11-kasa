import React from "react";
import { useParams } from "react-router-dom";
import loadFiles from "../../datas/data";
import "../../styles/detail.css";
import Tag from "../../components/tag";
import Accordion from "../../components/accordion";
import RatingStar from "../../components/star";
import Slider from "../../components/slider";
import Erreur from "../Erreur";

function Detail(props) {
  var { idHebergement } = useParams();
  var hebergementInfo = loadFiles.find((item) => item.id === idHebergement);
  if(!hebergementInfo){
    return(
      <Erreur />
    )

  }
  var title = hebergementInfo.title;
  var hostName = hebergementInfo.host.name;
  var hostPicture = hebergementInfo.host.picture;
  var location = hebergementInfo.location;
  var tags = hebergementInfo.tags;
  var description = hebergementInfo.description;
  var equipments = hebergementInfo.equipments;
  var ratingNote = hebergementInfo.rating
  var hebergImage = hebergementInfo.pictures

  return (
    <div className="detailStyle">
        <Slider photo={hebergImage}/>
      <div className="detailTitreHote">
        <div className="detailTitre">{title}</div>
        <div className="detailHoteSectionDesktop">
          <div className="detailHoteName">{hostName}</div>
          <img
            className="detailHoteImg"
            src={hostPicture}
            alt="Photo Hote"
          ></img>
        </div>
      </div>
      <div className="detailLocation">{location}</div>

    <div className="detailTagRating">
    <ul className="detailListTag">
        {tags.map((tag, index) => (
          <Tag tagTitle={tag} key={`${tag}-${index}`} />
        ))}
      </ul>
      <div className="detailRatingHote">
      <div className="detailRating">
            <RatingStar rating = {ratingNote}/>
      </div>
      <div className="detailHoteSectionMobile">
          <div className="detailHoteName">{hostName}</div>
          <img
            className="detailHoteImg"
            src={hostPicture}
            alt="Photo Hote"
          ></img>
        </div>
      </div>

    </div>
      
      <div className="detailInfoDescEquip">
        <div className="detailInfoDescEquipBox1">
          {" "}
          <Accordion title="Description" content={description} />
        </div>
        <div className="detailInfoDescEquipBox1">
          {" "}
          <Accordion title="Equipement" content={equipments} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
