import { Container, Content } from './styles'

import MemojiBoy1 from './assets/MemojiBoys1.svg'
import MemojiBoy2 from './assets/MemojiBoys2.svg'

import MemojiGirls1 from './assets/MemojiGirls1.svg'
import MemojiGirls2 from './assets/MemojiGirls2.svg'
import MemojiGirls3 from './assets/MemojiGirls3.svg'

const Memojis = () => {
    return (
        <Container>
            <Content>
                <div className={"memoji-boy-1"} > <img src={MemojiBoy1} /> </div>
                <div> <img src={MemojiBoy2} /> </div>

                <div> <img src={MemojiGirls1} /> </div>
                <div> <img src={MemojiGirls2} /> </div>
                <div> <img src={MemojiGirls3} /> </div>
            </Content>
        </Container>
    )
}

export default Memojis