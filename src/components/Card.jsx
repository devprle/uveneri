const Card = (props) => {

    return (

        <div className='feature-card bg-[#F1F1F1] text-black rounded-[12px] p-[25px]'>
            <img src={props.img} className='w-[118px] mb-[24px]' alt={`uveneri-${props.index}`}/>
            <h3 className='text-[44px] leading-[57px] font-[700] '>{props.title}</h3>
            <p className='inter text-[18px] leading-[27px] mb-[14px] mt-[14px]'>{props.desc}</p>
            <a className='text-white text-center flex items-center justify-center rounded-[33px] w-[322px] h-[44px] text-[24px] font-[700] bg-[#9B51E0]'
               href={props.link}>Saznaj Više</a>
        </div>)
}

export default Card;