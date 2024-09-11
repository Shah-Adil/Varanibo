import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';




import '../assets/css/admin.css'


const Admin = () => {
  return (
    <>
   

        <div className="all-post">
          <div className="container-xl">
            <div className="all-post-box">
              <div className="all-post-img">
                <img
                  src="https://varanibo.com/assets/img/uploaded/202403040640429651304_422866737073101_2600221497062107610_n.jpg"
                  alt="Post-img"
                />
              </div>
              <div className="all-post-text">
                <h2>দেশি-বিদেশি ফ্যামিলির জন্য বাসা ভাড়া দেওয়া হবে</h2>
                <div className="post-menu">
                  
                  

                    <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic">
                    <i className="fa-solid fa-ellipsis" id="post-btn" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <ul className='admin-drop'> 
                    <li >
                        <a href="#" className="file-blue">
                            <i className="fa-solid fa-earth-asia" />
                            Republish
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://varanibo.com/user/public/2808/1"
                            className="file-blue"
                        >
                            <i className="fa-solid fa-shield-halved"></i> Change Privacy
                        </a>
                        </li>
                        <li>
                        <a href="https://varanibo.com/user/post/update/2808">
                            <i className="fa-solid fa-pen-to-square" /> Edit
                        </a>
                        </li>
                        <li data-toggle="modal" data-target="#delete2808">
                        <a href="#" className="file-red">
                            <i className="fa-solid fa-trash" /> Delete
                        </a>
                        </li>

                    </ul>
                </Dropdown.Menu>
                    </Dropdown>
                </div>
                <small className="post-date">
                  <i className="fa-sharp fa-regular fa-calendar-days" />
                  <span>5 months ago</span>
                </small>
                <p>
                  ফার্নিচার সহ বাসা ভাড়া দেওয়া হবে!!! দেশি-বিদেশি ফ্যামিলির জন্য, মার্চ
                  মাস থেকে। মেডিকেল, শামীমাবাদ ২ নং রোড। ৩ বেডরুম হবে বড়, বারান্দাসহ।
                  ড্রয়িং ডাইনিং এসি (AC) মাস্টার বেডরুমে, বাথরুম ৩ টা হ...
                </p>
                <div className="post-respond">
                  <div className="post-respond-left">
                    <div className="post-view">
                      <i className="fa-regular fa-eye" />
                      <span>148</span>
                    </div>
                    <div className="post-share">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic1">
                                <i className="fa-solid fa-share"  />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <div id="social-links">
                                <ul>
                                    <li>
                                    <a
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://varanibo.com/homerent/single/rummet-abszk1x19b/4245/1/46"
                                        className="social-button "
                                        id=""
                                        title=""
                                        rel=""
                                    >
                                        <span className="fab fa-facebook-square" />
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        href="https://twitter.com/intent/tweet?text=Default+share+text&url=https://varanibo.com/homerent/single/rummet-abszk1x19b/4245/1/46"
                                        className="social-button "
                                        id=""
                                        title=""
                                        rel=""
                                    >
                                        <span className="fab fa-twitter" />
                                    </a>
                                    </li>
                                    <li>
                                    <a
                                        target="_blank"
                                        href="https://wa.me/?text=https://varanibo.com/homerent/single/rummet-abszk1x19b/4245/1/46"
                                        className="social-button "
                                        id=""
                                        title=""
                                        rel=""
                                    >
                                        <span className="fab fa-whatsapp" />
                                    </a>
                                    </li>
                                </ul>
                                </div>

                            </Dropdown.Menu>
                            </Dropdown>
                  
                    </div>
                  </div>
                </div>
                <div className="post-details">
                  <h4 className="text-danger">Post Expaired</h4>|<h4>Accepted</h4>|
                  <h6> Public</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

  
    </>
  )
}

export default Admin
