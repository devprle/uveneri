import DizajnUslugeTitle from "../../assets/svg/DizajnUslugeTitle.jsx";
import DesignCard from "../DesignCard.jsx";


const DizajnUsluge = () => {
    const designCards = [{
        title: 'Print Dizajn',
        desc: 'Dizajn Ambalaža, logoa, reklama, kreacija mockupova, formiranje brend identiteta',
        img: 'src/assets/png/digitalni-dizajn-1.png'
    }, {
        title: 'Digitalni Dizajn',
        desc: 'Dizajn objava za društvene mreže, Dizajn Sajtova, Animacija, Dizajn Aplikacija, Dizajn banera za društvene mreže',
        img: 'src/assets/png/digitalni-dizajn-2.png'
    }]

    return (<section id='dizajn-sluge' className='py-[124px]'>
            <div className="container  flex flex-col gap-[64px]">
                <DizajnUslugeTitle/>
                <div className="flex gap-[25px]">
                    {designCards.map((card, index) => {
                        return <DesignCard key={index} index={index} title={card.title} desc={card.desc}
                                           img={card.img}/>
                    })}
                </div>
                <a className='text-white py-[9px] px-[53px] m-auto items-center justify-center rounded-[33px]  text-[24px] font-[700] bg-[#9B51E0]'
                   href='#'>Stupi U Kontakt Sa Dizajnerom</a>
            </div>
        </section>

    )
}

export default DizajnUsluge