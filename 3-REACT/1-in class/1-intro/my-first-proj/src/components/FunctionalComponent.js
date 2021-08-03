function FunctionalComponent(props){
    return(
        <div>
            <h2>
                Merhaba Dünya !
                <p>
                {props.name} {props.dateBirth} <br/>
                    Funtional Component
                </p>
                <p></p>
            </h2>
        </div>
    )
}

export default FunctionalComponent