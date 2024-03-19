const TestimonialCard = () => {
    let name = "Omkar";
    let village = "Beed";
  return (
    <>
        <div class="swiper-slide">
            <div class="swiper-client-msg">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                    velit corrupti iure harum consectetur voluptates.
                </p>
            </div>
            <div class="swiper-client-data grid grid-two-column">
                <div class="client-data-details">
                    <p>{name}</p>
                    <p>{village}</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default TestimonialCard;
