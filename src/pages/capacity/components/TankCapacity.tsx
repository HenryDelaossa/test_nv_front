import { FC } from 'react'
import { EValores } from '../../../shared/helpers/enums';
import { useCapacityContext } from '../../../shared/contexts/capacityContext';

const TankCapacity: FC<ITankCapacityCompónent> = ({ }) => {


    const { info } = useCapacityContext();


    return (
        <section className='tank-cotainer'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style={{ display: 'none' }} >
                <symbol id="wave">
                    <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                    <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                    <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                    <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                </symbol>
            </svg>
            <div className="box">
                <div
                    className="percent">
                    <div
                        className="percentNum"
                        id="count"
                    >
                        {info?.limite ? 'Limite de agua excedido' : `${info?.porcentaje.toFixed(2)}%`}
                    </div>
                </div>
                <div
                    id="water"
                    className="water"
                    style={{
                        transform: info?.limite ? 'none' : `translate(0, ${EValores.PERCENT_100 - Number(info?.porcentaje)}%)`
                    }}
                >
                    <svg
                        viewBox="0 0 560 20"
                        className="water_wave water_wave"
                        style={{ 
                            display: info.cantidadtotal <= 0 ? 'none' : 'block',
                            animation: (info?.limite) ? 'none' : 'wave-water .5s infinite linear' }}
                    >
                        <use xlinkHref="#wave"></use>
                    </svg>
                </div>
            </div>
        </section>
    )
}

interface ITankCapacityCompónent { }

export default TankCapacity