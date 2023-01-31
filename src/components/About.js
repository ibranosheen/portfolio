const section = document.createElement('section')
section.classList.add('min-h-screen', 'bg-cyan-500', 'my-2', 'flex', 'flex-col', 'justify-center', 'items-center')
section.id = 'about'
section.innerHTML = `
<h1 class="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
<div class="container mx-auto px-4 py-12">
  <p class="text-lg text-gray-800 mb-8">
    I am a highly motivated and experienced Vue.js developer with a passion for web design and logo design.
    I have a strong background in developing dynamic, user-friendly websites that deliver an exceptional user
    experience.
    With my experience in Firebase, I can quickly and easily add real-time data and cloud-based services to my
    Vue.js applications.
  </p>
  <div class="flex items-center">
    <div class="w-1/2  m-4 ">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
      <ul class="   pl-5">
        <li class="text-xl text-gray-800 mb-4"><span class="font-semibold px-2" ><i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg"></i></span> Vue.js</li>
        <li class="text-xl text-gray-800 mb-4"><span class="font-semibold px-2" ><i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg"></i></span> Firebase</li>
        <li class="text-xl text-gray-800 mb-4"><span class="font-semibold px-2" ><i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg"></i></span> Web Design</li>
        <li class="text-xl text-gray-800 mb-4"><span class="font-semibold px-2" ><i class="fa-solid fa-hand-pointer fa-rotate-90 fa-lg"></i></span> Logo Design</li>
      </ul>
    </div>
    <div class="w-2/5 p-2 shadow-md ">
      <img src="/assets/images/designing.png" alt="" class="rounded-md">

    </div>
  </div>
</div>
`
export default section