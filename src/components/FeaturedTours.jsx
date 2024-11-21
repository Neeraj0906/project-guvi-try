import React from 'react';

function FeaturedTours() {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f0f0f0',width:"95%",marginLeft:"35px" }} className="section__container tours__container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }} className="section__header">Featured Tours</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} className="tours__grid">
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center' }} className="tours__card">
          <img style={{ height: "70px", width: "70px", borderRadius: "5px", marginRight: "10px" }} src="https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVARSDW0" alt="Dubai" />
          <div style={{ display: 'flex', flexDirection: 'column',gap:"10px",marginLeft:"20px" ,fontSize:"40px"}} className="tours__card__content">
            <h4>Dubai</h4>
            <p>Explore the vibrant city of Dubai with our exclusive tour packages.</p>
          </div>
        </div>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center' }} className="tours__card">
          <img style={{ height: "70px", width: "70px", borderRadius: "5px", marginRight: "10px" }} src="https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg" alt="Paris" />
          <div style={{ display: 'flex', flexDirection: 'column',gap:"10px",marginLeft:"20px",fontSize:"40px" }} className="tours__card__content">
            <h4>Paris</h4>
            <p>Discover the romantic charm of Paris with our guided tours.</p>
          </div>
        </div>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center' }} className="tours__card">
          <img style={{ height: "70px", width: "70px", borderRadius: "5px", marginRight: "10px" }} src="https://lapwingvacations.in/wp-content/uploads/2023/08/singapore-1-960x600-1.jpg" alt="Singapore" />
          <div style={{ display: 'flex', flexDirection: 'column',gap:"10px" ,marginLeft:"20px",fontSize:"40px"}} className="tours__card__content">
            <h4>Singapore</h4>
            <p>Experience the beauty and culture of Singapore through our tours.</p>
          </div>
        </div>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center' }} className="tours__card">
          <img style={{ height: "70px", width: "70px", borderRadius: "5px", marginRight: "10px" }} src="https://static2.tripoto.com/media/filter/tst/img/210609/TripDocument/1474116741_destination_for_malaysian_24343.jpg" alt="Malaysia" />
          <div style={{ display: 'flex', flexDirection: 'column',gap:"10px" ,marginLeft:"30px",fontSize:"40px"}} className="tours__card__content">
            <h4>Malaysia</h4>
            <p>Explore the diverse landscapes of Malaysia with our guided tours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;