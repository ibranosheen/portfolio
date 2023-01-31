const imgUrl = '/public/assets/images/bettle.png'
let section = document.createElement('section')
section.classList.add( 'bg-cyan-800', 'min-h-screen', 'mb-2')
// <div class="p-7"></div>
section.id = 'home'
section.innerHTML = `
  <div class="flex flex-col items-center justify-center  min-h-screen w-screen">
  <h1 class="text-5xl font-bold text-gray-800 md:mt-10 lg:mt-24  text-center ">Welcome to My Portfolio</h1>
  <section id="image-carousel" class="splide  w-4/5 h-96  "  aria-label="Beautiful Images">
  <div class="splide__track  ">
		<ul class="splide__list   ">
			<li class="splide__slide">

				<img src="https://fireart.studio/wp-content/uploads/2019/01/screenshot-1076.jpg" class="h-3/5 w-full m-2" alt="">
			</li>
			<li class="splide__slide">
				<img src="https://miro.medium.com/max/1400/1*VbspKTNIZeu22XDOeiFaYg.png" class="h-3/5 w-full m-2 alt="">
			</li>
			<li class="splide__slide">
				<img src="https://i.pinimg.com/originals/fd/bb/44/fdbb44ca05629db8f5c532633a8b836a.png" class="h-3/5 w-full m-2 alt="">
			</li>
		</ul>
  </div>
</section>
    
    <p class="text-xl text-gray-800 md:mt-10 lg:m-40 text-center px-10">I'm a Vue.js developer specializing in web design and logo design.</p>
  </div>
`
export default section

{/* <section class="flex justify-center items-center  ">
      <section class="splide h-full   ">
        <div class="splide__slider h-full border -mt-10 ">
          <div class="splide__track  ">
            <ul class="splide__list  border-8 ">
              <li class="splide__slide  "><img class="h-2/5 w-full" src="https://fireart.studio/wp-content/uploads/2019/01/screenshot-1076.jpg" alt=""></li>
              <li class="splide__slide  "><img class="h-2/5 w-full" src="https://miro.medium.com/max/1400/1*VbspKTNIZeu22XDOeiFaYg.png" alt=""></li>
              <li class="splide__slide  "><img class="h-2/5 w-full" src="https://i.pinimg.com/originals/fd/bb/44/fdbb44ca05629db8f5c532633a8b836a.png" alt=""></li>
            </ul>
          </div>
        </div>
      </section>
    </section> */}