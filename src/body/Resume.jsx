import './Resume.css'
import CV from '../../public/Alex_Gakuru_CV.pdf'
const Resume = ()=>{

 return (
  <>
        <div style={{ width: '50%', height: '85vh', border: '1px solid #ddd' }} className='pdf-viewer'>
        <embed src={CV} width="100%" height="100%" type="application/pdf" />
      </div>
   
    </>
  );

}
export default Resume