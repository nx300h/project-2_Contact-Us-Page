import Button from '../Button/Button';
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <section className={styles.container}>
       <div className={styles.contact_form}>
        <div className={styles.top_btn}> 
        <Button 
        text="CHAT"
        icon= {<MdMessage fontSize="24px"/>} />
         <Button 
        text="CALL"
        icon= {<BsTelephone fontSize="24px"/>} />
        </div>
        <Button 
        isOutline={true}
        text="EMAIL"
        icon= {<HiMail fontSize="24px"/>} />
       <form onSubmit={onSubmit}>
       <div className={styles.form_controler}>
       <label htmlFor="name">Name</label>
        <input type="text" name="name" />
       </div>
       <div className={styles.form_controler}>
       <label htmlFor="email">Email</label>
        <input type="email" name="email" />
       </div>
       <div className={styles.form_controler}>
       <label htmlFor="text">Text</label>
        <textarea name="text" rows="10"/>
       </div>
      <div style={{
        display: "flex",
        justifyContent: "end",
      }}>
      <Button text="SUBMIT BUTTON" />
      </div>
       </form>
       </div>
      <div className={styles.contact_image}>
      <img src="/images/Service 24_7-pana 1.svg" alt="logo" />
      </div>
     
    </section>
  )
}

export default ContactForm;