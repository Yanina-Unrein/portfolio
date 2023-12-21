import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface Project {
  title: string;
  description: string;
  image: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;