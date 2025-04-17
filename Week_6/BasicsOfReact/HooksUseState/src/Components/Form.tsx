import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [querytype, setQuerytype] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e : any) =>{
    e.preventDefault();
    const formData = [
      { key: 'firstName', value: fname },
      { key: 'LastName', value: lname },
      { key: 'Email', value: email },
      { key: 'QueryType', value: querytype },
      { key: 'Message', value: message },
      { key: 'Conscent', value: checkbox }
    ];
    console.log(formData);
  }

  const HandleInputChange = (e :any) => {
    const {id, value} = e.target;
    if(id === 'fname'){
      setFname(value);
    }
    else if( id === 'lname'){
      setLname(value);
    }
    else if(id === 'email'){
      setEmail(value);
    }
    else if(id === 'message'){
      setMessage(value);
    }
  }


  const HandleRadioButton =( e: any)=>{
    setQuerytype(e.target.id);
  }
  const HandleCheckBox = (e:any) =>{
    setCheckbox(e.target.id)
  }

  return (
    <div className='bg-blue-100 p-5 md:flex md:items-center md:justify-center'>
      <form onSubmit={handleSubmit} className=' bg-white rounded-2xl py-8 md:w-50%'>

        <h1 className='text-2xl ml-4 lg:text-4xl lg:ml-15 lg:mt-5 font-semibold'>Contact Us</h1>

        <div className='flex flex-col mt-4 mx-4 gap-y-5'>

          <div className='lg:flex lg:gap-1.5 lg:mx-10 lg:mt-5'>
            <div className='flex flex-col'>
              <label className='lg:text-2xl lg:mb-2' htmlFor="fname">First Name *</label>
              <input value={fname}
              onChange = {HandleInputChange}
              className='lg:px-5 lg:text-2xl lg:py-5 border border-gray-500 rounded md:rounded-xl mr-4 mt-2 py-2 md:py-2 text-zinc-950' 
              id='fname'
              type="text" />
            </div>
            <div className='flex flex-col'>
              <label className='lg:text-2xl lg:mb-2' htmlFor="lname">Last Name *</label>
              <input value={lname} className='lg:px-5 lg:text-2xl lg:py-5 border border-gray-500 rounded md:rounded-xl mr-4 mt-2 py-2 md:py-2 text-zinc-950' 
              onChange = {HandleInputChange}
              id='lname' 
              type="text" />
            </div>
          </div>
          <div className='flex flex-col mt-2 lg:mx-10'>
            <label className='lg:text-2xl lg:mb-2' htmlFor="email">Email Address *</label>
            <input value={email} className='lg:px-5 lg:text-2xl lg:py-5 border border-gray-500 rounded md:rounded-xl mr-4 mt-2 py-2 md:py-2 text-zinc-950' 
            onChange = {HandleInputChange}
            id='email' 
            type="text" />
          </div>
          <div className='mt-2 lg:mx-10'>
            <label className='lg:text-2xl lg:mb-2' htmlFor="querytype">Query Type *</label>

            <div className=' flex text-sm gap-2 mr-4 mt-2 lg:gap-x-5.5 lg:mt-5 '>
              <div className='lg:gap-x-6 lg:items-center flex gap-1 border border-gray-500 rounded md:rounded-xl  px-2 py-2.5 w-full'>
                <label className='w-full flex items-center gap-x-3' htmlFor="generalenquiry">
                  <input onChange={HandleRadioButton} 
                  checked ={querytype === 'generalenquiry' } 
                  value= 'generalenquiry'
                  className='lg:w-6 lg:h-6' 
                  id='generalenquiry' 
                  type="radio" 
                  name='querytype' />
                  <span className='lg:text-2xl'>General Enquiry</span>
                </label>
              </div>
              <div className=' lg:py-5 lg:items-center lg:gap-x-6 flex gap-1 border  border-gray-500 rounded md:rounded-xl px-2 py-2.5 w-full'>
                <label className='w-full flex items-center gap-x-3' htmlFor="supportrequest">
                  <input onChange={HandleRadioButton} 
                  value= 'supportrequest'
                  checked = {querytype === 'supportrequest' } 
                  className='lg:w-6 lg:h-6' 
                  id='supportrequest' type="radio" 
                  name='querytype' />
                  <span className='lg:text-2xl'>Support Request</span>
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-2 lg:mx-10'>
            <label className='lg:text-2xl lg:mb-2' htmlFor="message">Message *</label>
            <input onChange={HandleInputChange} value={message} className='lg:px-5 lg:text-2xl lg:py-10 text-zin-950 rounded md:rounded-xl border border-gray-500 min-h-15 mr-4 mt-2' id='message' type="textarea" />
          </div>
          <div className='lg:py-5 flex gap-x-6 mt-4 lg:mx-10 items-center'>
            <input onChange={HandleCheckBox} checked={checkbox} className='lg:mt-0.5 lg:w-6 lg:h-6' id='checkbox' type="checkbox" />
            <label className='lg:text-xl text-sm' htmlFor="checkbox">I consent to being contacted by the team *</label>
          </div>
          <button className='lg:py-5 lg:mx-10 bg-green-700 rounded md:rounded-xl lg:text-3xl px-4 py-2.5 mt-2 mr-4 text-white' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form