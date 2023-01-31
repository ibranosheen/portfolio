let section = document.createElement('section');
section.classList.add('fixed', 'w-full','z-30',  );
section.innerHTML = `
<header class="bg-gray-900 p-2">
  <div class="container mx-auto">
    <nav class="flex items-center justify-between pr-4">
      <a href="#">
        <img src="/assets/images/logo.jpg" alt="Logo" class="w-20 h-12" >
      </a>
      <div id="nav"  class="lg:flex md:flex sm:flex hidden >
        <a class="px-4 py-2 text-gray-900 font-medium hover:bg-gray-800 rounded" href="#home">
          
        </a>
        <a class="px-4 py-2 text-white font-medium hover:border-b-4 rounded" href="#home">
          Home
        </a>
        <a class="px-4 py-2 text-white font-medium hover:border-b-4 rounded" href="#about">
          About
        </a>
        <a class="px-4 py-2 text-white font-medium hover:border-b-4 rounded" href="#services">
          Services
        </a>
        <a class="px-4 py-2 text-white font-medium hover:border-b-4 rounded" href="#gallery">
          Gallery
        </a>
        <a class="px-4 py-2 text-white font-medium hover:border-b-4 rounded" href="#contact">
          Contact
        </a>
      </div>
      <div id="navBtn" class="lg:hidden md:hidden sm:hidden flex ">
      <button class="text-gray-500 hover:text-white focus:outline-none focus:text-white" aria-label="toggle menu">
      <i class="fa-solid fa-bars fa-xl"></i>
      </button>
      </div>
      </nav>
      
      </div>
      </header>
      <div id="hideNav" class="absolute t-10 h-screen w-screen hidden"></div>
      <div id="smNav"  class="absolute right-0 top-10 bg-gray-900  hidden flex-col w-40   >
        <a class="px-4 py-2 text-gray-900 font-medium bg-gray-900 rounded mx-4 my-2 w-24"  href="#home">
          Hom
        </a>
        <a class="px-4 py-2 text-gray-900 font-medium bg-gray-200 rounded mx-4 my-2 w-24"  href="#home">
          Home
        </a>
        <a class="px-4 py-2 text-gray-900 font-medium bg-gray-200 rounded mx-4 my-2 w-24"  href="#about">
          About
        </a>
        <a class="px-4 py-2 text-gray-900 font-medium bg-gray-200 rounded mx-4 my-2 w-24"  href="#services">
          Services
        </a>
        <a class="px-4 py-2 text-gray-900 font-medium bg-gray-200 rounded mx-4 my-2 w-24"  href="#gallery">
          Gallery
        </a>
        <a class="px-4 py-2 text-gray-900 font-medium bg-gray-200 rounded mx-4 my-2 w-24"  href="#contact">
          Contact
        </a>
      </div>
      `
export default section;