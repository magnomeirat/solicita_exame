import React, { useState} from 'react';
import './estilos.css';

 function Principal() {
 
      const [solicitacao,setSolicitacao] = useState([]);
      const [exameSolicit,setExame] = useState('');
      const [exigejustificativa,setExigeJustificativa] = useState(true)
 
 

  function incrementa_solicitacao(){
    
    setSolicitacao([...solicitacao,exameSolicit]) 
  

   setExame('')
    
  }


  return (
    <div>
            <header><h1>Tela de Solicitação SADT</h1></header>
            <div id='Solicitar'>
            <input type='tex' placeholder='Exame Prescrito' required value={exameSolicit} onChange={e => setExame(e.target.value)}></input>
            <button onClick={incrementa_solicitacao}>Solicitar</button>
            </div>

            <div id='Solicitados'>

              <ul>

                  {solicitacao.map(item=><li key={solicitacao.indexOf()}>
                    
                    {item} 
                    {exigejustificativa && <div><textarea placeholder='Justifique a Solicitação'/></div> }
                    {console.log('O valor é' +exigejustificativa)}
                  
                  </li>)}

              </ul>

            </div>

    </div>
   );
 }


export default Principal