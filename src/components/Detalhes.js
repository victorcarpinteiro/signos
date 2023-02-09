import React from 'react'

import './Detalhes.css'

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

const Detalhes = ({valor, as0}) => {
    const Valor = valor;
        
            if(Valor === "aries"){
               return <div className='dados'>
                <img src= {Aries} alt="aries" />
                <p>de 20 de Março á 19 de Abril</p>
                <p><strong>Características:</strong> Os arianos são pessoas confiantes e impetuosas. No entanto, eles podem bater de frente com os outros porque são muito impacientes e honestos.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            } else if (Valor === "touro"){
                return <div className='dados'>
                <img src= {Touro} alt="touro" />
                <p>de 20 de Abril á 20 de Maio</p>
                <p><strong>Características:</strong> Os taurinos são considerados leais e persistentes. Ao mesmo tempo, eles são frequentemente conhecidos como preguiçosos e teimosos.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            } else if (Valor === "gemeos"){
                return <div className='dados'>
                <img src= {Gemeos} alt="gemeos" />
                <p>de 21 de Maio á 20 de Junho</p>
                <p><strong>Características:</strong> Os geminianos são altamente inteligentes e sociáveis. Por outro lado, também são considerados superficiais e indecisos.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            } else if (Valor === "cancer"){
                return <div className='dados'>
                <img src= {Cancer} alt="cancer" />
                <p>de 21 de Junho á 21 de Julho</p>
                <p><strong>Características:</strong> Os cancerianos são pessoas caridosas e amigos leais. Por outro lado, eles também tendem a ser agressivos e são conhecidos por ficarem rabugentos em algumas situações.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            } else if (Valor === "leao"){
                return <div className='dados'>
                <img src= {Leao} alt="leao" />
                <p>de 22 de Julho á 22 de Agosto</p>
                <p><strong>Características:</strong> Os leoninos são orgulhosos e corajosos, embora às vezes sejam um pouco arrogantes e competitivos demais.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            } else if (Valor === "virgem"){
                return <div className='dados'>
                <img src= {Virgem} alt="virgem" />
                <p>de 23 de Agosto á 22 de Setembro</p>
                <p><strong>Características:</strong> Os virginianos são trabalhadores e organizados. Ao mesmo tempo, também são perfeccionistas, excessivamente críticos e que tendem a se preocupar muito.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            }else if (Valor === "libra"){
                return <div className='dados'>
                <img src= {Libra} alt="libra" />
                <p>de 23 de Setembro á 22 de Outubro</p>
                <p><strong>Características:</strong> Libra é notoriamente o signo de pessoas extrovertidas e inteligentes. É sociável,vaidoso e odeia tomar decisões difíceis.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            }else if (Valor === "escorpiao"){
                return <div className='dados'>
                <img src= {Escorpiao} alt="escorpiao" />
                <p>de 23 de Outubro á 21 de Novembro</p>
                <p><strong>Características:</strong> Dizem que os escorpianos são "caçadores de emoções". Eles também costumam ser invejosos e fascinados por tudo que é macabro.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            }else if (Valor === "sagitario"){
                return <div className='dados'>
                <img src= {Sagitario} alt="sagitario" />
                <p>de 22 de Novembro á 20 de Desembro</p>
                <p><strong>Características:</strong> Os sagitarianos são aventureiros, altamente independentes e muito imaginativos. Por outro lado, eles também são considerados sinceros demais e impacientes.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            }else if (Valor === "capricornio"){
                return <div className='dados'>
                <img src= {Capricornio} alt="capricornio" />
                <p>de 21 de Dezembro á 19 de Janeiro</p>
                <p><strong>Características:</strong> No lado positivo, os capricornianos são considerados determinados e pragmáticos. Ao mesmo tempo, eles também são considerados pessoas conservadoras e sérias demais.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            }else if (Valor === "aquario"){
                return <div className='dados'>
                <img src= {Aquario} alt="aquario" />
                <p>de 20 de Janeiro á 18 de Fevereiro</p>
                <p><strong>Características:</strong> Os aquarianos são assertivos e criativos. Mas, também, podem ser solitários e impulsivos.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            }else if (Valor === "peixes"){
                return <div className='dados'>
                <img src= {Peixes} alt="peixes" />
                <p>de 19 de Fevereiro á 19 de Março</p>
                <p><strong>Características:</strong> O pisciano é uma pessoa aventureira e compassiva, mas que pode ser um pouco ansiosa ou carente demais.</p>
                <button onClick={as0}>Voltar</button>
               </div>
            
            
        };
      
  
}

export default Detalhes