const section = document.createElement('section')
section.id = 'contact'
section.classList.add('min-h-screen', 'bg-cyan-50', 'my-2', 'flex', 'flex-col', 'justify-center', 'items-center')
section.innerHTML = `
      <div class="container mx-auto px-4 py-12 flex flex-col justify-center items-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <form class="lf:w-1/2 md:w-1/2 w-full">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
            <span id="nameError" class="text-red-600 px-8 hidden font-normal">Name is required</span>
          </label>
          <input placeholder="Name" class="w-full border border-gray-400 p-2" type="text" id="name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
            <span id="emailError" class="text-red-600 px-8 hidden font-normal">email is required</span>
          </label>
          <input placeholder="someone@example.com" class="w-full border border-gray-400 p-2" type="email" id="email">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="message">
            Message
            <span id="messageError" class="text-red-600 px-8 hidden font-normal">Message is to short</span>
          </label>
          <textarea  placeholder="Your Mesage" class="w-full border border-gray-400 p-2" id="message"></textarea>
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">
          Submit
        </button>
      </form>
      </div>
`
export default section