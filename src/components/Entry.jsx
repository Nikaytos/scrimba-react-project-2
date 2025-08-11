import marker from '../assets/marker.svg'

export default function Entry(props) {
    const {img, title, country, googleMapsLink, dates, text} = props;

    return (
        <article className="location">
            <img
                src={img.src}
                className='location-image'
                alt={img.alt}
            />
            <div className='location-info'>
                <img src={marker} className='location-marker' alt='location marker'/>
                <span className='country-name'>{country}</span>
                <a
                    className='url-to-maps'
                    href={googleMapsLink}
                >
                    View on Google Maps
                </a>
                <h2 className='location-name'>{title}</h2>
                <p className='location-date'>{dates}</p>
                <p className='location-description'>{text}</p>
            </div>
        </article>
    )
}