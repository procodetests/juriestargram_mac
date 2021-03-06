import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";
import PhotoDisplay from "components/PhotoDisplay";


const Search = (props, context) => {
    return (
        <div className={styles.search}>
            <div className={styles.section}>
                <h4 className={styles.title}>{context.t("사람 찾기")}</h4>
                {props.loading && <Loading />}
                {!props.loading &&
                    props.userList.length < 1 && (
                        <NotFound text={context.t("Nothing found :(")} />
                    )}
                <div className={styles.content}>
                    {!props.loading &&
                        props.userList.length > 0 && (
                            <RenderUserSearch userList={props.userList} />
                        )}
                </div>
            </div>
            <div className={styles.section}>
                <h4 className={styles.title}>{context.t("둘러보기")}</h4>
                {props.loading && <Loading />}
                {!props.loading &&
                    props.imageList.length < 1 && (
                        <NotFound text={context.t("Nothing found :(")} />
                    )}
                <div className={styles.content}>
                    {!props.loading &&
                        props.imageList.length > 0 && (
                            <RenderImageSearch imageList={props.imageList} />
                        )}
                </div>
            </div>
        </div>
    );
};

const RenderUserSearch = props =>
    props.userList.map(user => (
        <UserDisplay vertical={true} user={user} key={user.id} />
    ));

const RenderImageSearch = props =>
    props.imageList.map(photo => <PhotoDisplay photo={photo} key={photo.id} />);

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

Search.contextTypes = {
    t: PropTypes.func.isRequired
};

Search.propTypes = {
    loading: PropTypes.bool.isRequired,
    feed: PropTypes.array
}



export default Search;