const section = document.createElement('section')
section.id = 'gallery'
section.classList.add('min-h-screen', 'bg-cyan-100', 'my-2', 'flex', 'justify-center', 'items-center', 'flex-col')
section.innerHTML = `
<h1 class="text-3xl font-bold text-gray-800 mb-6">Our Gallery</h1>
<div class="container mx-auto px-4 py-12 ">
  <div id="aboutImgs" class="grid grid-cols-3 gap-4 ">
  </div>
</div>
`
export default section