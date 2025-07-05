import Image from "next/image";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 monts">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl p-4">
        {/* Login Card */}
        <div className="flex-1 max-w-md w-full bg-white dark:bg-[#060607] rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/favicon.ico" alt="Round Table" width={32} height={32} className="rounded-full" />
            <span className="text-xl font-bold audiowide text-gray-900 dark:text-white">Round Table</span>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Welcome back</h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-6">Sign in to access the admin panel</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="name@company.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input type="password" id="password" name="password" required className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">Forgot password?</a>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors">Sign in to your account</button>
          </form>
        </div>
        {/* Illustration */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <Image src="/images/svg/illustration.svg" alt="illustration" width={350} height={350} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
