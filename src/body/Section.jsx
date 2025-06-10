import './RightSection.css'
const Section = (props)=>{
 return (
<div className={props.class_name}>
{props.heading && (<h1>{props.heading}</h1>)}
{props.sub_heading && (<h2>{props.sub_heading}</h2>)}
{props.content_text && (<p>{props.content_text}</p>)}
 </div>   
 )
}

export default Section;