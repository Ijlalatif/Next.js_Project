import Image from "next/image";
import logo from '../../../public/icc.jpg'
export default function Forget(){
    return(
        <main  className="min-h-screen bg-sky-900 flex items-center justify-center">
<div className="h-full w-1/3 bg-white mx-auto p-8 rounded-lg shadow-lg">
<div className="flex justify-center items-center mb-6">
  
<Image src={logo}
style={{width:60,height:50,}}
/>
</div>
<p className="flex justify-center">
<h4 >Verification is necessary. Please click Send button.</h4>
</p>

<form>
<div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex justify-center">
          <button className="h-10 w-60 bg-sky-600 text-white  transition duration-300 ">
            Send Verification code
          </button>
        
          </div>
          <p style={{paddingBottom:70}}> </p>
          <div className="flex justify-center">
          <button className="h-10 w-60 bg-sky-600 text-white  transition duration-300 ">
            Send Verification code
          </button>
          </div>
</form>
</div>
        </main>
    )
}