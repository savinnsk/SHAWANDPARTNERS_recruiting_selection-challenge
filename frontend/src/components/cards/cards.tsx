import useStore from '../../hook/store'
import s from './cards.module.css'

export function Cards(){

    const store = useStore()
    const cards = store?.valuesCsv

    return (
        <div className={s.cardsContainer}>
            {cards?.length == 0 && <p style={{color: "#7daa4e"}} >find values by search bar to display here</p>}
            {cards?.map((card, index) => {
                return (
                    <div key={index} className={s.card}>
                        <span style={{color: "#9dc86e"}}>matching with : {card.value}</span>
                        {Object.entries(card.other).map(([key, value]) => (
                            <div key={key}>
                                <span>{key}: </span>
                                <span>{value as string}</span>
                            </div>
                        ))}
                    </div>
                )
            })}
        
         </div>
    )
}