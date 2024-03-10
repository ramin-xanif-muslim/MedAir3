import { useInView } from "react-intersection-observer";
import { Box, VStack } from "@chakra-ui/react";

import styles from "./styles.module.css";
import Navigation from "./shared/components/Navigation";
import Buttons from "./shared/components/Buttons";
import ProfilePatientForm from "../../components/ProfilePatientForm";
import PersonInfo from "../PersonInfo";
import DiseaseHistory from "../DiseaseHistory";
import Visits from "../Visits";
import Analysis from "../Analysis";
import Treatment from "../Treatment";

const ProfilePage = () => {
    const { ref: refPatient, inView: inViewPatient } = useInView();
    const { ref: refPersonInfo, inView: inViewPersonInfo } = useInView();
    const { ref: refDiseaseHistory, inView: inViewDiseaseHistory } =
        useInView();
    const { ref: refVisits, inView: inViewVisits } = useInView();
    const { ref: refAnalysis, inView: inViewAnalysis } = useInView();
    const { ref: refTreatment, inView: inViewTreatment } = useInView();
    return (
        <Box scrollSnapAlign="center" className={styles.container}>
            <VStack h="25px" bg="pink.200" className={styles.header}>
                <Navigation
                    inViewPatient={inViewPatient}
                    inViewPersonInfo={inViewPersonInfo}
                    inViewDiseaseHistory={inViewDiseaseHistory}
                    inViewVisits={inViewVisits}
                    inViewAnalysis={inViewAnalysis}
                    inViewTreatment={inViewTreatment}
                />
            </VStack>
            <Buttons />
            <section className={styles.section} ref={refPatient}>
                <hr />
                <h2 id="Patient">Patient</h2>
                <ProfilePatientForm />
            </section>
            <section className={styles.section} ref={refPersonInfo}>
                <hr />
                <h2 id="PersonInfo">Person Info</h2>
                <PersonInfo />
            </section>
            <section className={styles.section} ref={refDiseaseHistory}>
                <hr />
                <h2 id="DiseaseHistory">Disease History</h2>
                <DiseaseHistory />
            </section>
            <section className={styles.section} ref={refVisits}>
                <hr />
                <h2 id="Visits">Visits</h2>
                <Visits />
            </section>
            <section className={styles.section} ref={refAnalysis}>
                <hr />
                <h2 id="Analysis">Analysis</h2>
                <Analysis />
            </section>
            <section className={styles.section} ref={refTreatment}>
                <hr />
                <h2 id="Treatment">Treatment</h2>
                <Treatment />
            </section>
        </Box>
    );
};

export default ProfilePage;
