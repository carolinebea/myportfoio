const Contact = () => {
  // jsx uses className for class, img and input tags need to be self closing ie <img src="something" />, inline styles use {{}}
  return (
   <div className="contact" style={{width: "100%"}}>
    <h2>Contact Page</h2>

    <ul>
    <li>Phone: 317-501-1971</li>
    <li>Email: coraline.bea@gmail.com</li>
    <li>GitHub: github.com/carolinebea</li>
    </ul>



   </div>
  );
};

export default Contact;
