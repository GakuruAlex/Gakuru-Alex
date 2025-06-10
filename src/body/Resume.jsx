import './Resume.css'

const Resume = ()=>{
    const google_driveId = "1aEKw42V3Yw1SKJ3fSttMTwzVZDp4Ud8N"
 return (
    <div className="left">
      <h2>Alex Gakuru CV PDF (Display)</h2>
      <div style={{ width: '50%', height: '80vh', border: '1px solid #ddd' }} className='pdf-viewer'>
        <embed src="public\Alex_Gakuru_CV.pdf" width="100%" height="100%" type="application/pdf" />
      </div>
    <a id="button_link" href={`https://drive.google.com/uc?export=download&id=${google_driveId}`} download>Download CV</a>
    </div>
  );

}
export default Resume