import React, {useState, useEffect, useContext } from 'react'
import { ReactReduxContext } from 'react-redux'
import axios from 'axios'

export default function profile() {
  const { store } = useContext(ReactReduxContext)
  const { getState } = store
  const [currentUser, setCurrentUser] = useState([]);
  
  let status = getState();
  let current_id = { id : status.auth.user.id };

  useEffect(()=>{
    axios.post("/api/users/user_profile", current_id)
    .then((user)=>{
      setCurrentUser(user.data);
    });
  },[]);

  let [newData, setData] = useState({
    name: status.auth.user.name,
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    email: status.auth.user.email,
    birthday: currentUser.birthday,
    phone_number: currentUser.phone_number,
    current_password: '',
    new_password: '',
    nationality: currentUser.nationality,
    country: currentUser.country,
    zipcode: currentUser.zipcode,
    passport_id: currentUser.passport_id,
    passport_services: currentUser.passport_services,
    bank_name: currentUser.bank_name,
    bank_number: currentUser.bank_name,
    swift_code: currentUser.swift_code,
    account_type: currentUser.account_type
  });

  let [avatarImage, setAvatar] = useState('');
  let [avatarPrviewUrl, setAvartarUrl] = useState('');

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    currentUser[name] = value;
    setData(currentUser);
  }
  
  const saveData = (e) =>{
    e.preventDefault();
    let formData = new FormData();	

    formData.append("data", newData);
    if(avatarImage){
      formData.append("file", avatarImage);
    }
    console.log(avatarImage);
    axios.post(
      "/api/users/save_profile", 
      formData,  
      {
        withCredentials: true, 
        headers: {
          "Access-Control-Allow-Origin": "*", 
          'Content-Type': 'multipart/form-data'
        } 
      })
    .then((user)=>{
      setCurrentUser(user.data);
    }).catch(err=>console.log(err));
  }

  let avatarUpload = (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      // console.log(e.target.files);
      reader.onloadend = () => {
        setAvatar(file);
        setAvartarUrl(reader.result);
      }
      reader.readAsDataURL(file)
  }

  const onFocus = (e) =>{
    e.target.type = 'date';
  }
  
  const onBlur = (e) =>{
    e.target.type="text";
  }

  return (
    <form className="user_profile" onSubmit={saveData} autoComplete="off">
      <div className="general card pt-3 pb-3 pl-3">
        <h4>General Infomation</h4>
        <div className="row">
          <div className="col-md-4" style={{display:'flex', alignItems:'center'}}>
            { avatarPrviewUrl ? (
              <img src={avatarPrviewUrl} className="img-thumbnail rounded-circle user_avartar" alt="avartar"/>
             )
              :
              currentUser.photo?
              (<img src={`../user_avatars/`+currentUser.avartar} className="img-thumbnail rounded-circle user_avartar" alt="avartar"/>)
              :
              currentUser.avatar?
                (<img src={currentUser.avatar} className="img-thumbnail rounded-circle user_avartar" alt="avartar"/>)
                :
                (<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/120px-User-avatar.svg.png" className="img-thumbnail rounded-circle user_avartar" alt="avartar"/>)
            }
            <div className="custom-file ml-2" style={{ verticalAlign:'middle'}}>
              <input
                type="file"
                className="custom-file-input"
                id="fileUpload"
                name="avartar"
                onChange={avatarUpload}
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
        {/* <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          /> */}
        <div className="row mt-2 mb-2 pl-2 pr-2">
          <div className="col-md-6">
            <label htmlFor="userName">UserName <span>*</span></label>
            <input
              id="userName"
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onChange={handleChange}
              name="name"
              defaultValue={currentUser? currentUser.name:''}
              disabled={true}
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
              defaultValue={currentUser? currentUser.email:''}
              disabled={true}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="formFirst">First name</label>
            <input
              id="formFirst"
              type="text"
              className="form-control"
              placeholder="First name"
              name="first_name"
              onChange={handleChange}
              defaultValue={currentUser.first_name? currentUser.first_name:''}
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
              defaultValue={currentUser.last_name? currentUser.last_name:''}
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
              defaultValue={currentUser.birthday? currentUser.birthday:''}
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
              defaultValue={currentUser.phone_number? currentUser.phone_number:''}
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
              defaultValue={currentUser.nationality? currentUser.nationality:''}
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
              defaultValue={currentUser.country? currentUser.country:''}
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
              defaultValue={currentUser.zipcode? currentUser.zipcode:''}
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
              defaultValue={currentUser.direction? currentUser.direction:''}
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
              defaultValue={currentUser.passport_id? currentUser.passport_id:''}
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
              defaultValue={currentUser.passport_services? currentUser.passport_services:''}
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
              defaultValue={currentUser.bank_name? currentUser.bank_name:''}
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
              defaultValue={currentUser.bank_number? currentUser.bank_number:''}
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
              defaultValue={currentUser.swift_code? currentUser.swift_code:''}
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
              defaultValue={currentUser.account_type? currentUser.account_type:''}
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

