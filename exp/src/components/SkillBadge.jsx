const skillBadge = (props) => {

    const { skillsList } = props;

    return (
        <div className='student-card__skill-badge'>
            <h3 className='student-card__title'>--- Skills ---</h3>
            <ul>
                { skillsList.map(skill => <li key={skill}>{skill}</li>) }
            </ul>
        </div>
    )
}

export default skillBadge;