import './AboutMe.css'

function AboutMe() {

    return (
        <div className='about-me-container'>
            <IdCard />
        </div>
    );
}

function IdCard() {

    return (
        <div className='card'>
            <img className='york-logo' src='https://d3gec4yjx788g8.cloudfront.net/platform/70067/assets/logo.png' />
            <img className='building-bar' src='https://euc.yorku.ca/wp-content/uploads/2021/06/vari-drone.jpg' />
            <img className='id-photo'/>
            <span>
                <p><b>Luca Mazzotta</b></p>
                <p>Computer Science</p>
            </span>
        </div>
    )
}

export default AboutMe;