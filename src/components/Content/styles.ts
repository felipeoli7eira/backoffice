import styled from 'styled-components'

export const ComponentContainer = styled.div`
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;

    .nav-top {
        padding: 1.4rem 38px;
        display: flex;
        justify-content: flex-end;

        .nav-top-items {
            display: flex;
            align-items: center;
            gap: 1.4rem;
        }

        .nav-top-balance-info {
            font-size: 24px;
            font-weight: 700;
            line-height: 29px;
            color: #6ACC32;
        }

        .nav-top-profile-picture {
            width: 68px;
            height: 68px;
            border-radius: 50%;
            object-fit: cover;
            object-position: 50% 100%;
        }
    }
`;

export const ContentArea = styled.div`
    border: 0.140rem solid #6ACC32;
    border-radius: 15px;
    margin: 0 40px;
    height: 80%;
    overflow-y: auto;
    overflow-x: auto;
    background-color: #242424;
    z-index: 111500;
`;