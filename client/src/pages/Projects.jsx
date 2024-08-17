import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>I developed my personal projects using the MERN stack (MongoDB, Express.js, React, Node.js) and Flutter, creating dynamic, responsive web and mobile applications. These projects involved building RESTful APIs, integrating front-end and back-end services. The experience enhanced my skills in full-stack development, UI/UX design, and cross-platform app development, showcasing my ability to deliver robust and efficient applications.</p>
      <CallToAction />
    </div>
  )
}