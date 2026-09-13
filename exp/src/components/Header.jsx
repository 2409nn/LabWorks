
const Header = (props) => {

    const { children } = props;

    return (
        <div className='student-card__header'>
            <p className="student-card__name">{children}</p>
        </div>
    )
}

export default Header;