import './userInput.css'


const UserInput = () => {


    return (
        <div className="input-block">
            <div className="title title__input">Útulok</div>
            <input id="textInput" type="text" className="input-label" placeholder="Zadajte Vaše meno"/>
        </div>
    )
}

export default UserInput;