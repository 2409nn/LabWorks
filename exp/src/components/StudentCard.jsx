import Header from "../components/Header";
import SkillBadge from "../components/SkillBadge"
import Footer from "../components/Footer";
import "../assets/styles/card.css"

const StudentCard = (props) => {

    const skills = ['Vue', 'React', 'JS'];

    return (
    <div className='student-card'>
        <Header> {props.name} </Header>
        <SkillBadge skillsList={skills} />
        <Footer />
    </div>
    )
}

export default StudentCard