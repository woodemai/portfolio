import { Dialog, DialogContent, DialogTrigger } from '@/shared/components/ui/dialog'
import { FC } from 'react'

type Props = {
    image: string,
}

const ImageDialog: FC<Props> = ({ image }) => {
    return (
        <Dialog>
            <DialogTrigger asChild className='cursor-pointer w-full'>
                <img src={image} alt='screenshot' width={300} />
            </DialogTrigger>
            <DialogContent className='p-0'>
                <img src={image} alt='screenshot full-screen' />
            </DialogContent>
        </Dialog>
    )
}

export default ImageDialog