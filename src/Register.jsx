import React, {useState, useEffect} from "react";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState('male')
  const [mobile, setMobile] = useState(false);
  const [laptop, setLaptop] = useState(false);
  const [smartwatch, setSmartWatch] = useState(false);
  const [devices, setDevices] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  useEffect(()=>{
   console.log(devices);
},[devices]);

const handleCheck = (e)=>{
    if(e.target.checked){
        setDevices([...devices, e.target.value]);
    }
    else{
        const indexToBeDeleted = devices.indexOf(e.target.value);
        devices.splice(indexToBeDeleted, 1);
        setDevices([...devices]);
    }
}


  return (<>
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <button type="submit">Submit</button>
    </form>

    <h3>Your Name is {name}</h3>

    <div>
      <form>
        <h2>Selected Gender: {gender}</h2>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => {
            if (e.target.checked) {
              setGender(e.target.value)
            }
          }}
          checked={gender === "male"}
        />Male

        <br />

        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => {
            if (e.target.checked) {
              setGender(e.target.value)
            }
          }}
          checked={gender === "female"}
        />Female
      </form>
      <br /><br />
    </div>
    <div>
      <form>
        {mobile ? ' Mobile is checked' : ' Mobile is not checked'} <br />

        {laptop ? ' Laptop is checked' : ' Laptop is not checked'} <br />

        {smartwatch ? ' Mobile is checked' : ' Mobile is not checked'} <br />
        <br /><br />
        <input
          type="checkbox"
          value="mobile"
          checked={mobile}
          onChange={(e) => {
            setMobile(e.target.checked);
          }}
        /> Mobile <br />

        <input
          type="checkbox"
          value="laptop"
          checked={laptop}
          onChange={(e) => {
            setLaptop(e.target.checked);
          }}
        /> Laptop <br />

        <input
          type="checkbox"
          value="smartwatch"
          checked={smartwatch}
          onChange={(e) => {
            setSmartWatch(e.target.checked);
          }}
        /> Smartwatch <br />

      </form>
    </div>
    


  </>
  );
}
export default Register;