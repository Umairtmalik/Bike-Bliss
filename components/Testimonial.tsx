import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#14121F] text-white" id="testimonials">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Avatar Section */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/avatar.svg" 
            alt="Avatar"
            width={80} 
            height={80}
            className="rounded-full border-2 border-secondary" 
          />
          <div className="text-center">
            <p className="text-lg font-medium">John S</p> 
            <p className="text-sm text-gray-400">Position, Company Name</p> 
          </div>
        </div>

        {/* Testimonial Quote */}
        <p className="w-full max-w-screen-xl text-center text-white-400 text-900 max-w-md text-4xl font-bold mb-4 leading-tight">
          "Absolutely love my ThunderBolt! Smooth ride, sleek design, and unbeatable performance."
        </p>
        <p className='text-4xl font-bold mb-4 leading-tight'> -John S</p>
      </div>
    </section>
  );
};

export default Testimonials;