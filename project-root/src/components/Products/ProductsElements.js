import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const ServicesContainer = styled.div`
    height: 150vh;
    //padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #101522;
    /* background: #fffff0; */
    /* margin-bottom: -200px; */
   // background-image: url("http://www.svmagnetics.com/templates/scottsvalleymagnetics/images/magnetic-field-bg.jpg");
   // background-size: 100% 100%;

    @media screen and (max-width: 1200px){
        height: 900px;
    }

    @media screen and (max-width: 1000px){
        height: 900px;
    }

    @media screen and (max-width: 768px){
        height: 900px;
    }

    @media screen and (max-width: 480px){
        height: 900px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

`
export const ServicesWrapper2 = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    margin: 10px;
   // max-width: fit-content;
    min-width: 300px;
    min-height: 480px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    color: #000;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }


`

export const ServicesIcon = styled.img`
    height: 300px;
    width: 300px;

    @media screen and (max-width: 768px){
        width: 100%;
    }
` 

export const ServicesH1 = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
    border-radius: 33px;
    margin-bottom: 100px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
`

export const ServicesDiv = styled.div`
    font-size: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-top: auto;

    @media screen and (max-width: 480px){
        width: 130%;
    }
`

export const ServicesLinks = styled(LinkR)`
    border-radius: 50px;
    background: white;
    border: 1px solid #4169e1;
    //background: #4169e1;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: black;
    //color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    margin: 12px;
    min-width: 200px;

    &:hover {
        background-color: #4169e1;
        color: #fff;
    }

    @media screen and (max-width: 480px){
        width: 50%;
        margin-left: 15%;
    }
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: justify;
    color: black;
`

export const ElectroImageContainter = styled.div`
    font-size: 1rem;
    text-align: center;
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;

    @media screen and (max-width: 768px){
        align-items: center;
        justify-content: center;
    }
`

export const ElectroImage = styled.img`
    height: 75px;
    width: 133px;
    margin-bottom: 16px;
    /* margin: 9px; */

    @media screen and (max-width: 768px){
        width: 100%;
    }
`