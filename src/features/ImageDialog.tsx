import { Dialog, DialogContent, DialogTrigger } from '@/shared/components/ui/dialog'
import { FC } from 'react'

type Props = {
    image: string,
}

const ImageDialog: FC<Props> = ({ image }) => {
    return (
        <Dialog>
            <DialogTrigger asChild className='cursor-pointer'>
                <img src={image} alt='image' width={300} />
            </DialogTrigger>
            <DialogContent className='p-0 w-full'>
                <img src={image} alt='image' className='w-full max-h-screen'/>
            </DialogContent>
        </Dialog>
    )
}

export default ImageDialog