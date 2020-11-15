import react from 'react';
import data from '../../dados/infoGeral.json'

import './styles.css';

function CardInfoGeral (props) {
        return (
                <article>
                    <img src={props.icon}>
                    </img>
                    <button>{props.btnInfo}
                    </button>
                    <h1>{props.titulo}
                    </h1>
                    <p>{props.text}
                    </p>
                </article>
        )
}

export default CardInfoGeral;