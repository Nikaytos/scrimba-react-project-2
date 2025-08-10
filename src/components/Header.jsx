import globe from '../assets/globe.svg'

export default function Header() {
    return (
        <header>
            <img src={globe} className='logo' alt='Globe' />
            <span className='title'>my travel journal.</span>
        </header>
    )
}