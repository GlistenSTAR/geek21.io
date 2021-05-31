import React from 'react'

const onFocus = (e) =>{
  e.target.type = 'date';
}

const onBlur = (e) =>{
  e.target.type="text";
}

export default function profile() {
  return (
    <div className="user_profile">
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
              />
              <label
                className="custom-file-label"
                htmlFor="fileUpload"
              >
                Choose
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
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="formLast">Last name</label>
            <input
              id="formLast"
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="emailAddress">Email <span>*</span></label>
            <input
              id="emailAddress"
              type="text"
              className="form-control"
              placeholder="Enter your email"
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
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">Phone</label>
            <input
              id="phoneNumber"
              type="text"
              className="form-control"
              placeholder="Enter phone number"
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
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="bank_number">Bank Account Number</label>
            <input
              id="bank_number"
              type="password"
              className="form-control"
              placeholder="Enter Bank Number"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="swift_code">Swift Co  de</label>
            <input
              id="swift_code"
              type="text"
              className="form-control"
              placeholder="Enter new zipcode"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="type_account">Account Type</label>
            <input
              id="type_account"
              type="text"
              className="form-control"
              placeholder="Enter new Direction"
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
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="newPass">New password</label>
            <input
              id="newPass"
              type="password"
              className="form-control"
              placeholder="Enter new password"
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
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="password"
              className="form-control"
              placeholder="Enter new country"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="zipcode">Postal(Zip) Code</label>
            <input
              id="zipcode"
              type="text"
              className="form-control"
              placeholder="Enter new zipcode"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Direction">Direction</label>
            <input
              id="Direction"
              type="text"
              className="form-control"
              placeholder="Enter new Direction"
            />
          </div>
        </div>
      </div>
      <div align="right">
        <button className="btn btn-info btn-lg mr-5">Save</button>
        <button className="btn btn-default btn-lg mr-5">Cancel</button>
      </div>
    </div>
  )
}
