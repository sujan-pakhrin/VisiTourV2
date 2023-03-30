// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import intlTelInput from 'intl-tel-input';
// import { getIp } from 'react-intl-tel-input';

// const Register = () => {
//     const [firstName, setFirstName] = useState('');
//     const [middleName, setMiddleName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [dob, setDOB] = useState('');
//     const [address, setAddress] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSignUp = () => {
//         // Handle sign up logic here
//     };

//     const handlePhoneInputChange = (e) => {
//         setPhoneNumber(e.target.value);
//     };

    

    
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const isValidPhoneNumber = phoneInput.isValidNumber();
//         if (isValidPhoneNumber) {
//             setErrorMessage('');
//             handleSignUp();
//         } else {
//             setErrorMessage('Please enter a valid phone number');
//         }
//     };

//     const phoneInputRef = React.createRef(null);

//     React.useEffect(() => {
//         const phoneInput = intlTelInput(phoneInputRef.current, {
//             initialCountry: 'auto',
//             geoIpLookup: getIp,
//             preferredCountries: ['us', 'co', 'in', 'de'],
//             utilsScript:
//                 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
//         });
//         return () => {
//             phoneInput.destroy();
//         };
//     }, []);

//     return (
//         <div className="main">
//             <div className="background">
//                 <div className="all">
//                     <div className="signUp">
//                         <p>Sign up</p>
//                     </div>
//                     <div className="signUpDesc">
//                         <p>Join The Movement</p>
//                     </div>
//                     <div className="inputName">
//                         <div className="inputFName">
//                             <input
//                                 type="text"
//                                 className="FirstName"
//                                 size="8"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 required
//                             />
//                             <label>FirstName</label>
//                             <i></i>
//                         </div>
//                         <div className="inputMName">
//                             <input
//                                 type="text"
//                                 className="MiddleName"
//                                 size="8"
//                                 placeholder="Middle Name"
//                                 value={middleName}
//                                 onChange={(e) => setMiddleName(e.target.value)}
//                                 required
//                             />
//                             <label>Middle Name</label>
//                             <i></i>
//                         </div>
//                         <div className="inputLName">
//                             <input
//                                 type="text"
//                                 className="LastName"
//                                 size="8"
//                                 placeholder="Last Name"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 required
//                             />
//                             <label> Last Name</label>
//                             <i></i>
//                         </div>
//                     </div>
//                     <div className="DOBAddress">
//                         <div className="DateOfBirth">
//                             <input
//                                 type="date"
//                                 placeholder="Date of Birth"
//                                 required="required"
//                                 value={dob}
//                                 onChange={(e) => setDOB(e.target.value)}
//                             />
//                             <label>Date</label>
//                         </div>
//                         <div className="Address">
//                             <input
//                                 type="address"
//                                 size="17"
//                                 placeholder="Address"
//                                 required="required"
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                             />
//                             <label>Address</label>
//                         </div>
//                     </div>

//                     <div className="EmailPhone">
//                         <div className="inputEmail">
//                             <input
//                                 type="text"
//                                 size="14"
//                                 placeholder="Email"
//                                 required="required"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <label>Email</label>
//                         </div>

//                         <div className="Phone">
//                             <input
//                                 country={"auto"}
//                                 preferredCountries={["us", "co", "in", "de"]}
//                                 value={phoneNumber}
//                                 onChange={handlePhoneInputChange}
//                             />
//                         </div>
//                     </div>

//                     <div className="passGroup">
//                         <div className="inputPass">
//                             <input
//                                 type="password"
//                                 size="14"
//                                 placeholder="Password"
//                                 required="required"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <label>Password</label>
//                         </div>
//                         <div className="inputConformPass">
//                             <input
//                                 type="password"
//                                 size="17"
//                                 placeholder="Conform Password"
//                                 required="required"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                             />
//                             <label>Conform Password</label>
//                         </div>
//                     </div>

//                     <div className="alert alert-info" style={{ display: "none" }}>{errorMessage}</div>
//                     <div className="SignUpBtn">
//                         <button type="submit">Sign Up</button>
//                     </div>
//                     <div className="SignInSection">
//                         <p>Already Have Account?</p> <Link to="">Sign in</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Register;