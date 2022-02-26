import { Container, Content, Nav } from './styles'

import Search from './assets/search.svg'

import Description from '../Description'
import Footer from "../Footer";
import Memojis from "../Memojis";

const NavBar = () => {
    return (
        <Container>
            <Content>
                <Nav>
                    <p>CodeMoji</p>
                    <div>
                        <button className={"btn-search"} > <img src={Search} /> </button>
                        <button className={"btn-login"} > FAZER LOGIN </button>
                    </div>
                </Nav>
            </Content>
            {/*<Memojis />*/}
            <Description />
            <Footer/>
        </Container>
    )
}
export default NavBar