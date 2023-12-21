import "./projects.css";
import ProjectCarousel from './projectCarousel';



export default function Projects() { 
    const projects = [
        {
          title: 'Proyecto 1',
          description: 'Descripción del Proyecto 1',
          image: 'ruta/a/tu/imagen1.jpg',
        },
        {
          title: 'Proyecto 2',
          description: 'Descripción del Proyecto 2',
          image: 'ruta/a/tu/imagen2.jpg',
        },
        // ... más proyectos
    ];

    return(
            <section>
                <h2>PROYECTOS</h2>
                <div>
                    <ProjectCarousel projects={projects} />
                </div>
            </section>
    )
    
}