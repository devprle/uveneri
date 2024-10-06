import UveneriHeroLogo from "../assets/svg/UveneriHeroLogo.jsx";

const Hero = () => {

    return (<section id='hero' className='max-w-full'>
        <UveneriHeroLogo/>
        <UveneriHeroLogo/>
        <div className='hero-text'>
            <p>U brzom svetu digitalne evolucije, biti korak ispred nije samo opcija - već neophodnost</p>
            <div className='flex gap-8'>
                <a className='btn btn-orange' href="#kontakt">Kontakt</a>
                <a className='btn btn-transparent' href="#o-nama">O nama</a>
            </div>
        </div>
        <UveneriHeroLogo/>
    </section>)
}

export default Hero