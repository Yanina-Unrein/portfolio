import "./hero.css"
import Image from "next/image";

export default function Hero() {
    return(
        <section className="px-1.5 mt-1.5 py-2.5">
            <div className="px-1">
                <h2 className="title--hero relative pb-1 my-5">SOBRE MI</h2>
                <p className="mt-4 text-justify px-1 justify-words">
                Soy una apasionada por la programación, videojuegos, mangas, animes y gatos. Soy proactiva, comprometida, autodidacta y me gusta siempre dar lo mejor de mí en todo, por más simple o compleja que se pueda tornar la situación.
                </p>
            </div>
            <div className="flex justify-center item-center mt-4">
                <Image src="/portfolio2.jpg" width={270} height={270} alt="Representacion animada"/>
            </div>
            <div className="flex justify-center item-center my-6">
                <h2 className="text-lg font-semibold text-center title--color">Técnica Superior en Desarrollo Web y Aplicaciones Digitales</h2>
            </div>
            <div className="px-1">
                <p className="mt-4 text-justify px-1 justify-words">
                Me encuentro estudiando las Tecnicaturas en Desarrollo Web y Aplicaciones Digitales en el Instituto Superior Politécnico Córdoba y Desarrollo Web en la Universidad de Entre Ríos, además me encuentro en continuo aprendizaje con cursos, bootcamp o de forma autodidacta.
                </p>
                <p className="mt-4 text-justify px-1 justify-words">Trabajo en equipo sin problemas, tengo habilidad para aprender y adaptarme rápidamente a nuevas tecnologías y herramientas. Estoy dispuesta a aprender continuamente y mantenerme actualizada en las últimas tendencias y avances en la programación y el desarrollo de software.</p>
            </div>
            <div className="flex justify-center item-center mt-4">
                <Image className="rounded-full" src="/profile.png" width={250} height={250} alt="Representacion animada"/>
            </div>
        </section>
    );  
}