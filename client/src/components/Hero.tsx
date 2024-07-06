import { ReferModal } from './ReferModal'

export const Hero = () => {
    return (
        <div className='flex w-[600px] h-[300px] bg-[#EEF5FF] rounded-md mt-5'>
            <div className='w-1/2  h-full  '>
                <div className=' mt-5 text-4xl font-bold ml-10'>
                    <h1>
                        Let's Learn
                    </h1>
                    <h1>
                        and Earn
                    </h1>
                </div>
                <div className=' mt-5 ml-10 text-2xl'>
                    <h1>
                        Get a chance to win
                    </h1>
                    <h1 className='flex'>
                        up-to
                        <span className='ml-2 text-3xl font-medium text-[#1A73E8]'>Rs. 15,000</span>
                    </h1>
                </div>
                <div className='ml-10 mt-5'>
                    <ReferModal />
                </div>

            </div>
            <div className='w-1/2 h-full'>
                <img src="\public\heroimg.png" alt="" />
            </div>

        </div>
    )
}
