import React from 'react'

const CitizenshipFormPage = () => {
  return (
    <div className='w-[80%] mx-auto my-4'>
        <h2 className='text-2xl font-bold py-4'>Citizenship (नागरिकता आधारभूत जानकरी)</h2>
        <div className='w-full bg-slate-100 px-8 mb-4 py-3 rounded-lg'>
            <form action="#">
                <h2 className='text-xl font-bold mb-2'>Basic Information (आधारभूत जानकरी)</h2>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className='mb-4'>
                        <label htmlFor="citizenshipno" className='block font-medium mb-1'>Citizenship Number (नागरिकता नं)</label>
                        <input type="text" name="citizenshipno" id="citizenshipno" className='border-gray-300 rounded px-3 py-2 w-full' placeholder='Citizenship no'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="citizenshiptype" className='block font-medium mb-1'>Citizenship Type (नागरिकता प्रकार)</label>
                        <input type="text" name="citizenshipno" id="citizenshipno" className='border-gray-300 rounded px-3 py-2 w-full' placeholder='Select your citizenship type' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="issuedistrict" className='block font-medium mb-1'>Issue District (जारी जिल्ला)</label>
                        <input type="text" name="issuedistrict" id="issuedistrict" className='border-gray-300 rounded px-3 py-2 w-full' placeholder='Select citizenship Issued district'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="issuedate" className='block font-medium mb-1'>Issue Date (जारी मिति)</label>
                        <input type="text" name="issuedate" id="issuedate" className='border-gray-300 rounded px-3 py-2 w-full' placeholder='issuedate'/>
                    </div> 
                </div>

                <h2 className='text-xl font-bold'>Citizenship Images (नागरिकता फोटो)</h2>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className='mb-4'>
                        <label htmlFor="frontface" className='block font-medium mb-1'>Front Face (अगाडि अनुहार)</label>
                        <input type="file" name="frontface" id="frontface" className='border-gray-300 rounded px-3 py-2 w-full'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="backface" className='block font-medium mb-1'>Back Face (पछाडि अनुहार)</label>
                        <input type="file" name="backface" id="backface" className='border-gray-300 rounded px-3 py-2 w-full'/>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='bg-sky-700 text-white px-4 py-2'>Submit</button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default CitizenshipFormPage
