import Image from "next/image";
import profile from '../../public/images.jpg'
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-sky-700 flex items-center justify-center">
    
      <div className="h-full w-1/3 bg-white mx-auto p-8 rounded-lg shadow-lg">
     
      <div className="flex justify-center items-center mb-6">
<Image src={profile}
style={{width:60,height:50,}}
/>
</div>
        <h1 className="text-2xl font-bold text-center mb-6">Login or Create your Account</h1>

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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <p class="underline text-sky-500 ">
            <Link href="http://localhost:3000/forgetpassword">Forget password</Link>
          </p>
          <p style={{paddingTop:20}}></p>
          <button
            type="submit"
            className="w-60 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
           Log_In
          </button>
          <p style={{paddingBottom:20}}></p>
        
          <p>
          Don't have an account? Sign up today for exclusive content, early access to tickets and other membership rewards
          </p>
          <p class="underline text-sky-500 ">
            <Link href="http://localhost:3000/signup">sign up</Link>
          </p>
          <p style={{paddingTop:20}}>  
          Sign in with your social account
          </p>
          <button
            className="w-80 bg-gray-400 text-white font-bold py-2 transition duration-300"
          >
           Facebook
          </button>
          <p style={{paddingBottom:5}}></p>
          <button
            className="w-80 bg-gray-400 text-white font-bold py-2 transition duration-300"
          >
           Google
          </button>
          <p style={{paddingBottom:5}}></p>
          <button
            className="w-80 bg-gray-400 text-white font-bold py-2 transition duration-300"
          >
           Apple
          </button>
        </form>
      </div>
    </main>
  );
}
