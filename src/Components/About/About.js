import amreshBaiya from '../../Assets/Amresh Yadav.webp'
function About() {

  return (
    <>
      <div className="flex max-md:block">
        <div className="main-img2 w-1/2 max-md:w-full max-md:h-[250px] max-md:bg-center h-[700px] bg-no-repeat bg-cover bg-[50% 50%]"></div>
        <div className="w-1/2 max-md:w-full max-md:pl-6 bg-[#0C1D39] text-white pl-36 max-md:pr-10 pr-[232px] max-md:py-8 pt-28">
          <h1 className='text-[80px] font-light max-md:text-[50px] max-md:leading-[55px] leading-[90px]'>OUR MISSION</h1>
          <p className="py-10 max-md:py-4">At Suvaidyam, we are working for a world where the rural youth will be able to choose a career in technology and escape menial jobs they are forced to pick up because of lack of opportunities and exposure in rural India.</p>
          <p className="py-2">
            At Suvaidyam, we are working for a world where the rural youth will be able to choose a career in technology and escape menial jobs they are forced to pick up because of lack of opportunities and exposure in rural India.
          </p>
          <p className="text-lg pt-7">- Amresh Kumar, Founder</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-16">
        <h1 className="text-[45px] font-thin">THE VISION</h1>
        <div className="h-[2px] w-12 rounded my-7 bg-black"></div>
        <p className="w-full px-[240px] max-md:px-6 text-center font-thin leading-7">Our vision is to empower the rural youth and make them reach their full potential. We want to uplift rural India by educating its young adults in computer technology and creating opportunities for them to create and define their own success.</p>
      </div>
      <div className="w-full flex bg-[#0C1D39]">
        <div className="w-[50%] text-white pl-[200px] max-md:pl-6 max-md:pr-6 pr-24 py-24">
          <h1 className="text-5xl font-normal">Who We Are</h1>
          <div className="flex flex-col gap-8 mt-12">
            <p className="leading-8"><span className="text-2xl">Amresh Kumar</span> founded Suvaidyam in the summer of 2020 with the aim to unleash the full potential of the young adults born and brought up in Indian villages. </p>
            <p className="leading-8">Together Team Suvaidyam is creating opportunities for the rural youth in the tech industry.</p>
            <p className="leading-8">From teaching them how to write code to providing them hands on practical skills, Team Suvaidyam is making sure that these young adults feel confident and qualified for pursuing a variety of technology-focused careers. </p>
          </div>h-[600px]
        </div>
        <div className="w-[50%] flex items-center">
          <div className="mt-6 max-md:mt-0 w-[400px] h-[550px] bg-white relative">
            <img src={amreshBaiya} alt="" className="w-[400px] h-[550px] absolute max-md:bottom-0 max-md:left-0 bottom-12 left-12"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
