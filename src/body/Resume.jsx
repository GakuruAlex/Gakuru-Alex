import './Resume.css'

const Resume = ()=>{
    const google_driveId = "1aEKw42V3Yw1SKJ3fSttMTwzVZDp4Ud8N"
 return (
  <>
        <div style={{ width: '50%', height: '85vh', border: '1px solid #ddd' }} className='pdf-viewer'>
        <embed src="public/Alex_Gakuru_CV.pdf" width="100%" height="100%" type="application/pdf" />
      </div>
   
    </>
  );

}
export default Resume