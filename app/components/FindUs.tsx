import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';

export function FindUs() {
  return (
    <section id="find-us" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-stone-200 mb-4">
            <span className="text-gray-900 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              Visit Us
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl mb-6 text-gray-900"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Find Us in Oakham
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.123!2d-0.7307!3d52.6706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDQwJzE0LjIiTiAwwrA0Myc1MC41Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Köz Restaurant Location"
            ></iframe>
            <a 
              href="https://maps.google.com/?q=2+High+Street,+Oakham,+Rutland"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-900 hover:text-white text-gray-900 font-medium text-sm shadow-lg transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Open in Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 text-white flex items-center justify-center rounded-full">
                  <MapPin className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-2xl mb-2 text-gray-900"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Address
                </h3>
                <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  2 High Street
                  <br />
                  Oakham
                  <br />
                  Rutland, LE15 6AL
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 text-white flex items-center justify-center rounded-full">
                  <Clock className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-2xl mb-2 text-gray-900"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Opening Hours
                </h3>
                <div className="text-lg text-gray-700 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="flex justify-between gap-8">
                    <span className="font-medium">Monday - Thursday:</span>
                    <span>12:00 PM - 10:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-8">
                    <span className="font-medium">Friday - Saturday:</span>
                    <span>12:00 PM - 11:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-8">
                    <span className="font-medium">Sunday:</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 text-white flex items-center justify-center rounded-full">
                  <Phone className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-2xl mb-2 text-gray-900"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Contact
                </h3>
                <a 
                  href="tel:+441572123456"
                  className="text-lg text-gray-900 hover:text-gray-700 font-medium transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  01572 827 820
                </a>
                <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  For reservations & enquiries
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a 
                href="https://ordara.co.uk" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center px-10 py-4 bg-gray-900 hover:bg-gray-700 text-white font-semibold text-lg uppercase tracking-wider transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Order for collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}