const Experience = ({title, duration, duties, title_class}) =>{
return (
    
        <div className="work-experience-body">
                    <div className={title_class}>
                        <div className="title-duration">
                            <h2>{title}</h2>
                             <p>{duration}</p>

                        </div>
                        <p>
                            {location}
                        </p>

                        <ul>
                        {
                            duties.forEach(duty => {
                                <li>{duty}</li>
                            })
                        }
                        </ul>

                        
                    </div>
        </div>
)

}
export default Experience