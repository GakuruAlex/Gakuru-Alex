import "../css/experience.css"

const Experience = ({title, duration, duties, title_class, location, cadre}) =>{
return (
    
        <div className="work-experience-body">
                <div className={title_class}>
                        <div className="title-duration">
                            <h2>{title}</h2>
                             <p>{duration}</p>

                        </div>
                        <p className="cadre">{cadre}</p>
                        <p className="location">
                            {location}
                        </p>

                        <ul className="duties">
                        {
                            duties.map((duty, index)=>(
                                <li key={index}>{duty}</li>
                            ))
                        }
                        
                        </ul>

                        
                </div>
        </div>
)

}
export default Experience