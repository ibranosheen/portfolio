const section = document.createElement('section')
section.id = 'footer'
section.innerHTML = `
<footer class="bg-gray-900 py-2 w-full" flex justify-between items-center >
  <div class="container mx-auto flex justify-around">
    <p class="text-white text-center">
      &copy; 2023 Talha
    </p>
    <div class="boredr h-2/5 6 w-2/5">
      <div class="h-full  flex  justify-around">
        <a href="https://www.facebook.com/profile.php?id=100089123447755&mibextid=ZbWKwL" target="_blank" class=" flex justify-center items-center"> <i class="fa-brands fa-facebook-f fa-lg border p-3 py-4 rounded-full bg-gray-200"></i></a>
        <a href="https://instagram.com/muskaanhoriya?igshid=ZDdkNTZiNTM=" target="_blank" class=" flex justify-center items-center"> <i class="fa-brands fa-instagram fa-xl border p-2 py-4 rounded-full bg-gray-200"></i></a>
        <a href="#" class=" flex justify-center items-center"> <i class="fa-brands fa-twitter fa-lg border p-2 py-4 rounded-full bg-gray-200"></i></a>
        <a href="https://www.linkedin.com/in/ibra-nosheen-05676a25b/" target="_blank" class=" flex justify-center items-center"> <i class="fa-brands fa-linkedin-in fa-lg border p-2 py-4 rounded-full bg-gray-200 "></i></a>
      </div>
    </div>
  </div>
</footer>
`
export default section