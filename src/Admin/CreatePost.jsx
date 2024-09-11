import React from 'react'

const CreatePost = () => {
  return (
    <div className="create-post pt-5">
      
    <div className="container-xl">
      <h2 className=''>Create Your Post</h2>
      <form action="#" method="post" className='row'>
        <div className="form-left col-md-6">
          <div className="form-name form-same">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              required=""
            />
            <span>Title</span>
          </div>
          <div className="form-number form-same">
            <input
              type="tel"
              name="number"
              id="number"
              autoComplete="off"
              required=""
            />
            <span>Number</span>
          </div>
          <div className="form-address form-same">
            <input
              type="text"
              name="address"
              id="address"
              autoComplete="off"
              required=""
            />
            <span>Address</span>
          </div>
          <div className="form-message form-same">
            <textarea
              name="message"
              id="mssage"
              maxLength={700}
              required=""
              defaultValue={""}
            />
            <span>Post Describtion (Max:700)</span>
          </div>
     
        </div>
        <div className="form-right col-md-6">

          <h4>Loction</h4>
        <div className="form-select-item mb-4">
            <select id="SelExample">
              <option value={0}>Delhi</option>
              <option value={1}>Hyderabad</option>
              <option value={2}>Vizag</option>
              <option value={3}>Kochi</option>
              <option value={4}>Anantapur</option>
              <option value={5}>Dharmavaram</option>
              <option value={6}>Bengaluru</option>
              <option value={7}>Lucknow</option>
              <option value={8}>Madurai</option>
            </select>
            <select id="SelExample2">
              <option value={0}>Delhi</option>
              <option value={1}>Hyderabad</option>
              <option value={2}>Vizag</option>
              <option value={3}>Kochi</option>
              <option value={4}>Anantapur</option>
              <option value={5}>Dharmavaram</option>
              <option value={6}>Bengaluru</option>
              <option value={7}>Lucknow</option>
              <option value={8}>Madurai</option>
            </select>
            <select id="SelExample3">
              <option value={0}>Delhi</option>
              <option value={1}>Hyderabad</option>
              <option value={2}>Vizag</option>
              <option value={3}>Kochi</option>
              <option value={4}>Anantapur</option>
              <option value={5}>Dharmavaram</option>
              <option value={6}>Bengaluru</option>
              <option value={7}>Lucknow</option>
              <option value={8}>Madurai</option>
            </select>
            <select id="SelExample4">
              <option value={0}>Delhi</option>
              <option value={1}>Hyderabad</option>
              <option value={2}>Vizag</option>
              <option value={3}>Kochi</option>
              <option value={4}>Anantapur</option>
              <option value={5}>Dharmavaram</option>
              <option value={6}>Bengaluru</option>
              <option value={7}>Lucknow</option>
              <option value={8}>Madurai</option>
            </select>
            <select id="SelExample5">
              <option value={0}>Delhi</option>
              <option value={1}>Hyderabad</option>
              <option value={2}>Vizag</option>
              <option value={3}>Kochi</option>
              <option value={4}>Anantapur</option>
              <option value={5}>Dharmavaram</option>
              <option value={6}>Bengaluru</option>
              <option value={7}>Lucknow</option>
              <option value={8}>Madurai</option>
            </select>
            <select id="SelExample6">
              <option value={0}>Delhi</option>
              <option value={1}>Hyderabad</option>
              <option value={2}>Vizag</option>
              <option value={3}>Kochi</option>
              <option value={4}>Anantapur</option>
              <option value={5}>Dharmavaram</option>
              <option value={6}>Bengaluru</option>
              <option value={7}>Lucknow</option>
              <option value={8}>Madurai</option>
            </select>
          </div>
        
          <h4>Image Upload</h4>

          <div className="form-img">
            <input
              type="file"
              id="file-image"
              name="formImg"
              accept="image/png, image/jpeg"
              onchange="previewFile()"
            />
            <input
              type="file"
              id="formImg"
              name="formImg"
              accept="image/png, image/jpeg"
              onchange="previewFile()"
            />
            <input
              type="file"
              id="formImg"
              name="formImg"
              accept="image/png, image/jpeg"
              onchange="previewFile()"
            />
            <input
              type="file"
              id="formImg"
              name="formImg"
              accept="image/png, image/jpeg"
              onchange="previewFile()"
            />
          </div>
        </div>
        <button className="submit-form" type="submit">
          Post
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default CreatePost
