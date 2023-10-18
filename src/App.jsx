import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './App.css';
import Logo from './logo.jpeg';
function App() {
  return (
  <div className='min-h-screen flex flex-col text-white'>
    <img src={Logo} alt="Logo" width={200} height={200} className='px-4 py-4'></img>
   <main className='container mx-auto px-6 pt-16 flex-1 text-center'>
      <h2 className='text-2xl md:text-4xl lg:text-6xl uppercase'>
        Welcome To
      </h2>

      <h1 className='text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8 mt-5'>
         <span className='text-blue-700'>ORG</span><span className='text-red-700'>Ware</span> Technologies
      </h1>

      <div className='text-lg md:text-2xl lg:text-3xl py-2 px-4 md: py-4 md: px-10 lg: py-6 lg: px-12 
         w-fit mx-auto mb-8 rounded-full'>
       10K + Members | 6 Different Locations
      </div>

      <form 
					action="https://www.orgware.in/" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="For ex: ragugit@gmail.com"
							type="email"
							name="member[email]"
							id="member_email"
							className="text-xl placeholder:text-gray-400 placeholder:italic py-2 px-4 md:px-5 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
					/>
						
            <input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-xl py-2 px-3 md:px-5 lg:py-3 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
	           />
					</div>

					<div className="opacity-75 italic">
						<p className='md:text-xs'>By subscribing, You agree with ORGware's<a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150 text-decoration-line: underline"> Terms of Service</a> and 
            <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150 text-decoration-line: underline"> Privacy Policy</a></p>.
					</div>

				</form>
   </main>

   <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between'>
    
    <p>Build By Ragunathan S</p>

    <div className='flex mx-6'>
      <a href='https://orgware.in/about.html' className='mx-3 hover:opacity-80 duration-150 md: px-5 py-5'>About</a>
      <a href='' className='mx-3 hover:opacity-80 duration-150 md: px-5 py-5'>Privacy</a>
      <a href='https://orgware.in/contact.html' className='mx-3 hover:opacity-80 duration-150 md: px-5 py-5'>Contact</a>
    </div>
    
   </footer>
  </div>
  );
}
export default App;
