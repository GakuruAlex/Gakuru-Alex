import './RightSection.css'
const Section = (props)=>{
 return (


<div class="hero-image">
  <div class="hero-text">
    <h1>I am Alex Gakuru</h1>
    <p>And I'm a Computer Scientist</p>
    <p>{props.content_text}</p>

  </div>
</div>
 
 )
}

export default Section;