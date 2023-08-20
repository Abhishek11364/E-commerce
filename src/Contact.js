import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
  <h2 className="common-heading">Contact</h2>
  <iframe title="My Unique Title"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.984780858174!2d77.45943197504901!3d23.243640879019356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41938c72bdb1%3A0xfb47f3968c60484f!2sBHEL-HEP%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1689247046837!5m2!1sen!2sin"
    width="100%"
     height="450"
      style={{border:0}} 
      allowFullscreen="" loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
      <div className="contact-form">
      <form action="https://formspree.io/f/mbjvjbrw" method="POST" className="contact-inputs">
      <input 
      type="text"
      placeholder="username"
      name="Username"
      
      required
      autoComplete="off"/>

      <input 
      type="email"
      placeholder="Email"
      name="Email"
      required
      
      autoComplete="off"/>

      <textarea name="Message " 
       cols="30" 
       rows="10"
       required
       autoComplete="off"
       placeholder="Enter you message">
       </textarea>

       <input
       type="submit"
       value="Send"
      
       />

      </form>
      </div>
      </div>
      </Wrapper>;
};

export default Contact;
