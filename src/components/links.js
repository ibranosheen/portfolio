const section = document.createElement('section');
section.id = 'links';
section.classList.add('fixed', 'z-20', 'w-1/12', 'h-screen', 'md:flex', 'items-center',"lg:flex","hidden");
section.innerHTML = `
<div class="boredr h-2/5 6w-1/2 mx-auto flex items-end">
    <div class="h-full  flex flex-col justify-around">
        <a href="https://www.facebook.com/profile.php?id=100089123447755&mibextid=ZbWKwL" target="_blank" class=" flex justify-center items-center"> <i class="fa-brands fa-facebook-f fa-lg border  p-3 py-4 rounded-full"></i></a>
        <a href="https://instagram.com/muskaanhoriya?igshid=ZDdkNTZiNTM=" target="_blank" class=" flex justify-center items-center"> <i class="fa-brands fa-instagram fa-xl border p-2 py-4 rounded-full"></i></a>
        <a href="#" class=" flex justify-center items-center"> <i class="fa-brands fa-twitter fa-lg border p-2 py-4 rounded-full"></i></a>
        <a href="https://www.linkedin.com/in/ibra-nosheen-05676a25b/" target="_blank" class=" flex justify-center items-center"> <i class="fa-brands fa-linkedin-in fa-lg border p-2 py-4 rounded-full"></i></a>
    </div>
</div>
`

console.log();
export default section;