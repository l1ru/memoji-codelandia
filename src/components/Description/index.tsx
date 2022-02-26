import { Container, Content } from './styles'

import Memoji1 from '../Memojis/assets/MemojiGirls3.svg'
import Memoji2 from '../Memojis/assets/MemojiGirls2.svg'

import Memoji3 from '../Memojis/assets/MemojiGirls1.svg'
import Memoji4 from '../Memojis/assets/MemojiBoys1.svg'
import Memoji5 from '../Memojis/assets/MemojiBoys2.svg'

const Description = () => {
  return (
      <Container>
          <Content>
              <p>lorem ipsum dolor sit amet</p>
              <div className={"memojis"} >
                  <div className={"memoji1"}>
                      <img src={Memoji2}  />
                  </div>

                  <div className={"memoji2"}>
                      <img src={Memoji1}  />
                  </div>
              </div>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

              <div>
                  <button className={"first"} >CRIAR MEMOJI</button>
                  <button className={"second"} >VER BIBLIOTECA</button>
              </div>
              <div className={"memojis second "} >
                  <div className={"memoji4"}>
                      <img src={Memoji4}  />
                  </div>

                  <div className={"memoji5"}>
                      <img src={Memoji5}  />
                  </div>

                  <div className={"memoji3"}>
                      <img src={Memoji3}  />
                  </div>

              </div>
          </Content>
      </Container>
  )
}

export default Description