import Card from "../Card.jsx";

const Cards = () => {

    return (<section id='cards'>
            <h2>🚀 Uzdignite svoje <span>Digitalno Prisustvo</span> na nove visine 🚀</h2>
            <p className='desc'>We understand the dynamic landscape of the digital world and provide cutting-edge
                solutions to take your
                business to new heights. Whether you`re a startup looking to make an impact or an established brand
                looking to redefine your online presence, we have the expertise, creativity and passion to make it
                happen.</p>

            <div className='cards-wrapper flex gap-6'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>

    )
}

export default Cards