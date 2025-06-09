const Social = (props) => {
    return (
        <>
            <a href={props.social_link} target="_blank"><img src={props.social_icon} alt={props.social_name} />{props.social_name}</a>
        </>
    )
}

export default Social