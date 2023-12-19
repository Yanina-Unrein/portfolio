import "./technologies.css"
import Image from "next/image"

export default function Technologies(){
    return(
        <section className="technologies--container px-1.5 py-2.5 my-6">
            <div className="px-1">
                <h2 className="title--hero relative pb-1 my-5">TECNOLOGÍAS</h2>               
            </div>
            <div className="px-1">
                <h3>Frontend</h3>
                <div className="flex gap-2.5 justify-around mt-4 px-2">
                    <Image src="\iconsTechnologies\html.svg" alt="icono de HTML5" width={65} height={60}/>
                    <Image src="\iconsTechnologies\css.svg" alt="icono de CSS3" width={65} height={60}/>
                    <Image src="\iconsTechnologies\javascript.svg" alt="icono de JavaScript" width={65} height={60}/>
                </div>
            </div>
            <div className="px-1 mt-6">
                <h3>Backend</h3>
                <div className="flex gap-2.5 justify-around mt-4 px-2">
                    <Image src="\iconsTechnologies\python.svg" alt="icono de Python" width={65} height={60}/>
                    <div className="iconTech--background flex justify-center">
                        <Image src="\iconsTechnologies\nodejs.svg" alt="icono de NodeJS" width={65} height={60}/>
                    </div>                                  
                </div>
            </div>
            <div className="px-1 mt-6">
                <h3>Librerias / Frameworks / Preprocesadores</h3>
                <div className="grid grid-cols-3 grid-rows-2 mt-4 gap-2.5 py-2 justify-items-center">
                    <Image src="\iconsTechnologies\angular.svg" alt="icono de Angular" width={65} height={60}/>
                    <Image src="\iconsTechnologies\react.svg" alt="icono de React" width={65} height={60}/>  
                    <Image src="\iconsTechnologies\bootstrap.svg" alt="icono de Bootstrap" width={65} height={60}/>   
                    <Image src="\iconsTechnologies\tailwind.svg" alt="icono de Tailwind" width={65} height={60}/>      
                    <Image src="\iconsTechnologies\django.svg" alt="icono de Django" width={65} height={60}/>                     
                </div>
            </div>
            <div className="px-1 mt-6">
                <h3>Base de Datos</h3>
                <div className="flex justify-center mt-4 px-2 iconTech--background mx-6">
                    <Image src="\iconsTechnologies\mysql.svg" alt="icono de MySQL" width={65} height={60}/>                                                   
                </div>
            </div>    
            <div className="px-1 my-6">
                <h3>Herramientas</h3>
                <div className="flex gap-2.5 justify-around mt-4 px-2">
                    <Image src="\iconsTechnologies\git.svg" alt="icono de Git" width={65} height={60}/>
                    <Image src="\iconsTechnologies\github.svg" alt="icono de Github" width={65} height={60}/>
                </div>
            </div>      
        </section>
    )
}