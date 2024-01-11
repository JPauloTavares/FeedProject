import PropTypes from 'prop-types';

export function Post (props) {
    return (
        <>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </>
    )
}

Post.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
