import { jobData } from './jobData';

export default function Home() {
  return (
    <div>
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <section id="about" className="flex flex-col justify-center p-6 animation-slideIn rounded-lg shadow-lg glass-effect mb-12">
        <h2 className="text-3xl font-bold text-center underline">About Me</h2>
        <p className="text-lg mt-4 text-center">
          With over a decade in software engineering, I focus on creating conversational edtech platforms and blending gaming with education, while also nurturing teams to deliver engaging learning experiences.
        </p>
      </section>

      <section id="experience" className="flex flex-col justify-center p-6 animation-fadeIn rounded-lg shadow-lg glass-effect mb-12">
        <h2 className="text-3xl font-bold text-center underline">Experience</h2>
        <div className="mt-6 flex flex-col items-center space-y-12">
          {jobData.map((job, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row md:flex-nowrap items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
             
              <div className={`w-full md:w-1/2 p-4 md:order-2 md:order-${index % 2 == 0 ? 1 : 2} order-${index % 2 == 0 ? 1 : 2}`}>
                <img src={job.image} alt={job.company} className="work-image rounded-lg shadow-lg w-full" />
              </div>
              <div className={`w-full md:w-1/2 p-4 md:order-${index % 2 == 0 ? 2 : 1} order-${index % 2 == 0 ? 2 : 1 }`}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front ">
                      <div className="flip-card-innermost flex flex-col rounded-lg shadow-lg p-6">
                          <h3 className="text-2xl font-bold">{job.title}</h3>
                          <p className="mt-2">{job.company}</p>
                          <p className="mt-2">{job.duration}</p>
                          <p className="mt-4">{job.description}</p>
                        </div>
                    </div>
                    <div className="flip-card-back ">
                      <div className="flip-card-innermost flex flex-col  rounded-lg shadow-lg p-6">
                          <h3 className="text-2xl font-bold">{job.company}</h3>
                          <p className="mt-4">Technologies Used:</p>
                          <p className="mt-2">{job.tech}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="flex flex-col justify-center p-6 animation-slideIn glass-effect">
        <h2 className="text-3xl font-bold text-center underline">Contact</h2>
        <p className="text-lg mt-4 text-center">
          I'd love to hear from you! Whether you have a question, a project opportunity, or just want to connect, feel free to reach out.
        </p>
        <form className="flex flex-col space-y-4 mt-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" required className="p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" required className="p-2 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" rows="5" required className="p-2 border border-gray-300 rounded"></textarea>
          <button type="submit" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>
    </div>
  );
}
