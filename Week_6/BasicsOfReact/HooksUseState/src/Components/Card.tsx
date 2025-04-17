import React from 'react'

const Card = ({recipeName} : any) => {

    console.log(recipeName);





    return (
        <div className='flex justify-center'>
            <div className=" flex-col bg-gray-800 inline-block rounded-2xl p-5">
                <div>
                    <img className="size-48 shadow-xl rounded-md " alt="" src="./src/assets/beef-burger.avif" />
                </div>
                <div className="flex items-center flex-col">
                    <span className="text-2xl font-medium text-white my-2 ">{recipeName}</span>
                    <span className="font-medium text-sky-500">Taste the Real Burger</span>
                    <button className='bg-blue-300 rounded px-4 py-2 my-4 hover:bg-amber-500 cursor-pointer'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card