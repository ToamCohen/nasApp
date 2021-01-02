import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Link } from 'react-router-dom';

export function MediaCard(props) {


    const rendering = () => {
        if (props.APOD) {
            const { title, url, media_type, explanation } = props.APOD
            return (
                <div>
                    <h1>{title}</h1>
                    <div>
                        {media_type === 'video' ?
                            <iframe src={url} /> :
                            <img src={url} alt="" />
                        }
                    </div>
                    <div>{explanation}</div>
                </div>
            )
        } else if (props.input) {
            const { searchData, addToFavorite } = props

            return (
                <div>
                    {searchData.map(star => {
                        return (
                            <div>
                                <h2>{star.title}</h2>
                                <img src={star.imgURL} />
                                <div>
                                    <button onClick={() => addToFavorite(star)}><ThumbUpIcon /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        } else if (props.favoriteImages) {
            const { showDetails, favoriteImages, removeFromFavorites } = props
            return (
                <div>
                    {favoriteImages.map(favImage => {
                        return (
                            <div>
                                <h2>
                                    {favImage.title}
                                </h2>
                                <Link to={`/favorites/${favImage._id}`} >
                                    <img onClick={()=> showDetails(favImage)} src={favImage.imgURL} alt="" />
                                </Link>
                                <div>
                                    <button onClick={() => removeFromFavorites(favImage._id)}><ThumbDownIcon /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }else {
            <div>null</div>
        }
    }




    return (
        <div>
            {rendering()}
        </div>
    )
}