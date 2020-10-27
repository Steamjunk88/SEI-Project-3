import React, {useState, setState} from "react";
import styled from "styled-components";
import {Bold, Holder, Icon, Modal, CloseIcon} from "../styles/BreweryDisplayStyle";
import { useSelector } from "react-redux";
import { selectBrewery } from "../features/activeBrewerySlice";


function MapModal(props) {
    const [MapData, setMapData] = useState({
        brewery: props.brewery,
        show: false,
    })

    const toggleModal = (e) => {
        setMapData({
            brewery: props.brewery,
            show: !MapData.show
        })
    }
    const activeBrew = useSelector(selectBrewery);
    console.log(activeBrew)
    let IconURL;
    switch(MapData.brewery.brewery_type) {
        case "micro":
            IconURL = "./beer-mug_1f37a.png";
            break;
        case "regional":
            IconURL = "./triangular-flag-on-post_1f6a9.png";
            break;
        case "brewpub":
            IconURL = "./fork-and-knife-with-plate_1f37d.png";
            break;
        case "large":
            IconURL = "./factory_1f3ed.png";
            break;
        case "contract":
        case "proprietor":
            IconURL = "./clinking-beer-mugs.png";
            break;
        default:
            IconURL = "./beer-mug_1f37a.png";
            break;
    }

    console.log(MapData.brewery.id)
    console.log(activeBrew.id)
    console.log(MapData.brewery.id === activeBrew.id)
    return(
        <Holder>
            <Icon 
                src={IconURL} 
                onClick={toggleModal} 
                className={MapData.brewery.id === activeBrew.id ? "light" : null}
                />
            {MapData.show ? 
            <Modal>
                <Holder>
                    <Bold>{MapData.brewery.name}</Bold>
                    <CloseIcon onClick={toggleModal}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </CloseIcon>
                    
                </Holder>
                <a href={MapData.brewery.website_url} target="_blank"> {MapData.brewery.website_url.replace("http://","")}</a>
            </Modal>
            : null }
            
        </Holder>
    )
}

export default MapModal;