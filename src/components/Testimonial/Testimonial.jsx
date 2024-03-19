import TestimonialCard from "./TestmonialCard"
import './Testimonial.css'
const Testimonial = () => {
    return <>
    <section class="section section-testimonial">
        <div class="container">
        </div>
        <div class="swiper mySwiper container">
            <div class="swiper-wrapper">
                <TestimonialCard/>        
                <TestimonialCard/>        
                <TestimonialCard/>        
                <TestimonialCard/>        
                <TestimonialCard/>        
                <TestimonialCard/>        
                <TestimonialCard/>        
                <TestimonialCard/>        
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
    </>
}
export default Testimonial;