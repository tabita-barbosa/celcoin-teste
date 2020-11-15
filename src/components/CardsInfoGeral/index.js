import react from 'react';
import data from '../../dados/infoGeral.json'
import iconUser from '../../assets/user.png'
import iconBlue from '../../assets/iconBlue.png'
import iconRed from '../../assets/iconRed.png'
import iconGreen from '../../assets/iconGreen.png'

import './styles.css';

const CardInfoGeral = () => {

    const infos = data.map((infoGeral) => {
        return (
            <>
                <article>
                    <img src={infoGeral.src}>
                    </img>
                    <button>{infoGeral.porcentagem}
                    </button>
                    <h1>{infoGeral.num}
                    </h1>
                    <p>{infoGeral.text}
                    </p>
                </article>
            </>
        )
    })

    return (
        <>
            {infos}
        </>
    )
}

export default CardInfoGeral;