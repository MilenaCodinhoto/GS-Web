import styled from "styled-components"

export const HomeStyle=styled.div`

.container {
    text-align: center;
}

.banner {
    width: 100%;
    height: 400px; 
    overflow: hidden; 
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    object-position: center; 
}

.cards{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    padding: 20px;
    flex-wrap: wrap;
}

.info-card {
    width: 350px;
    height: auto;
    padding: 20px;
    display: flex;
    transition: transform 0.3s ease;
}

.info-card:hover {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #3B4E3D;
    margin: 40px;
    gap: 20px;
}

.text-content {
    text-align: left; 
    max-width: 40%;
    margin-left: 40px;
    color: white;
}

.text-content h2 {
    font-size: 2rem;
    margin-bottom: 20px; 
}

.text-content p {
    font-size: 1.120rem;  
}

.img-info {
    width: 56%; 
    height: auto;  
    object-fit: cover;
}

.info2{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #132B13;
    margin: 40px;
    gap: 20px;
}

.text-content2{
    text-align: left; 
    max-width: 40%;
    margin-left: 40px;
    color: white;
}

.text-content2 h2 {
    font-size: 2rem;
    margin-bottom: 20px; 
}

.text-content2 p {
    font-size: 1.120rem;  
}

.img-info2 {
    width: 56%; 
    height: auto;  
    object-fit: cover;
}



`