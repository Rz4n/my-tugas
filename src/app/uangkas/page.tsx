import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <nav className='bg-black'>
        <div className='max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center '>
              <div className='flex-shrink-0'>
                <a href='/' className='text-white'>
                  Logo
                </a>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center'></div>
            </div>
          </div>
        </div>
      </nav>
      <div className='logo'>
        <h1>Ninja list</h1>
      </div>
      <Link href='/Home'>Home</Link>
      <Link href='/About'>About</Link>
      <Link href='/ninja'>Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;