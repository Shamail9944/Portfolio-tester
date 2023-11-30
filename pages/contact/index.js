import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn } from './../../variants';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import FacebookMsg from './../../components/FacebookMsg';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 lg:py-10 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-center my-5 lg:my-6 text-xl lg:text-4xl">
            Lets <span className='text-accent'>Connect</span>.
          </motion.h2>

          <motion.form variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' transition={{ duration: 1, ease: 'easeInOut' }} className='flex flex-1 flex-col gap-5 w-full mx-auto'

            onSubmit={(e) => {
              e.preventDefault();
              if (submitted) { return; }
              setName(""); setEmail(""); setSubject(""); setMessage(""); setSubmitted(true);
              console.log(name, email, subject, message);
              fetch("api/contact", {
                method: "POST",
                body: JSON.stringify({ name, email, subject, message }),
                headers: { "Content-Type": "application/json" },
              }).then((res) => {
                if (!res.ok) {
                  toast.error('Failed to send email, try social links at top right corner.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }
                if (res.ok) {
                  toast.success('Email Sent Successfully.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }
                router.push('/')
                return
              })
            }}>

            <div className="flex gap-x-6 w-full" >

              <input type="text" placeholder='Name' className='input' name='name' id='name' required value={name} onChange={(e) => { setName(e.target.value); }} />

              <input type="text" placeholder='Email' className='input' name='email' id='email' required value={email} onChange={(e) => { setEmail(e.target.value); }} />
            
            </div>

            <input type="text" placeholder='Subject' className='input' name='subject' id='subject' value={subject} onChange={(e) => { setSubject(e.target.value); }} />
            
            <textarea type="text" placeholder='Message' className="textarea" name='message' id='message' value={message} onChange={(e) => { setMessage(e.target.value); }} required ></textarea>
            
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' type="submit">
              <span className='group:hover:-translate-y-[120%] group:hover:opacity-0 transition-all duration-500'>Lets talk!</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group:hover:flex group:hover:-translate-y-0 group:hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>

          </motion.form>
        </div>
      </div>
    </div >
  );
};

export default Contact;