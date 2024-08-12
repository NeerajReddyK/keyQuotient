import './Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPersonPraying } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FiExternalLink } from 'react-icons/fi'

function Info() {
    return (
        <div id="about" className='mt-5 mb-5'>
            <div id="creator">
                <p className='m-0 text-center' style={{ color: "#646669" }}>Created with love by <span style={{ color: "#55c0db" }}>Neeraj</span>
                    <br />Inspired from <a href="https://monkeytype.com/" target="_blank" id="monkeytype-website">monketype.com<FiExternalLink className='ms-2' /></a><br />*This website is developed as a part of project and all credits are owned by monketype.com<FontAwesomeIcon icon={faPersonPraying} size={150} id="praying" /></p>
            </div>
            <div className='about'>
                <div>
                    <h3 className='text-start' style={{ color: "#11150d", fontWeight: "900" }}>About</h3>
                    <p style={{ color: "#0a2d2e", marginLeft: "15px"}} className="text-start">Key Quotient is a minimalistic typing test, featuring many test modes, an account system to save your typing speed history and user configurable features like themes, a smooth caret and more.</p>
                </div>
                <div className='wordset'>
                    <h4 className='text-start' style={{ color: "#11150d" }}>Word Set</h4>
                    <p style={{ color: "#0a2d2e", marginLeft: "15px" }} className="text-start">By default, this website uses the most common 200 words in the English language to generate its tests.</p>
                </div>
                <div className='stats'>
                    <h4 className='text-start' style={{ color: "#11150d" }}>Stats</h4>
                    <ul className='text-start' style={{ color: "#0a2d2e", marginLeft: "15px" }}>
                        <li>
                            wpm - total amount of characters in the correctly typed words (including spaces), divided by 5 and normalised to 60 seconds.
                        </li>
                        <li>
                            raw wpm - calculated just like wpm, but also includes incorrect words.
                        </li>
                        <li>
                            acc - percentage of correctly pressed keys.
                        </li>
                        <li>
                            char - correct characters / incorrect characters. Calculated after the test has ended.
                        </li>
                    </ul>
                </div>

                <div className='result'>
                    <h4 className='text-start' style={{ color: "#11150d" }}>Results Screen</h4>
                    <p style={{ color: "#0a2d2e" , marginLeft: "15px", marginRight: "4px"}} className="text-start">After completing a test you will be able to see your wpm, raw wpm, accuracy, character stats and test info. You can also see a graph of your wpm and raw over the duration of the test. Remember that the wpm line is a global average, while the raw wpm line is a local, momentary value. (meaning if you stop, the value is 0)</p>
                </div>

                <div className='contact'>
                    <h3 className='text-start' style={{ color: "#11150d", fontWeight: "900" }}>Contact</h3>
                    <div className='row row-cols-sm-3 row-cols-md-6 row-cols-2 w-100 justify-content-around'>
                        <div className='col mb-2' style={{color: "#f7ebe7"}}>
                            <span><a target="_blank" style={{ textDecoration: "none" }} href="mailto:neerajreddy0059@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="ms-2 me-2" />Mail</a></span>
                        </div>
                        <div className='col mb-2'>
                            <span><a target="_blank" style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/neerajreddyk/"><FontAwesomeIcon icon={faLinkedin} className="ms-2 me-2" /> LinkedIn</a></span>
                        </div>
                        <div className='col mb-2'>
                            <span><a target="_blank" style={{ textDecoration: "none" }} href="https://www.instagram.com/neeraj_reddy__/"><FontAwesomeIcon icon={faInstagram} className="ms-2 me-2" /> Instagram</a></span>
                        </div>
                        <div className='col mb-2'>
                            <span><a target="_blank" style={{ textDecoration: "none" }} href="https://x.com/neeraj_reddy__"><FontAwesomeIcon icon={faTwitter} className="ms-2 me-2" />Twitter</a></span>
                        </div>

                        <div className='col mb-2'>
                            <span><a target="_blank" style={{ textDecoration: "none" }} href="https://github.com/NeerajReddyK"><FontAwesomeIcon icon={faGithub} className="ms-2 me-2" /> GitHub</a></span>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Info