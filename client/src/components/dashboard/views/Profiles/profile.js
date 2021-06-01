import React, {useState, useEffect } from 'react'
import { useSelector } from "react-redux";

const profile = () => {
  useEffect(()=>{
    useSelector(state => {
      console.log(state.auth.user);
    });  
  });

  let [newData, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthday: '',
    phone_number: '',
    current_password: '',
    new_password: '',
    nationality: '',
    country: '',
    zipcode: '',
    passport_id: '',
    passport_services: '',
    bank_name: '',
    bank_number: '',
    swift_code: '',
    account_type: ''
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    newData[name] = value;
    setData(newData);
  }
  
  const saveData = (e) =>{
    e.preventDefault();
    console.log("submitted");
    console.log(newData);
  }

  const onFocus = (e) =>{
    e.target.type = 'date';
  }
  
  const onBlur = (e) =>{
    e.target.type="text";
  }

  return (
    <form className="user_profile" onSubmit={saveData}>
      <div className="general card pt-3 pb-3 pl-3">
        <h4>General Infomation</h4>
        <div className="row">
          <div className="col-md-4" style={{display:'flex', alignItems:'center'}}>
            <img src="../user_avatars/ASDFJASKDLFJCEASDF1ASDF.png" className="img-thumbnail rounded-circle user_avartar" alt="avartar"/>
            <div className="custom-file ml-2" style={{ verticalAlign:'middle'}}>
              <input
                type="file"
                className="custom-file-input"
                id="fileUpload"
                name="avartar"
              />
              <label
                className="custom-file-label"
                htmlFor="fileUpload"
              >
                Photo
              </label>
            </div>
          </div>
        </div>

        <div className="row mt-2 mb-2 pl-2 pr-2">
          <div className="col-md-6">
            <label htmlFor="formFirst">First name <span>*</span></label>
            <input
              id="formFirst"
              type="text"
              className="form-control"
              placeholder="First name"
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="formLast">Last name</label>
            <input
              id="formLast"
              type="text"
              className="form-control"
              placeholder="Last name"
              name="last_name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="emailAddress">Email <span>*</span></label>
            <input
              id="emailAddress"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="birthday">Birthday</label>
            <input
              id="birthday"
              onFocus={onFocus} 
              onBlur={onBlur} 
              placeholder="birthday"
              className="form-control"
              placeholder="Enter Birthday"
              onChange={handleChange}
              name="birthday"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">Phone</label>
            <input
              id="phoneNumber"
              type="number"
              className="form-control"
              placeholder="Enter phone number"
              onChange={handleChange}
              name="phone_number"
            />
          </div>
        </div>
      </div>

      <div className="security card mt-4 mb-4 pt-3 pb-3 pl-3 pr-2">
        <h4>Security Infomation</h4>
        <div className="row pt-2 pb-2">
          <div className="col-md-6">
            <label htmlFor="currentPass">
              Current password
            </label>
            <input
              id="currentPass"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              name="current_password"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="newPass">New password</label>
            <input
              id="newPass"
              type="password"
              className="form-control"
              placeholder="Enter new password"
              onChange={handleChange}
              name="new_password"
            />
          </div>
        </div>
      </div>

      <div className="more_info card mt-4 mb-4 pt-3 pb-3 pl-3 pr-2">
        <h4>More Infomation</h4>
        <div className="row pt-2 pb-2">
          <div className="col-md-6">
            <label htmlFor="nationality">
              Nationality
            </label>
            <input
              id="nationality"
              type="text"
              className="form-control"
              placeholder="Enter your Nationality"
              onChange={handleChange}
              name="nationality"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              className="form-control"
              placeholder="Enter country"
              onChange={handleChange}
              name="country"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="zipcode">Postal(Zip) Code</label>
            <input
              id="zipcode"
              type="number"
              className="form-control"
              placeholder="Enter zipcode"
              onChange={handleChange}
              name="zipcode"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Direction">Direction</label>
            <input
              id="Direction"
              type="text"
              className="form-control"
              placeholder="Enter Direction"
              onChange={handleChange}
              name="direction"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="zipcode">Passport or ID</label>
            <input
              id="passport_id"
              type="text"
              className="form-control"
              placeholder="Enter passport ID"
              onChange={handleChange}
              name="passport_id"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Direction">Basic Services</label>
            <input
              id="basic_service"
              type="text"
              className="form-control"
              placeholder="Enter basic services"
              onChange={handleChange}
              name="passport_services"
            />
          </div>
        </div>
      </div>

      <div className="bank_info card mt-4 mb-4 pt-3 pb-3 pl-3 pr-2">
        <h4>Bank Infomation</h4>
        <div className="row pt-2 pb-2">
          <div className="col-md-6">
            <label htmlFor="bank_name">
             Bank Name 
            </label>
            <input
              id="bank_name"
              type="text"
              className="form-control"
              placeholder="Enter your Bank Name"
              onChange={handleChange}
              name="bank_name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="bank_number">Bank Account Number</label>
            <input
              id="bank_number"
              type="number"
              className="form-control"
              placeholder="Enter Bank Number"
              onChange={handleChange}
              name="bank_number"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="swift_code">Swift Code</label>
            <input
              id="swift_code"
              type="text"
              className="form-control"
              placeholder="Enter swift code"
              onChange={handleChange}
              name="swift_code"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="type_account">Account Type</label>
            <input
              id="type_account"
              type="text"
              className="form-control"
              placeholder="Enter account type"
              onChange={handleChange}
              name="account_type"
            />
          </div>
        </div>
      </div>

      <div align="right" className="equal_button">
        <button className="btn btn-info mr-5" type="submit"> Save </button>
        <button className="btn btn-default mr-5"> Cancel</button>
      </div>
    </form>
  )
}

export default profile;