import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <header className='w-full bg-white sticky top-0 z-50 shadow-lg'>
                <div className='flex items-center justify-center mx-auto'>
                    <div className='text-[20px]'>
                        <ul className='flex gap-7'>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'badge'}>Badge</Link>
                            </li>
                            <li>
                                <Link to={'accordion'}>Accordion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}
