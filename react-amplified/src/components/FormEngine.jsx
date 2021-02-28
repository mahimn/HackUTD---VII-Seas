import React from "react";
import "./FormEngine.css";

/*const [values, setValues] = useState({
  email: "",
  firstname : "",
  midinit : "",
  lastname : "",
  status : "",
  ssn : "",
  us : "",
  homeadd : "",
  aptno : "",
  city : "",
  state : "",
  zip : "",
  claim : "",
  wages : ""
});*/

function FormEngine() {
 /* const { value:email, bind:bindemail, reset:resetemail } = useInput('');
  const { value:firstname, bind:bindfirstname, reset:resetfirstname } = useInput('');
  const { value:midinit, bind:bindmidinit, reset:resetmidinit } = useInput('');
  const { value:lastname, bind:bindlastname, reset:resetlastname } = useInput('');
  const { value:status, bind:bindstatus, reset:resetstatus } = useInput('');
  const { value:ssn, bind:bindssn, reset:resetssn } = useInput('');
  const { value:us, bind:bindus, reset:resetus } = useInput('');
  const { value:homeadd, bind:bindhomeadd, reset:resethomeadd } = useInput('');
  const { value:aptno, bind:bindaptno, reset:resetaptno } = useInput('');
  const { value:city, bind:bindcity, reset:resetcity } = useInput('');
  const { value:state, bind:bindstate, reset:resetstate } = useInput('');
  const { value:zip, bind:bindzip, reset:resetzip } = useInput('');
  const { value:claim, bind:bindclaim, reset:resetclaim } = useInput('');
  const { value:wages, bind:bindwages, reset:resetwages } = useInput('');
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting for ${name}`)
      resetemail();
      resetfirstname();
      resetlastname();
      resetmidinit();
      resetstatus();
      resetssn();
      resetus();
      resethomeadd();
      resetaptno();
      resetcity();
      resetstate();
      resetcity();
      resetzip();
      resetclaim();
      resetwages();
  }*/

  return (
    <div class="formengine">
      <div class="container">
        <div class="row align-items-center my-5" style = {{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div className="col-lg-5">
            <h1 class="font-weight-light" className = "formengine-title">1040 Form Engine</h1>
            <h4 style={{ color: 'white' }} className = "title">Let's get started with some preliminary information.</h4>
            
            
            <br/><br/>
            <form className = "taxes">
              <div class = "question">
                  <label id = "email-label" for = "email"> Email Address </label>
                    <input type = "text" name = "email" id = "email" class = "field" placeholder= "Enter your email Address" required />
                </div>
              <div class = "question">
                <label id = "firstname-label" for = "firstname"> First Name </label>
                  <input type = "text"  name = "firstname" id = "firstname" class = "field" placeholder= "Enter your first name" required />
              </div>
              <div class = "question">    
                <label id = "mi-label" for = "mInit"> Middle Initial </label>
                  <input type = "text"  name = "mInit" id = "mInit" class = "field" placeholder= "Enter your middle Initial" />
              </div>
              <div class = "question">
                <label id = "name-label" for = "lastname"> Last Name </label>
                  <input type = "text"  name = "name" id = "name" class = "field" placeholder= "Enter your last name" required />
              </div>
              <div class = "question">
                <label id = "status-label" for = "status"> How are you filing your taxes? </label>
                <br/><br/>
                <label><input name = "status" value = "Single" type = "radio" class = "radio-input" /> Single </label>
                <br/>
                <label><input name = "status" value = "Joint" type = "radio" class = "radio-input" /> Married filing jointly </label>
                <br/>
                <label><input name = "status" value = "Separately" type = "radio" class = "radio-input" /> Married filing separately </label>
                <br/>
              </div>
              <div class = "question">
                <label id = "social-security" for = "socialsecurity"> Social Security Number </label>
                  <input type = "text" name = "socialsecurity" id = "socialsecurity" class = "field" placeholder= "Enter your social security number" required />
              </div>
              <div class = "question">
                <label id = "US-label" for = "US"> Do you live in the US? </label>
                <br/><br/>
                <label><input name = "US"  value = "Yes" type = "radio" class = "radio-input" /> Yes </label>
                <br/>
                <label><input name = "US"  value = "No" type = "radio" class = "radio-input" /> No </label>
                <br/>
              </div>
              <div class = "question">
                <label id = "address-label" for = "address"> Home Address (Number and Street) </label>
                  <input type = "text"  name = "address" id = "address" class = "field" placeholder= "Enter your address" required />
              </div>
              <div class = "question">
                <label id = "spt-no-label" for = "aptno"> Apartment number (if applicable) </label>
                  <input type = "text" name = "aptno" id = "aptno" class = "field" placeholder= "Enter your apartment number" />
              </div>
              <div class = "question">
                <label id = "addresstwo-label" for = "city"> City/town </label>
                  <input type = "text" name = "city" id = "city" class = "field" placeholder= "Enter your city/town" required />
              </div>
              <div class = "question">
                <label id = "state-label" for = "state"> State </label>
                  <input type = "text"  name = "state" id = "state" class = "field" placeholder= "state" required />
              </div>
              <div class = "question">
                <label id = "zipcode-label" for = "zipcode"> ZIP code </label>
                  <input type = "text"  name = "zipcode" id = "zipcode" class = "field" placeholder= "Enter your ZIP Code" required />
              </div>
              <div class = "question">
                <label id = "dependence-label" for = "dependence"> Someone can claim: </label>
                <br/><br/>
                <label><input name = "dependence"  value = "You" type = "radio" class = "checkbox" /> You as a dependent </label>
                <br/>
                <label><input name = "dependence" value = "Spouse" type = "radio" class = "radio-input" /> Your spouse as a dependent </label>
                <br/>
              </div>
              <div class = "question">
                <label id = "wages-label" for = "wages"> How much did you make in wages, salaries, tips, etc.? Refer to W2 if needed. </label>
                  <input type = "text"  name = "wages" id = "wages" class = "field" placeholder= "Enter wages" required />
              </div>
              <button type = "submit" id = "submit" class = "submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormEngine;