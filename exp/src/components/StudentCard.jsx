import Header from "../components/Header";
import SkillBadge from "../components/SkillBadge"
import Footer from "../components/Footer";

const StudentCard = () => {

    const skills = ['Vue', 'React', 'JS'];

    return (
    <div className='student__card'>
        <Header> Iskanderious </Header>
        <SkillBadge skillsList={skills} />
        <Footer />
    </div>
    )
}

export default StudentCard