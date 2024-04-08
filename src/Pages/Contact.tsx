import React, {
  ChangeEvent,
  ChangeEventHandler,
  Suspense,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState<string>("idle");
  const [alert, showAlert, hideAlert]: any = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setCurrentAnimation("walk");
  };
  const handleBlur = (e) => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "Vedansh",
          from_email: form.email,
          to_email: "vedanshvishu2712@gmail.com",
          reply_to: form.email,
          user_mail: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          text: "Message sent successfully",
          type: "success",
          show: true,
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((e) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(e);
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && (
        <Alert type={alert.type} show={alert.show} text={alert.text} />
      )}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In touch</h1>
        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="input"
              type="text"
              name="name"
              placeholder=" Enter name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="input"
              type="email"
              name="email"
              placeholder=" Enter email address"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message" className="text-black-500 font-semibold">
            Message
            <textarea
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="textarea"
              name="message"
              placeholder="Let me know how I can help you"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            disabled={isLoading}
            className="btn"
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[330px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            near: 0.1,
            far: 1000,
            fov: 75,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
