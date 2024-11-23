import Card from "../Card.jsx";

const Cards = () => {

    const cards = [{
        img: 'src/assets/png/feature1.png',
        title: 'Digitalni & Print Dizajn ',
        desc: 'No afterwork paperwork, no computer needed. All on Mobile Phone.',
        link: '#'
    }, {
        img: 'src/assets/png/feature2.png',
        title: 'Web & App Development',
        desc: 'No afterwork paperwork, no computer needed. All on Mobile Phone.',
        link: '#'

    }, {
        img: 'src/assets/png/feature3.png',
        title: 'Marketing & Management',
        desc: 'No afterwork paperwork, no computer needed. All on Mobile Phone.',
        link: '#'

    }]

    return (<section className='py-[200px]' id='cards'>
            <h2 className='text-center'>🚀 Uzdignite svoje <span>Digitalno Prisustvo</span> na nove visine 🚀</h2>
            <p className='desc'>We understand the dynamic landscape of the digital world and provide cutting-edge
                solutions to take your
                business to new heights. Whether you`re a startup looking to make an impact or an established brand
                looking to redefine your online presence, we have the expertise, creativity and passion to make it
                happen.</p>

            <div className='cards-wrapper flex gap-6'>
                {cards.map((card, index) => {
                    return <Card key={index} index={index} title={card.title} desc={card.desc} img={card.img} link={card.link}/>
                })}

            </div>
        </section>

    )
}

export default Cards