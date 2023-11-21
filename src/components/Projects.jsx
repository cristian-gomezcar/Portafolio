import pokemon from '../assets/Projects/pokeApi.png'
import task from '../assets/Projects/task.png'
import shop from '../assets/Projects/shop.png'
import wheater from '../assets/Projects/clima.png'
import '../styles/Projects.css'

const Projects = () => {
  const Myprojects = [
    {
      name: "Car Shop",
      description: "Basic e-commerce that works by consuming a product API.",
      img: shop,
      web: "https://appstore-cris.netlify.app/"
    },
    {
      name: "Pokemon Evolution",
      description: "Web page that consumes the pokemon api in which all the evolutions are shown.",
      img: pokemon,
      web: "https://pokemoncris.netlify.app/"
    },
    {
      name: "Weather App",
      description: "App that allows you to know the weather of the main cities of the world.",
      img: wheater,
      web: "https://clima-cris.netlify.app/"
    },
    {
      name: "Task Application",
      description: "web page that allows you to generate tasks as well as mark them as finished and be able to delete them.",
      img: task,
      web: "https://task-cris-app.netlify.app/"
    },


  ]
  return (
    <>
      {Myprojects && Myprojects.map(projects => (
        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <img src={projects.img} alt="" />

          <div className="p-5 p-text">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#f17406] text-center">{projects.name}</h5>
            <p class="mb-3 text-text-[#14213D] text-2xl">{projects.description}</p>
            <div className="flex justify-end">
              <a href={projects.web} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#14213D] rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Web Site
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      ))}

    </>
  );
};

export { Projects };
