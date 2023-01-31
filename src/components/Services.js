let section = document.createElement('section')
section.classList.add('min-h-screen', 'bg-opacity-70', 'bg-cyan-300', 'flex', 'flex-col', 'justify-center', 'items-center','pt-6')
section.id = 'services'
section.innerHTML = `
<div class=""flex justify-center items-center flex-col>
  <h1 class="text-3xl font-bold text-gray-800 py-2 text-center">Services</h1>
  <div class="container mx-auto px-4 py-1 h-3/4">
    <div class="flex flex-wrap ">
      <div class="w-full sm:w-1/2 mb-8 p-2">
        <img src="/assets/images/coding.png" alt="Web Design" class="h-96 ">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Web Design</h2>
        <p class="text-lg text-gray-600 mb-8">
        I specialize in creating dynamic, user-friendly websites that deliver an exceptional user experience.
        </p>
      </div>
      <div class="w-full sm:w-1/2 h-2/3 mb-8 p-2">
        <img src="/assets/images/eagleEagle.png" alt="Logo Design" class="h-96 ">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Logo Design</h2>
        <p class="text-lg text-gray-600 mb-8">
        I offer professional logo design services to help bring your brand to life.
        </p>
      </div>
    </div>
  </div>
</div>
`
export default section
