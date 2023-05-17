import React from 'react'
import './Testimonials.css'
import aws from '../../assets/AWS Certified Cloud Practitioner certificate.jpg'
import salesforce from '../../assets/Cert3373089_Associate_20230505.jpg'
import dataScience from '../../assets/Coursera BFT9ZW66CVKQ_page-0001.jpg'

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: aws,
    name: 'Amazon',
    review: "After completing the AWS Certified Cloud Practitioner certificate, I gained a solid understanding of the AWS Cloud, its key services, basic architectural principles, security and compliance considerations, billing and pricing models, and general cloud computing concepts. This certification provided me with a strong foundation in AWS and prepared me to explore more advanced AWS certifications and effectively utilize AWS services in real-world scenarios."
  },
  {
    avatar: salesforce,
    name: 'Salesforce',
    review: "After completing the Salesforce Certified Associate certificate, I acquired comprehensive knowledge of Salesforce's core features and functionalities, including sales and service cloud, data management, and automation tools. This certification equipped me with the skills to effectively navigate the Salesforce platform, customize and configure solutions, and collaborate within a Salesforce environment. It solidified my understanding of Salesforce best practices and prepared me to contribute to Salesforce implementation and administration projects."
  },
  {
    avatar: dataScience,
    name: 'IBM',
    review: "After completing the IBM Data Science certificate, I gained a deep understanding of the principles and techniques used in data science. This certification equipped me with the skills to collect, analyze, and interpret data, create data visualizations, apply machine learning algorithms, and communicate data-driven insights effectively. It provided hands-on experience with popular tools and technologies such as Python, Jupyter Notebooks, and various data analysis libraries. This certification has prepared me to tackle real-world data challenges and contribute to data-driven decision-making in various industries."
  }
]
const Testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5> Achievements</h5>
      <h2> Certifications</h2>

      <Swiper className="container tersimonials__container" 
      // modules={[Navigation,Pagination, Scrollbar, A11y]}
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
            <img src={avatar} />
            <h5 className='client__name'> {name} </h5>
            <small className='client__review'>
            {review}
            </small>
          </div>
          
        </SwiperSlide>

            )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials