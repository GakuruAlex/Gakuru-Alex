import './Resume.css'

const Resume = ()=>{
    const resume_url ="https://drive.google.com/file/d/1aEKw42V3Yw1SKJ3fSttMTwzVZDp4Ud8N/preview"
    const google_driveId = "1aEKw42V3Yw1SKJ3fSttMTwzVZDp4Ud8N"
 return (
    <div className="left">
      <h2>Alex Gakuru CV PDF (Display)</h2>
      <div style={{ width: '50%', height: '80vh', border: '1px solid #ddd' }}>
        <iframe
          src={resume_url}
          title="Google Drive PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen // Allows the user to go full screen in the viewer
        >
        <p>Your browser does not support iframes. You can <a href={resume_url} target="_blank" rel="noopener noreferrer">view the PDF directly</a> or <a href={`https://drive.google.com/uc?export=download&id=${google_driveId}`} download>download it</a> instead.</p>
        </iframe>
      </div>
    <a id="button_link" href={`https://drive.google.com/uc?export=download&id=${google_driveId}`} download>Download CV</a>
    </div>
  );

}
export default Resume