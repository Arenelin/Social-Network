import React from 'react';
import styled from 'styled-components';

export const Preloader = () => {
    return (
        <LoadingScreen>
            <LoadingSpinner/>
        </LoadingScreen>
    );
};


const LoadingScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`

const LoadingSpinner = styled.div`
    border: 7px solid #f3f3f3;
    border-top: 7px solid #b565f7;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 1.5s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
