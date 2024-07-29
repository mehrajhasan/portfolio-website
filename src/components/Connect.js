import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Connect = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_daiqp9n', 'template_ei32f3y', form.current, {
        publicKey: 'Is6api_YrDkbATLX4',
      })
      .then(
        () => {
          console.log('Success');
          e.target.reset();
        },
        (error) => {
          console.log('Failed...', error.text);
        },
      );
  };

    return(
        <section className="connect" id="connect">
            <div className="connectbox">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="nameemail">
                        <div className="name">
                            <h2>Name</h2>
                            <input type="text" name="from_name" />
                        </div>

                        <div className="email">
                            <h2>Email</h2>
                            <input type="email" name="from_email" />
                        </div>
                    </div>

                    <div className="message">
                        <h2>Message</h2>
                        <textarea name="message" />
                    </div>

                    <input type="submit" value="Send" />
                </form>
            </div>
        </section>
    )
}

export default Connect;