const SoftSkill = () =>{
    return(
        <div className="container">
            <ul>
                {["Html, CSS", "PHP", "Basic Network", "ReactJS"].map(item => 
                    <li>{item}</li> 
                )}
            </ul>
        </div>
    )
}

export default SoftSkill;
