import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index.css";
import GithubLogo from "../assets/github-mark-white.png"

const Footer = (): JSX.Element => {
  return (
    <div className="h-[10vh] bg-black text-white text-center flex flex-col items-center justify-center">
      <h2
        style={{fontWeight: "normal" }}
      >
        This site has been created by 
        <span style={{ color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={20}
            delaySpeed={1000}
            words={[" Rahul"," Abhishek"]}
          />
        </span>
        {" "}😎
      </h2>
      <div>Copyright &#169; 2023</div>
      <div className="flex flex-row items-center"> <img src={GithubLogo.src} alt="" className="h-[20px] w-[20px] mr-2"/> <a href="https://github.com/abhishekrathi16" style={{textDecoration: "none"}}>Abhishek Rathi</a></div>
      <div className="flex flex-row items-center"> <img src={GithubLogo.src} alt="" className="h-[20px] w-[20px] mr-2"/> <a href="https://github.com/Rahul917-Kumar" style={{textDecoration: "none"}}>Rahul Kumar</a></div>
    </div>
  );
};

export default Footer;
