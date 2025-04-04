import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-5 mt-5">
      <div className="container">
       
        <div className="parent">
            
            <a href="https://www.linkedin.com/in/vaishnavi-muthe-aa5716351/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppeFJp-l1XachmicCVeX-Q45TGIISFZd3pg&s"  className='imgs' alt="" /></a>
            <a href="https://github.com/vaishnavimuthe6"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s" alt="" className='imgs' /></a>
            <a href="https://www.instagram.com/vaishnavi_varma_6/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokAJBQ3G-hzXhwhAv4R2OeGFwSOTCVfQeqw&s"  className='imgs' alt="" /></a>
        </div>
      

      </div>
      
      <div className="text-center mt-5 border-top pt-3">
        <p className="footer-alt mb-0 f-14">2025 © TheArticleHub, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
