import globe from '../assets/globe.svg'

export default function Header() {
    return (
        <header>
            <img src={globe} className='logo' alt='Globe' />
            <h1 className='title'>my travel journal.</h1>
        </header>
    )
}