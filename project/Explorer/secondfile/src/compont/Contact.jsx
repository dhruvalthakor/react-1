import React from 'react'
function Contact() {
  return (
    <div>
        <div className="contact-section" id="Contact">
        <div className="registration-form">
            <h3 className="text-center mb-4">Registration for a meeting</h3>
            <form>
                <div className="form-group">
              
                    <input type="text" className="form-control mb-3 control" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                  
                    <input type="email" className="form-control mb-3 control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                   
                    <input type="text" className="form-control mb-3 control" id="phone" placeholder="Phone Number"/>
                </div>
                <div className="form-group">
                  
                    <input type="text" className="form-control mb-3 control" id="car" placeholder="Current Car"/>
                </div>
                <button type="submit" className="btn btn-outline-danger btn-block w-100">View Collection</button>
            </form>
        </div>
        <div className="contact-info">
            <h3 classNameName="mb-3">Contact Directly</h3>
            <p>KARDE AUTO</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt-fill text-danger " viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> Via Valtellina Domodossola 37/b</p>
            <p>95000 Arezzo, Italy</p>
            <p><a href="mailto:info@kardeauto.com" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill text-danger me-1" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg> info@kardeauto.com</a></p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-inbound-fill text-danger me-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"/>
</svg> 099.359.684 (Ext: 532)</p>
        </div>
    </div>
    </div>
  )
}

export default Contact
