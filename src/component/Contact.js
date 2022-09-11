
const Contact=()=>{
    return(
        <>
        <div className="contact">
            <h3>Contact</h3>
            <div className="contactForm">
                <p>Submit the form below or Email me Directly - Isaacaltif123@gmail</p>
                <input type='text' placeholder="Name"/>
                <input type='text' placeholder="Email"/>
                <textarea  placeholder="Message"></textarea>
                <input type='submit' value='Lets Collaborate' className="submit"/>
            </div>
        </div>
        </>
    )
}
export default Contact;
