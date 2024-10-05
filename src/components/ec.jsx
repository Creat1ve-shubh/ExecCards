import React from 'react'

const Cards = () => {
  const committeeData = [
    {
      name: "Technicals",
      members: [
        { id: 1, name: "Adwait Deshpande", image: "images.jpeg", role: "Lead Developer" },
        { id: 2, name: "Arnav Vatsal", image: "images.jpeg", role: "UI/UX Designer" },
      ]
    },
    {
      name: "Web Dev",
      members: [
        { id: 3, name: "Ayush Shashi", image: "images.jpeg", role: "Lead Developer" },
        { id: 4, name: "Lalit Rao", image: "images.jpeg", role: "UI/UX Designer" },
        { id: 5, name: "Vasu Verma", image: "images.jpeg", role: "UI/UX Designer" },
      ]
    },
    {
      name: "Social Media",
      members: [
        { id: 6, name: "Dheeraj Kumar", image: "images.jpeg", role: "Lead Developer" },
        { id: 7, name: "Suyash Srivastava", image: "images.jpeg", role: "UI/UX Designer" },
      ]
    },
    {
      name: "Graphic Designs",
      members: [
        { id: 8, name: "Anshika Sethi", image: "images.jpeg", role: "Lead Developer" },
        { id: 9, name: "Siddhide Panchwadkar", image: "images.jpeg", role: "UI/UX Designer" },
      ]
    },
    {
      name: "Media",
      members: [
        { id: 10, name: "Asman Bindra", image: "images.jpeg", role: "Lead Developer" },
        { id: 11, name: "Jyotiraditya Singh", image: "images.jpeg", role: "UI/UX Designer" },
        { id: 12, name: "Vedant Agarwalla", image: "images.jpeg", role: "UI/UX Designer" },
      ]
    },
    {
      name: "Events",
      members: [
        { id: 13, name: "Pratiksha Kamath", image: "images.jpeg", role: "Event Coordinator" },
        { id: 14, name: "Shaurya Gupta", image: "images.jpeg", role: "Logistics Manager" },
        { id: 15, name: "Yash Dhruv", image: "images.jpeg", role: "Event Coordinator" },
      ]
    },
    {
      name: "Operations",
      members: [
        { id: 16, name: "Akshat Agarwal", image: "images.jpeg", role: "Supply Chain Manager" },
      ]
    },
    {
      name: "Curations",
      members: [
        { id: 17, name: "Kaustubh Pareek", image: "images.jpeg", role: "Supply Chain Manager" },
        { id: 18, name: "Kawshal Ram", image: "images.jpeg", role: "Supply Chain Manager" },
      ]
    },
    {
      name: "Finances",
      members: [
        { id: 19, name: "Akansha Kumari", image: "images.jpeg", role: "Supply Chain Manager" },
        { id: 20, name: "Samriddhi Gupta", image: "images.jpeg", role: "Supply Chain Manager" },
        { id: 21, name: "S Nikhil", image: "images.jpeg", role: "Supply Chain Manager" },
      ]
    },
    {
      name: "Marketing",
      members: [
        { id: 22, name: "Prarthana Srivastava", image: "images.jpeg", role: "Supply Chain Manager" },
      ]
    }
  ]

  return (
    <div className='bg-slate-950 min-h-screen overflow-hidden'>
      <h1 className='text-5xl text-white text-center font-bold mt-16 mb-20'>Executive Committee</h1>
      
      {committeeData.map((committee) => (
        <div key={committee.name} className='mb-16'>
          <h2 className='text-4xl text-white text-center my-10'>{committee.name}</h2>
          <div className='container mx-[40vh] px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
              {committee.members.map((member) => (
                <div key={member.id} className='bg-gradient-to-r from-purple-800 to-purple-900 overflow-hidden shadow-xl rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-xs'>
                  <img 
                    src={member.image} 
                    alt={`${member.name}'s profile`} 
                    className='w-full h-48 object-cover'
                  />
                  <div className='p-4'>
                    <h3 className='text-xl text-white font-semibold'>{member.name}</h3>
                    <p className='text-sm text-purple-200 mt-1'>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards