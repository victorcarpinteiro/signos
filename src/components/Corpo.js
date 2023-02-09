import React from 'react'
import "./Corpo.css"

import Aries from "./imagens/aries.png"
import Aquario from "./imagens/aquario.png"
import Cancer from "./imagens/cancer.png"
import Capricornio from "./imagens/capricornio.png"
import Escorpiao from "./imagens/escorpiao.png"
import Gemeos from "./imagens/gemeos.png"
import Leao from "./imagens/leao.png"
import Libra from "./imagens/libra.png"
import Peixes from "./imagens/peixes.png"
import Sagitario from "./imagens/sagitario.png"
import Touro from "./imagens/touro.png"
import Virgem from "./imagens/virgem.png"

const Corpo = ({
    as1, as2, as3, as4, as5, as6, as7, as8, as9, as10, as11,as12
}) => {
  return (
    <div className='signos'>
        <div className='divisaoSignos'>
            <img src={Aries} alt="aries" onClick={as1}/>
            <img src={Touro} alt="touro" onClick={as2}/>
            <img src={Gemeos} alt="gemeos" onClick={as3}/>
        </div>
        <div className='nomesSignos'>
            <h3>Áries</h3>
            <h3>Touro</h3>
            <h3>Gêmeos</h3>
        </div>
        <div className='divisaoSignos'>
            <img src={Cancer}  alt="cancer" onClick={as4}/>
            <img src={Leao}  alt="leao" onClick={as5}/>
            <img src={Virgem}  alt="virgem" onClick={as6}/>
        </div>
        <div className='nomesSignos'>
            <h3>Câncer</h3>
            <h3>Leão</h3>
            <h3>Virgem</h3>
        </div>
        <div className='divisaoSignos'>
            <img src={Libra}  alt="libra"onClick={as7}/>
            <img src={Escorpiao} alt="escorpião" onClick={as8}/>
            <img src={Sagitario} alt="sagitário"onClick={as9} />
        </div>
        <div className='nomesSignos'>
            <h3>Libra</h3>
            <h3>Escorpião</h3>
            <h3>Sagitário</h3>
        </div>
        <div className='divisaoSignos'>
            <img src={Capricornio } alt="capricornio"onClick={as10}/>
            <img src={Aquario} alt="aquario" onClick={as11}/>
            <img src={Peixes} alt="peixes"onClick={as12} />
        </div>
        <div className='nomesSignos'>
            <h3>Capricórnio</h3>
            <h3>Aquário</h3>
            <h3>Peixes</h3>
        </div>
    </div>
  )
}

export default Corpo