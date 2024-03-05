const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="px-20 py-20 mt-4 text-left bg-white shadow-lg w-1/2"> 
        <form action="submit">
          <div className="mt-10">
            
            <div className="mb-4"> 
              <label className="block mb-3 font-concert text-2xl" htmlFor="email">Email</label> 
              <input type="email" placeholder="Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
                id="email" name="email"/>
            </div>
            <div className="mb-4"> 
              <label className="block mb-3 font-concert text-2xl" htmlFor="password">Password</label> 
              <input type="password" placeholder="Password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
                id="password" name="password"/>
            </div>  
            <div className="flex items-baseline justify-between">
              <button type="submit" className="mt-10 px-6 py-2 font-concert bg-customYellow rounded-lg hover:border border-gray-300">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
