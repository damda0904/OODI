/* global kakao */

import React,{useState,useEffect} from 'react';
import '../../css/Components/Common/AddressSetting.css';
import Back from './Back';
import LargeButton from './LargeButton';
import Map from './Map'
// const {kakao} = window

const AddressSetting = (props) => {
    const [inputText,setInputText] = useState('')
    const [searchKeyword,setSearchKeyword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchKeyword(inputText)
    }

    // useEffect(()=>{
    //     const container = document.getElementById('map');
	// 	const options = {
	// 		center: new kakao.maps.LatLng(33.450701, 126.570667),
	// 		level: 3
	// 	};
    //     const map = new kakao.maps.Map(container, options);
    //     const marker = new kakao.maps.Marker({
    //         position:map.getCenter()
    //     })
    //     marker.setMap(map);

    //     let geocoder = new kakao.maps.services.Geocoder();
    //     const searchLocation = () => {
                
    //     }
    //     geocoder.addressSearch(searchKeyword, function(result, status) {
    //         // 정상적으로 검색이 완료됐으면 
    //         if (status === kakao.maps.services.Status.OK) {

    //             let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    //             // 결과값으로 받은 위치를 마커로 표시합니다
    //             let marker = new kakao.maps.Marker({
    //                 map: map,
    //                 position: coords
    //             });

    //             map.setCenter(coords);
    //         } 
    //     });    
            
    // },[]);


   const setPropsAddress = () => {
       props.setOpenMap(false)
       props.setAddress(searchKeyword);
   }

    return(
        <div className="setAddress">
            <header>
                <Back link='/signup'/>
                <h2>{props.title}</h2>
            </header>
            <section className="input-address">
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={(e)=>setInputText(e.target.value)} 
                    className="search-keyword"
                />
                <button className="submit-keyword" onClick={handleSubmit}>지도보기</button>
            </section>
            <Map searchKeyword={searchKeyword}/>

            <section className="confirm-address">
                <h3>이 주소가 맞나요?</h3>
                <div>{searchKeyword}</div>
            </section>
            <LargeButton onClick={()=>setPropsAddress()}>주소 설정</LargeButton>
        </div>
    )
}

export default AddressSetting;