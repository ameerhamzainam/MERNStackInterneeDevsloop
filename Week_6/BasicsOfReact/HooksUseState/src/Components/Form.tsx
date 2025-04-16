
const Form = () => {


  return (
    <div className='bg-blue-100 p-5 md:flex md:items-center md:justify-center'>
      <form className=' bg-white rounded-2xl py-8 md:w-50%'>

        <h1 className='text-2xl ml-4 lg:text-4xl lg:ml-15 lg:mt-5 font-semibold'>Contact Us</h1>

        <div className='flex flex-col mt-4 mx-4 gap-y-5'>

          <div className='lg:flex lg:gap-1.5 lg:mx-10 lg:mt-5'>
            <div className='flex flex-col'>
              <label className='lg:text-2xl lg:mb-2' htmlFor="email">First Name *</label>
              <input className='lg:px-5 lg:text-2xl lg:py-5 border border-gray-500 rounded md:rounded-xl mr-4 mt-2 py-2 md:py-2 text-zinc-950' id='email' type="text" />
            </div>
            <div className='flex flex-col'>
              <label className='lg:text-2xl lg:mb-2' htmlFor="email">Last Name *</label>
              <input className='lg:px-5 lg:text-2xl lg:py-5 border border-gray-500 rounded md:rounded-xl mr-4 mt-2 py-2 md:py-2 text-zinc-950' id='email' type="text" />
            </div>
          </div>
          <div className='flex flex-col mt-2 lg:mx-10'>
            <label className='lg:text-2xl lg:mb-2' htmlFor="email">Email Address *</label>
            <input className='lg:px-5 lg:text-2xl lg:py-5 border border-gray-500 rounded md:rounded-xl mr-4 mt-2 py-2 md:py-2 text-zinc-950' id='email' type="text" />
          </div>
          <div className='mt-2 lg:mx-10'>
            <label className='lg:text-2xl lg:mb-2' htmlFor="querytype">Query Type *</label>

            <div className=' flex text-sm gap-2 mr-4 mt-2 lg:gap-x-5.5 lg:mt-5 '>
              <div className='lg:gap-x-6 lg:items-center flex gap-1 border border-gray-500 rounded md:rounded-xl  px-2 py-2.5 w-full'>
                <label className='w-full flex items-center gap-x-3' htmlFor="generalenquiry">
                  <input className='lg:w-6 lg:h-6' id='generalenquiry' type="radio" name='querytype' />
                  <span className='lg:text-2xl'>General Enquiry</span>
                </label>
              </div>
              <div className=' lg:py-5 lg:items-center lg:gap-x-6 flex gap-1 border  border-gray-500 rounded md:rounded-xl px-2 py-2.5 w-full'>
                <label className='w-full flex items-center gap-x-3' htmlFor="supportrequest">
                  <input className='lg:w-6 lg:h-6' id='supportrequest' type="radio" name='querytype' />
                  <span className='lg:text-2xl'>Support Request</span>
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-2 lg:mx-10'>
            <label className='lg:text-2xl lg:mb-2' htmlFor="message">Message *</label>
            <input className='lg:px-5 lg:text-2xl lg:py-10 text-zin-950 rounded md:rounded-xl border border-gray-500 min-h-15 mr-4 mt-2' id='message' type="textarea" />
          </div>
          <div className='lg:py-5 flex gap-x-6 mt-4 lg:mx-10 items-center'>
            <input className='lg:mt-0.5 lg:w-6 lg:h-6' id='checkbox' type="checkbox" />
            <label className='lg:text-xl text-sm' htmlFor="checkbox">I consent to being contacted by the team *</label>
          </div>
          <button className='lg:py-5 lg:mx-10 bg-green-700 rounded md:rounded-xl lg:text-3xl px-4 py-2.5 mt-2 mr-4 text-white' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form