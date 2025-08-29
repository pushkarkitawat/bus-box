import './footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
          <h3>BOX-BUS</h3>
          <p>
            BusParcel is your trusted logistics and delivery partner, 
            ensuring fast, safe, and reliable parcel transport 
            across cities with the power of technology.
          </p>
        </div>

        {/* Social Links */}
       
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BusParcel. All rights reserved.</p>
      </div>
    </footer>
  );
}
