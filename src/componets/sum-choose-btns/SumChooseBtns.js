import './sumChooseBtns.css'


const SumChooseBtns = () => {


    return (
        <div className="chooseSumWrapper">
            <div className="choose-block">5 €</div>
            <div className="choose-block">10 €</div>
            <div className="choose-block">20 €</div>
            <div className="choose-block">30 €</div>
            <div className="choose-block active">50 €</div>  
            <div className="choose-block">100 €</div>
            <div className="choose-block"> __ €</div>
        </div>
    )
}

export default SumChooseBtns;