import React from "react";

function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 
        py-14 bg-gray-50 dark:bg-[#181818] border-t border-[#5f5ff5] shadow-xl shadow-[#5f5ff5]"
    >
      <div className="space-y-4 text-xs ">
        <h5 className="font-bold text-[#5f5ff5]">Support</h5>
        <p>Help Center</p>
        <p>AirCover</p>
        <p>Supporting people with disabilities</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Report a neighborhood concern</p>
      </div>
      <div className="space-y-4 text-xs ">
        <h5 className="font-bold text-[#5f5ff5]">Community</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Combating discrimination</p>
      </div>
      <div className="space-y-4 text-xs">
        <h5 className="font-bold text-[#5f5ff5]">Hosting</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-4 text-xs ">
        <h5 className="font-bold text-[#5f5ff5]">Airbnb</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Gift cards</p>
      </div>
    </div>
  );
}

export default Footer;
