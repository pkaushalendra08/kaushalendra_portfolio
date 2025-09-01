import { useRef, useState } from "react";


const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

    }

    const handleFormSubmit = (FormData) => {
        const formInputData = Object.fromEntries(FormData.entries());
        console.log(formInputData)
    }



    return (
        <section
            id="contact"
            className="flex flex-col justify-center py-16
            px-[12vw] md:px-[7vw] lg:px-[20vw] items-center bg-[#224b89]"
        >

            {/*Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white "> Contact</h2>
                <div className="w-32 h1 bg-purple-500 mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    I'd love to hear from you-reach out for any opportunities or questions!
                </p>
            </div>

            {/* Form */}
            <div className="mt-6 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white text-center">
                    Connect with ME!
                </h3>
                <form
                    action={handleFormSubmit}
                    ref={form}
                    className="mt-4 flex flex-col space-y-4">
                    <input type="email" name='user_email' placeholder="Your Email" required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500]" />

                    <input type="text" name='user_name' placeholder="Your Name" required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500]" />

                    <input type="text" name='subject' placeholder="Subject" required
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500]" />

                    <textarea name="message" placeholder="Message" rows="4"
                        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500]"
                    ></textarea>

                    {/* Send Button */}
                    <button type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 trasnsitiom"
                    > SEND
                    </button>
                </form>
                {/* <p className="text-gray-400 text-sm text-center mt-6">
                    Or reach out directly:{" "}
                    <a
                        href="mailto:pkaushalendra08@gmail.com"
                        className="text-[#8245ec] hover:underline"
                    >
                        pkaushalendra08@gmail.com 
                    </a>
                </p> */}
            </div>

        </section>
    )
}

export default Contact;