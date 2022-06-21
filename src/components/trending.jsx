import styled from "styled-components"
import { theme } from "../styles/theme"


export default function Trending () {
    return (
        <TrendingContainer>
            <h2>trending</h2>
            <TrendingTopics>

            </TrendingTopics>
        </TrendingContainer>
    )
}

const TrendingContainer = styled.div`
    width: 301px;
    height: 406px;
    background-color:${({theme}) => theme.colors.postBackground};
    border-radius: 16px;
    flex-direction: column;
    & > h2 {
        margin: 9px 0px 12px 16px;
        font-weight:700;
        font-size: 40px;
        font-family:${({theme}) => theme.fonts.displayFont};
        color:${({theme}) => theme.colors.secondary};
      }

`;

const TrendingTopics = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 22px 16px 22px 16px;
    border-top: 1px solid #484848;
    overflow-x: hidden;
`;
