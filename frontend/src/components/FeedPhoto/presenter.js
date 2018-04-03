import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";



const FeedPhoto = (props, context) => {
    return (
        <div className={styles.feedPhoto}>
            <header className={styles.header}>
                <img 
                    src={props.creator.profile_image || require("images/noPhoto.jpg")} 
                    alt={props.creator.username} 
                    className={styles.image}
                />
                <div className={styles.headerColumn}>
                    <span className={styles.creator}>{props.creator.username}</span>
                    <span className={styles.location}>{props.location}</span>
                </div>
            </header>
            <img src={props.file} alt={props.caption} />
            <div>
                <PhotoActions number={props.like_count} />
            </div>
        </div>
    )
}

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            creator: PropTypes.shape({
                profile_image: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired
            }),
            message: PropTypes.string.isRequired
        })
    ),
    created_at: PropTypes.string.isRequired
}


export default FeedPhoto;