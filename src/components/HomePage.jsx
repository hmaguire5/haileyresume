/* eslint-disable */
import '../App.css';
import logo from '../HaileyLogo.png'
import headshot from '../HaileyUpdated.png'
import netjets from '../NetJetsPromo.jpeg'
import consultant from '../ITComputerConsultant.jpeg'

import dataAnalytics from '../dataAnalytics.png'

import tutoring from '../tutoring.jpeg'
import ronBlacks from '../ronBlakcs.jpeg'
import { useState } from 'react';

const resumeFile = `${window.location.origin}/HaileyMaguireResumePDF.pdf`
export default function HomePage() {

    const [navbarOpen, setnavBarOpen] = useState(false);

    const downloadFileAtURL=(url)=> {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");

        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);

        aTag.click();
        aTag.remove();

    }
    return (
        <div>
        <header className="header">

            <img alt="logo" className="logo" src={logo}/>

          
            <button id="menu-icon" onClick={() => setnavBarOpen(!navbarOpen)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            {navbarOpen ? <div class="navbar-mini">
            <a href="javascript:void(0)" class="closebtn" onClick={() => setnavBarOpen(false)}>&times;</a>
                <div class="overlay-content">
                <a onClick= {(event) => {
    event.preventDefault(); 
    setnavBarOpen(!navbarOpen); 
    document.getElementById("home").scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the experience section
  }} href="#home" class="active">Home</a>
                <a onClick= {(event) => {
    event.preventDefault();
    setnavBarOpen(!navbarOpen); 
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the experience section
  }}  href="#about">About</a>
                <a onClick= {(event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    setnavBarOpen(!navbarOpen); // Close the navbar
    document.getElementById("experience").scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the experience section
  }}  href="#experience">Experience</a>
                <a>CV</a>
                </div>
            </div> : null}
            <nav className="navbar">
                <a href="#home" class="active">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a>CV</a>
            </nav>

        </header>

        <section class="home" id="home">
                
            <div class="home-content">
        
            <img alt="headshot" src={headshot}/>
                <h1>Hello, I'm <span class="name-text">Hailey Maguire</span></h1>
                <div class="occupation-text">
                    <h3>Net Jets / Jet East Contractor</h3>
                </div>

                <p class="lower-info">Aspiring professional seeking entry-level opportunities in Northern Virginia.<br/> Eager to contribute enthusiasm, adaptability, and a strong educational background to a dynamic work environment.</p>

                <div class="btn-box">
                <button onClick={()=> {
                    downloadFileAtURL(resumeFile)
                }} class="btn">Download CV</button>
                {/* <div class="btn">Contact Me</div> */}
                </div>
                {/* <div class="headshot_div">
                <img src={headshot} class="headshot-photo"/>
                </div> */}
            </div>
            
        </section>
            {/* <div class="trans-circle">

            </div> */}
        <section class="about" id="about">

             
                <h1 class="about-header">Who am I?</h1>
                
                <div class="split_section">
                <div class="left__section">
                <div class="parent_rectangle_left">
                    <div class="center__text">
                    <svg class="logo_2" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>python</title> <path d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z"></path> </g></svg>
                    <p class="parent_rectangle_text">Outside of my current position, I am currently refining my skills in Python and SQL by taking various self guided courses to further my understanding in data analytics.</p>
                    </div>
                    <div class="child_rectangle1_left">

                        <div class="center__text">
                    <svg class="logo_2" fill="#000000" viewBox="0 -5 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>graduate</title> <path d="M32.639 17.561c0 0-4.592-4.682-10.92-4.682-6.183 0-12.295 4.682-12.295 4.682l-3.433-1.433v4.204c0.541 0.184 0.937 0.682 0.937 1.285 0 0.609-0.404 1.108-0.953 1.288l1.015 2.831h-2.996l1.024-2.855c-0.492-0.209-0.836-0.695-0.836-1.264 0-0.557 0.334-1.031 0.811-1.247v-4.659l-4.993-2.082 21.969-9.861 20.156 9.985-9.486 3.808zM21.469 15.251c6.366 0 9.486 3.37 9.486 3.37v6.99c0 0-3.245 2.621-9.985 2.621s-8.987-2.621-8.987-2.621v-6.99c0 0 3.12-3.37 9.486-3.37zM21.344 26.734c4.412 0 7.989-0.895 7.989-1.997s-3.577-1.997-7.989-1.997-7.988 0.895-7.988 1.997 3.576 1.997 7.988 1.997z"></path> </g></svg>
                        <p class="child_rectangle1_text">As a Merit Scholar, I received my Bachelors of Arts in Neuroscience from the College of Holy Cross in 2023 where I specifically enhanced my strong research skills, particularly geared towards project design incorporating data analytics as well as coding. </p>
                    </div>
                    </div>

                    <div class="child_rectangle2_left">

                        <div class="center__text">
                    <svg class="logo_2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8286 1.72758C19.618 1.37176 21.0449 0.981099 22.1457 2.08172C23.2466 3.18244 22.8558 4.60949 22.5 5.39885C22.2409 5.97353 21.8851 6.58498 21.4343 7.03586L18.3035 10.1667L20.75 19.9527C21.0686 21.2273 19.4017 22.0136 18.6208 20.957L13.9001 14.5701L11.0678 17.4024L10.4818 21.504C10.326 22.5944 8.90642 22.9164 8.29541 21.9999L5.86325 18.3517L1.89476 15.6042C0.960857 14.9577 1.36456 13.4958 2.49799 13.4203L6.85509 13.1298L9.65741 10.3275L3.27054 5.60674C2.21395 4.82579 3.00021 3.1589 4.27485 3.47756L14.0608 5.92406L17.1916 2.7933C17.6424 2.34244 18.254 1.98663 18.8286 1.72758ZM18.5828 4.23053L15.1548 7.65856C14.8567 7.95662 14.4241 8.07643 14.0152 7.9742L7.70352 6.39628L11.5932 9.27129C12.1832 9.70735 12.2473 10.5661 11.7285 11.0848L8.05676 14.7566C7.85123 14.9621 7.57808 15.086 7.28807 15.1054L4.91621 15.2635L7.31557 16.9246L8.79804 19.1483L9.12556 16.8556C9.16228 16.5986 9.28139 16.3604 9.46498 16.1768L13.1427 12.499C13.6615 11.9803 14.5202 12.0443 14.9562 12.6343L17.8312 16.524L16.2533 10.2123C16.1511 9.80342 16.2709 9.37083 16.569 9.07277L19.997 5.64474C20.0811 5.54456 20.4407 5.10051 20.6767 4.57691C20.9648 3.93787 20.8835 3.64788 20.7316 3.49604C20.5796 3.34411 20.2895 3.26286 19.6505 3.5509C19.127 3.78691 18.683 4.14648 18.5828 4.23053Z" fill="#0F0F0F"></path> </g></svg>
                    <p class="child_rectangle2_text">  My current position as an Aircraft Prep Specialist at NetJets/West Star Aviation has strengthened my leadership and communication skills, adaptability, ability to work under time constraints, and productivity. I often lead, schedule, and assign staff to specific planes based on tight schedules
</p>
</div>
                    </div>
                    
                </div>
                </div>
                
                <div class="right__section">
                <div class="parent_rectangle">
                    <div class="center__text">
                <svg class="logo_2" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,2H13a1,1,0,0,0-1,1V22H22V3A1,1,0,0,0,21,2ZM20,19H14V17h6Zm0-4H14V13h6Zm0-4H14V9h6Zm0-4H14V5h6ZM10,9A1,1,0,0,0,9,8H3A1,1,0,0,0,2,9V22h8ZM7,20H5V18H7Zm0-4H5V14H7Zm0-4H5V10H7Z"></path></g></svg>
                    <p class="parent_rectangle_text">
                        I am interested in technology or management fields, specifically within aviation, banking, or media and communications. </p>
                        </div>
                    <div class="child_rectangle1">
                    <div class="center__text">
                    <svg class="logo_2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill="#000000"></path> </g></svg>
                        


                        <p class="child_rectangle1_text">My previous role as an IT Computer Consultant honed my ability to efficiently handle multiple responsibilities and provided a solid foundation in technical support and customer service as well as sparking my interest in software.  </p>
                    </div>
                    </div>

                    <div class="child_rectangle2">
                        <div class="center__text">
                    <svg class="logo_2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M6 15L10 11L14 15L20 9M20 9V13M20 9H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p class="child_rectangle2_text"> I have discovered through my current job that my greatest strength is my ability to adapt and learn new requirements quickly. In my role, I must rapidly understand each aircraft's specifications to ensure their readiness. As part of the morning crew I organize the schedule and adapt to the planes specifications.
</p></div>
                    </div>
                </div>
                </div>

                </div>
        </section>

        <section class="experience" id="experience">

            <div class="experience__header">
                <h2>Experience</h2>

            </div>
                <div class="cards">

                    <div class="card">
                           <div class="card__face card__face--front">
                            <img alt="Net Jets" class="card_image" src={netjets}></img>
                            <div class="card_border">
                                
                            <h3 class="card_job_title">Aircraft Prep Specialist</h3>
                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="#343535"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="#39393A"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="#E73B37"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="#343535"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="#39393A"></path></g></svg>
                            <h3 class="card_job_company">NetJets</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">Westchester, NY</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">October 2023 - Current</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.05005 15.81L10.6201 12.11C10.8201 11.9 11.1501 11.91 11.3401 12.12L12.14 12.98C12.34 13.19 12.6701 13.19 12.8701 12.98L14.94 10.81" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.88 12.86L16.95 9.41C16.95 9.1 16.7001 8.84 16.4001 8.84L12.9301 8.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <div class="skills_obtained">

                         
                                <ul>
                                    <li>
                                       Leadership 
                                    </li>
                                    <li>
                                       Adaptability 
                                    </li>

                                    <li>
                                       Organizational 
                                    </li>

                                    <li>
                                       Collaboration 
                                    </li>
                                </ul>
                                
                            </div>
                            </div>
                            
                            <h3 class="card_text"></h3>
                            </div>
                            </div>
                            <div class="card__face card__face--back">

                            <div class="card_about_header">
                            <h2 class="about_header_text">About </h2>

                            </div>
                            <div class="job_description">
                            <ul>
                                    <li>
                                      Meticulously maintain the professional appearance and inventory stocking of aircraft undergoing service operations, ensuring a pristine and organized environment. 
                                    </li>
                                    <li>
                                    Diligently follow contract specifications to guarantee aircraft readiness for crew members and passengers.
                                    </li>

                                    <li>
                                     Employed strong oral and written communication skills to effectively collaborate with team members and communicate with aviation pilots.
                                    </li>

                                    <li>
                                     Proficiently adapt and quickly learn the unique specifications of each aircraft, ensuring adherence to specific requirements for optimal preparation. 
                                    </li>
                                </ul>
                            </div>
                            <div class="card_border">
                                
                            
                            </div>
                            
                            </div>
                    </div>


                    <div class="card">
                        
                           <div class="card__face card__face--front">
                            <img alt="Consultant" class="card_image" src={consultant}></img>
                            <div class="card_border">
                                
                            <h3 class="card_job_title">IT Computer Consultant</h3>
                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="#343535"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="#39393A"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="#E73B37"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="#343535"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="#39393A"></path></g></svg>
                            <h3 class="card_job_company">College of the Holy Cross</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">Worcester, MA</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">July 2022 - May 2023</h3>
                            </div>

                            <div class="card_row">
                            <svg  className="company_logo" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.05005 15.81L10.6201 12.11C10.8201 11.9 11.1501 11.91 11.3401 12.12L12.14 12.98C12.34 13.19 12.6701 13.19 12.8701 12.98L14.94 10.81" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.88 12.86L16.95 9.41C16.95 9.1 16.7001 8.84 16.4001 8.84L12.9301 8.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <div class="skills_obtained">
                                <ul>
                                    <li>
                                         Management 
                                    </li>
                                    <li>
                                       Teamwork
                                    </li>

                                    <li>
                                        Software
                                    </li>

                                    <li>
                                       Communication 
                                    </li>
                                </ul>
                                </div>
                            </div>
                            
                            
                            <h3 class="card_text"></h3>
                            </div>
                            </div>
                            
                            <div class="card__face card__face--back">

                            <div class="card_about_header">
                            <h2 class="about_header_text">About </h2>

                            </div>
                            <div class="job_description">
                            <ul>
                                    <li>
                                    	Reported to Technology Support Manager and provided technical computer support to faculty, staff, and students (including, but not limited to, Windows and Mac OS operating systems, software packages, Holy Cross sites and systems, and internet browsers).
                                    </li>
                                    <li>
                                    	Assisted with computer and printer setups, retrievals, and dual monitor installs.
                                    </li>

                                    <li>
                                       Monitored, troubleshooted, and completed tickets submitted to the online ticketing system following agile methodologies.
                                    </li>

                                    <li>
                                  	Facilitated the loaner program, data shredded and imaged computers, maintained student desk area, assisted walk-in customers, covered phones, and completed projects as assigned.
                                    </li>
                                </ul>
                            </div>
                            <div class="card_border">
                                
                    
    </div>
                            </div>
                    </div>


                    <div class="card">
                           <div class="card__face card__face--front">
                            <img alt="data" class="card_image" src={dataAnalytics}></img>
                            <div class="card_border">
                                
                            <h3 class="card_job_title">Academic Researcher</h3>
                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="#343535"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="#39393A"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="#E73B37"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="#343535"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="#39393A"></path></g></svg>
                            <h3 class="card_job_company">College of the Holy Cross</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">Worcester, MA</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">January 2022 - May 2022</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.05005 15.81L10.6201 12.11C10.8201 11.9 11.1501 11.91 11.3401 12.12L12.14 12.98C12.34 13.19 12.6701 13.19 12.8701 12.98L14.94 10.81" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.88 12.86L16.95 9.41C16.95 9.1 16.7001 8.84 16.4001 8.84L12.9301 8.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <div class="skills_obtained">
                                <ul>
                                    <li>
                                       Python 
                                    </li>
                                    <li>
                                       Excel 
                                    </li>

                                    <li>
                                       Data Analytics 
                                    </li>

                                    <li>
                                       Data Cleaning 
                                    </li>
                                </ul>
                                </div>
                            </div>
                            
                            <h3 class="card_text"></h3>
                            </div>
                            </div>
                            <div class="card__face card__face--back">
                            <div class="card_about_header">
                            <h2 class="about_header_text">About </h2>

                            </div>
                            <div class="job_description">
                            <ul>
                                    <li>
                                      Gathered research data via surveys consisting of a segment of students.
                                    </li>
                                    <li>
                                       Input and analyzed data utilizing programs such as SPSS (with Python) and Excel.
                                    </li>

                                    <li>
                                      Concluded results concerning the psychological theory of the misinformation effect among students within the pandemic.
                                    </li>

                                    <li>
                                      Presented research at an academic conference in front of a diverse group of esteemed faculty and staff.
                                    </li>
                                </ul>
                            </div>
    </div>
                         
                    </div>

                    <div class="card">
                           <div class="card__face card__face--front">
                            <img alt="tutoring" class="card_image" src={tutoring}></img>
                            <div class="card_border">
                                
                            <h3 class="card_job_title">Tutor</h3>
                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="#343535"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="#39393A"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="#E73B37"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="#343535"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="#39393A"></path></g></svg>
                            <h3 class="card_job_company">City View Discovery School</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">Worcester, MA</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">January 2022 - April 2022</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.05005 15.81L10.6201 12.11C10.8201 11.9 11.1501 11.91 11.3401 12.12L12.14 12.98C12.34 13.19 12.6701 13.19 12.8701 12.98L14.94 10.81" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.88 12.86L16.95 9.41C16.95 9.1 16.7001 8.84 16.4001 8.84L12.9301 8.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <div class="skills_obtained">
                                
                                <ul>
                                    <li>
                                       Communication 
                                    </li>
                                    <li>
                                       Management 
                                    </li>

                                    <li>
                                        Detailed
                                    </li>

                                    <li>
                                       Mentoring 
                                    </li>
                                </ul>
                                
                            </div>
                            </div>
                            
                            <h3 class="card_text"></h3>
                            </div>
                            </div>
                            <div class="card__face card__face--back">
                            <div class="card_about_header">
                            <h2 class="about_header_text">About </h2>

                            </div>
                            <div class="job_description">
                            <ul>
                                    <li>
                                      Weekly taught Latin to a group of four 4th grade students.
                                    </li>
                                    <li>
                                      Created lesson plans consisting of worksheets, interactive games, and video instruction.
                                    </li>

    
                                </ul>
                            </div>
                            </div>
                    </div>

                    <div class="card">
                           <div class="card__face card__face--front">
                            <img alt="restaurant" class="card_image" src={ronBlacks}></img>
                            <div class="card_border">
                                
                            <h3 class="card_job_title">Hostess</h3>
                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M531.8 385v483.3h0.1V385h-0.1z" fill="#343535"></path><path d="M670.9 497.1h86v16h-86zM670.9 625.1h86v16h-86zM233.9 241.1h86v16h-86zM384 241.1h86v16h-86zM233.9 369h86v16h-86zM384 369h86v16h-86zM234 497.5h86v16h-86zM384 497.2h86v16h-86z" fill="#39393A"></path><path d="M398.3 704.4c-11.9-11.9-28.4-19.3-46.5-19.3-36.2 0-65.8 29.6-65.8 65.8v117.4h20V750.9c0-12.2 4.8-23.6 13.5-32.3 8.7-8.7 20.2-13.5 32.3-13.5 12.2 0 23.6 4.8 32.3 13.5 8.7 8.7 13.5 20.2 13.5 32.3v117.4h20V750.9c0-18.1-7.4-34.5-19.3-46.5z" fill="#E73B37"></path><path d="M575.8 429v437.9h0.1V429h-0.1zM286.2 868.3h131.6-131.6z" fill="#343535"></path><path d="M896 868.3V385H575.9V111.6H128v756.7H64v44h896v-44h-64z m-364.1 0H172V155.6h359.9v712.7z m320.1-1.5H575.8V429H852v437.8z" fill="#39393A"></path></g></svg>
                            <h3 class="card_job_company">Brazen Fox, Ron Blacks</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">White Plains, NY</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h3 class="card_job_company">September 2020 - August 2021</h3>
                            </div>

                            <div class="card_row">
                            <svg className="company_logo" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.05005 15.81L10.6201 12.11C10.8201 11.9 11.1501 11.91 11.3401 12.12L12.14 12.98C12.34 13.19 12.6701 13.19 12.8701 12.98L14.94 10.81" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.88 12.86L16.95 9.41C16.95 9.1 16.7001 8.84 16.4001 8.84L12.9301 8.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <div class="skills_obtained">
                                <ul>
                                    <li>
                                       Management 
                                    </li>
                                    <li>
                                       Teamwork 
                                    </li>

                                    <li>
                                       Communication 
                                    </li>

                                    <li>
                                       Hospitality 
                                    </li>
                                </ul>
                                </div>
                            </div>
                            
                            <h3 class="card_text"></h3>
                            </div>
                            </div>
                            <div class="card__face card__face--back">
                            <div class="card_about_header">
                            <h2 class="about_header_text">About </h2>

                            </div>
                            <div class="job_description">
                            <ul>
                                    <li>
                                      Actively monitored restaurant activity to determine guest and dining flow.
                                    </li>
                                    <li>
                                       Responded and catered to guest requests and inquiries in a timely and efficient manner within a fast-paced work environment.
                                    </li>
                                </ul>
                            </div>
    </div>
                  
                    </div>
                </div>

        </section>

                
        </div>

    );
}