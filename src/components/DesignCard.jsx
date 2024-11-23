const DesignCard = (props) => {

    return (

        <div style={{backgroundImage: `url('/${props.img}')`}}
             className={` h-[477px] flex flex-col justify-end bg-cover bg-center ${props.index === 0 ? 'text-black' : 'text-white'} rounded-[12px] p-[25px] flex-1`}>
            <h3 className='text-[44px] leading-[57px] font-[700] '>{props.title}</h3>
            <p className='inter text-[18px] leading-[27px] mb-[14px] mt-[14px] font-[500]'>{props.desc}</p>

        </div>)
}

export default DesignCard;