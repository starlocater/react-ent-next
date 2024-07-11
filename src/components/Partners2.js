const Partners2 = () => {
  return (
    <div className="w-full h-2/5 mt-32 flex justify-center align-middle">
        <div className="w-full h-full flex-col justify-start items-center">
            <div className="flex flex-row justify-center items-center">
              <p className="text-white font-jersey text-6xl text-center">Partners</p>
              <img src="/images/partners/icon/partner_icon_sample_1.gif" alt="icon_1" className="w-20 h-auto"></img>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-8 gap-y-32 align-middle place-items-center justify-center">            
                <img className="object-contain" src="/images/partners/partner_sample_1.png" alt="partner_1"></img>
                <img className="object-contain" src="/images/partners/partner_sample_2.jpg" alt="partner_2"></img>
                <img className="object-contain" src="/images/partners/partner_sample_3.png" alt="partner_3"></img>
                <img className="object-contain" src="/images/partners/partner_sample_4.png" alt="partner_4"></img> 
                <img className="object-contain mb-4" src="/images/partners/partner_sample_5.png" alt="partner_5"></img> 

            </div>

        </div>

    </div>
  )
}
export default Partners2