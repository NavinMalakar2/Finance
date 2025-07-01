

export default function Footer() {
  return (
    <footer className="bg-[#0a1734] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-blue-900">
        {/* Insurance */}
        <div>
          <h4 className="font-bold mb-3">Insurance</h4>
          <ul className="space-y-2">
            <li>General Insurance</li>
            <li>Life Insurance</li>
            <li>Term Insurance</li>
            <li>Investment</li>
            <li>Health Insurance</li>
            <li>Other Insurance</li>
          </ul>
        </div>

        {/* Calculators */}
        <div>
          <h4 className="font-bold mb-3">Calculators</h4>
          <ul className="space-y-2">
            <li>Investment Calculators</li>
            <li>Fitness Calculators</li>
            <li>Income Tax Calculator</li>
            <li>Term Insurance Calculator</li>
            <li>HLV Calculator</li>
            <li>Car/Bike/Health Insurance Calculator</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Articles</li>
            <li>Customer Reviews</li>
            <li>Insurance Companies</li>
            <li>Newsroom</li>
            <li>Awards</li>
            <li>PB Life</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Sitemap</li>
            <li>Careers</li>
            <li>Legal & Admin policies</li>
            <li>Contact Us</li>
            <li>Investor Relations</li>
          </ul>
        </div>
      </div>

      {/* Payment + Security + Socials */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Payment */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-bold text-white mr-2">Payment Methods</span>
          <img src="https://img.icons8.com/color/48/visa.png" className="w-8 h-8" />
          <img src="https://img.icons8.com/color/48/mastercard.png" className="w-8 h-8" />
          <img src="https://img.icons8.com/color/48/paytm.png" className="w-8 h-8" />
          <img src="https://img.icons8.com/color/48/rupay.png" className="w-8 h-8" />
          {/* <img src="https://img.icons8.com/color/48/net-banking.png" className="w-8 h-8" /> */}
        </div>

        {/* Secured with */}
        <div className="text-center text-white">
          <span className="font-bold mr-2">Secured With</span>
          {/* <img src="https://seeklogo.com/images/P/pci-dss-compliant-logo-372C92E23C-seeklogo.com.png" className="inline w-16 h-8" /> */}
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <span className="font-bold">Follow us on</span>
          <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" className="w-6 h-6" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/twitterx.png" className="w-6 h-6" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" className="w-6 h-6" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" className="w-6 h-6" />
        </div>
      </div>

      {/* Legal Text */}
      {/* Legal Text */}
<div className="bg-[#081020] text-gray-400 text-xs px-4 py-6 space-y-2">
  <p>
    © NeoFinance Insurance Services Pvt. Ltd. | CIN: U74999HR2014PTC053454 | Regd. Office: Plot No.119, Sector - 44, Gurugram - 122001
  </p>
  <p>
    NeoFinance is registered as a Composite Broker | Registration No. 742 | IRDA/ DB 797/ 19, Valid till 09/06/2027 | License category - Composite Broker
  </p>
  <p>
    Visitors are hereby informed that their information submitted on the website may be shared with insurers for product/service fulfillment.
  </p>
  <p className="text-white font-semibold">
    BEWARE OF SPURIOUS PHONE CALLS AND FRAUDULENT OFFERS!
  </p>
  <p>
    IRDAI or its officials do not sell insurance policies. Public receiving such calls are requested to lodge a police complaint.
  </p>
</div>

    </footer>
  );
}
