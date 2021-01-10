import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Link } from 'react-router-dom';
import '../Styles/MediaCard.css'

export function MediaCard(props) {

    const rendering = () => {
        if (props.APOD) {
            const { title, url, media_type, explanation } = props.APOD
            return (
                <div className='home-container' >
                    <h1 className='home-title' >{title}</h1>
                    <div>
                        {media_type === 'video' ?
                            <iframe className='home-video' src={url} /> :
                            <img className='home-image' src={url} alt="" />
                        }
                    </div>
                    <div className='container-home-p' >
                        <p className='home-p' >
                            {explanation}
                        </p>
                    </div>
                </div>
            )
        } else if (props.input) {
            const { searchData, addToFavorite } = props

            return (
                <div className="search-container" >
                    {searchData.map(star => {
                        return (
                            <div className='search-content-container'>
                                <h2 className="search-title">{star.title}</h2>
                                <img className='search-image' src={star.imgURL} alt='' />
                                <div className='search-button-container' >
                                    <span className='search-button' onClick={() => addToFavorite(star)}><ThumbUpIcon /></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else if (props.favoriteImages) {
            const { favoriteImages, removeFromFavorites } = props
            return (
                <div className="favorites-container">
                    {favoriteImages.map(favImage => {
                        return (
                            <div className="favorite-content">
                                <h2 className="favorite-title">
                                    {favImage.title}
                                </h2>
                                <Link to={`/favorites/${favImage._id}`} >
                                    <img className="favorite-image" onClick={() => {}} src={favImage.imgURL} alt="" />
                                </Link>
                                <div className="favorite-button">
                                    <span onClick={() => removeFromFavorites(favImage._id)}><ThumbDownIcon /></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }else if(props.favoriteImage){
            const {title, description, imgURL} = props.favoriteImage
            return (
                <div className="favorite-image-container">
                        <h2 className="favorite-image-title">
                            {title}
                        </h2>

                        <div>
                            <img className="favorite-image-content" src={imgURL} alt="" />
                        </div>

                        <div className='container-descreption-p' >
                            <p className='image-description'>
                                {description}
                            </p>
                        </div>
                </div>
            )
            
        } else {
            <div>null</div>
        }
    }




    return (
        <div>
            {rendering()}
        </div>
    )
}