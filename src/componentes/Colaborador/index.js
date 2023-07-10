import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 24,
        onClick: favoritar 
    } 

    return (<div className="colaborador">
        <AiFillCloseCircle 
        size={25} 
        className='deletar' 
        onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'> 
                {colaborador.favorito 
                ? <AiFillHeart {...propsfavorito} color='#ff0000' /> 
                : <AiOutlineHeart {...propsfavorito} /> }

            </div>
        </div>
    </div>)
}

//ternario: {colaborador.favorito ? 'favorito ': 'nao favorito' } vai funcionar como uma condicional
export default Colaborador