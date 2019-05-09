import React from 'react';
import styled from 'styled-components';

class BadgesList extends React.Component{
    render(){
        return(
            <BadgestListUl>
                {this.props.badges.map((badge) => {
                    return (
                        <BadgestListContent key={badge.id}>
                            <BadgestAvatarContent>
                                <BadgestAvatarImage src={badge.avatarUrl} alt={badge.firstName}/>
                            </BadgestAvatarContent>
                            <BadgestInfoContent>
                                <BadgestInfoText>
                                    {badge.firstName} {badge.lastName}
                                    <br/>
                                    {badge.twitter}
                                    <br/>
                                    {badge.jobTitle} &nbsp;&nbsp; {badge.email}
                                </BadgestInfoText>
                            </BadgestInfoContent>                                                        
                        </BadgestListContent>
                    )
                })}
            </BadgestListUl>
        )
    }
};
const BadgestListUl =styled.ul`
    padding: 0;
    margin: 0;
`;

const BadgestListContent = styled.li`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border-radius: 10px;
    background: #FFFFFF;
    margin: 15px 0;
`;

const BadgestAvatarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BadgestAvatarImage = styled.img`
    border-radius: 50%;
`;

const BadgestInfoContent = styled.div``;

const BadgestInfoText = styled.p``;

export default BadgesList;