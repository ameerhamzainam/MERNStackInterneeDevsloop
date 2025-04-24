import React, { useState } from 'react';

interface FormProps {
  theme: 'light' | 'dark';
}

const Form: React.FC<FormProps> = ({ theme }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [querytype, setQuerytype] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = [
      { key: 'firstName', value: fname },
      { key: 'LastName', value: lname },
      { key: 'Email', value: email },
      { key: 'QueryType', value: querytype },
      { key: 'Message', value: message },
      { key: 'Consent', value: checkbox },
    ];
    console.log(formData);
  };

  const HandleInputChange = (e: any) => {
    const { id, value } = e.target;
    if (id === 'fname') setFname(value);
    else if (id === 'lname') setLname(value);
    else if (id === 'email') setEmail(value);
    else if (id === 'message') setMessage(value);
  };

  const HandleRadioButton = (e: any) => {
    setQuerytype(e.target.id);
  };

  const HandleCheckBox = (e: any) => {
    setCheckbox(e.target.checked);
  };

  const inputClass = `lg:px-5 lg:text-2xl lg:py-5 border rounded md:rounded-xl mr-4 mt-2 py-2 ${
    theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-500'
  }`;

  const labelClass = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-blue-100 text-black'} p-5 md:flex md:items-center md:justify-center`}>
      <form onSubmit={handleSubmit} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl py-8 md:w-50%`}>
        <h1 className="text-2xl ml-4 lg:text-4xl lg:ml-15 lg:mt-5 font-semibold">Contact Us</h1>

        <div className="flex flex-col mt-4 mx-4 gap-y-5">
          <div className="lg:flex lg:gap-1.5 lg:mx-10 lg:mt-5">
            <div className="flex flex-col">
              <label className={`lg:text-2xl lg:mb-2 ${labelClass}`} htmlFor="fname">First Name *</label>
              <input value={fname} onChange={HandleInputChange} id="fname" type="text" className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className={`lg:text-2xl lg:mb-2 ${labelClass}`} htmlFor="lname">Last Name *</label>
              <input value={lname} onChange={HandleInputChange} id="lname" type="text" className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col mt-2 lg:mx-10">
            <label className={`lg:text-2xl lg:mb-2 ${labelClass}`} htmlFor="email">Email Address *</label>
            <input value={email} onChange={HandleInputChange} id="email" type="text" className={inputClass} />
          </div>

          <div className="mt-2 lg:mx-10">
            <label className={`lg:text-2xl lg:mb-2 ${labelClass}`} htmlFor="querytype">Query Type *</label>
            <div className="flex text-sm gap-2 mr-4 mt-2 lg:gap-x-5.5 lg:mt-5">
              {['generalenquiry', 'supportrequest'].map((type) => (
                <div key={type} className={`flex gap-1 border rounded md:rounded-xl px-2 py-2.5 w-full ${theme === 'dark' ? 'border-gray-600' : 'border-gray-500'}`}>
                  <label htmlFor={type} className="w-full flex items-center gap-x-3">
                    <input
                      onChange={HandleRadioButton}
                      checked={querytype === type}
                      value={type}
                      id={type}
                      type="radio"
                      name="querytype"
                      className="lg:w-6 lg:h-6"
                    />
                    <span className="lg:text-2xl capitalize">{type.replace(/([a-z])([A-Z])/g, '$1 $2')}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-2 lg:mx-10">
            <label className={`lg:text-2xl lg:mb-2 ${labelClass}`} htmlFor="message">Message *</label>
            <input value={message} onChange={HandleInputChange} id="message" type="textarea" className={`lg:px-5 lg:text-2xl lg:py-10 rounded md:rounded-xl border min-h-15 mr-4 mt-2 ${
              theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-500'
            }`} />
          </div>

          <div className="lg:py-5 flex gap-x-6 mt-4 lg:mx-10 items-center">
            <input onChange={HandleCheckBox} checked={checkbox} className="lg:mt-0.5 lg:w-6 lg:h-6" id="checkbox" type="checkbox" />
            <label htmlFor="checkbox" className="lg:text-xl text-sm">I consent to being contacted by the team *</label>
          </div>

          <button className="lg:py-5 lg:mx-10 bg-green-700 hover:bg-green-800 rounded md:rounded-xl lg:text-3xl px-4 py-2.5 mt-2 mr-4 text-white" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
