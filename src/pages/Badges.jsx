import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import BadgesList from '../components/BadgesList';
import confLogo from '../images/logo.svg';
import BackgroundHeader from '../images/stars.svg';
import './styles/Badges.css';

const api = require('../api/list.json');
//console.log('api : ', api);

class Badges extends React.Component{
    constructor(props) {
        /* Inicialización de los estados */
        super(props);        
        console.log('1 Constuctor');
        this.state = {
            data: []
        };
    }
    componentDidMount(){
        /* Asignación de los valores de los estados */
        console.log('3 componentDidMount');
        
        this.timeoutId = setTimeout(() =>{
            this.setState({
                data: api
            })
        }, 3000 )
    }

    componentDidUpdate(prevProps, prevState){
        /* Actualizacón de los componentes al modificar algun valor */
        console.log('5 componentDidUpdate')
        console.log({
            prevProps: prevProps, 
            prevState: prevState
        });
        console.log({
            props: this.props, 
            state: this.state
        });
    }

    componentWillUnmount(){
        /* Liberación de espacio en memoria o proceso inconcluos a salir del componente */
        console.log('6 componentWillUnmount');
        clearTimeout(this.timeoutId);
    }
    
    render(){        
        console.log('state : ', this.state);
        console.log('2 y 4 render');
        return(
            <React.Fragment>
                <BadgesHeader>
                    <BadgesHero>
                        <BadgesContainer className="ContainerLogo">
                            <BadgesImgLogo
                                src={confLogo}
                                alt="Conf logo"
                            />
                        </BadgesContainer>
                    </BadgesHero>
                </BadgesHeader>
                <BadgesContainer>
                    <BadgeButton>
                        <BadgeLinkButton to="/badges/new">
                            New Badge
                        </BadgeLinkButton>
                    </BadgeButton>
                </BadgesContainer>
                <div className="Badges__list">
                    <BadgesContainerList>
                        <BadgesList badges={this.state.data}/>
                    </BadgesContainerList>
                </div>
            </React.Fragment>
        )
    }
}

const BadgesHeader = styled.div``;

const BadgesHero = styled.div`
    width: 100%;
    padding: 2rem 0;
    background: url(${BackgroundHeader}), #1B1B25;
    background-repeat: repeat;
    margin-bottom: 1rem;

    .ContainerLogo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const BadgesContainer = styled.div`
    width: 100%;
    max-width: 580px;
    margin: 0 auto;
    padding: 1rem;
`;

const BadgesContainerList = styled(BadgesContainer)`
    background: #f5f5f5;
`;

const BadgesImgLogo = styled.img`
    margin-bottom: 2rem;
    width: 90%;
`;

const BadgeButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
`;

const BadgeLinkButton = styled(Link)`
    background: #97ca3f;
    padding: 10px 30px;
    border-radius: 10px;
    color: #FFF;
    text-decoration: none;
`;

export default Badges;