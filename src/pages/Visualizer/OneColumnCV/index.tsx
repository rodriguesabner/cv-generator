import {Document, Font, Link, Page, PDFViewer, StyleSheet, Text, View} from '@react-pdf/renderer';
import Inter from "../../../assets/fonts/Inter/Inter-Regular.ttf";
import InterLight from "../../../assets/fonts/Inter/Inter-Light.ttf";
import InterMedium from "../../../assets/fonts/Inter/Inter-Medium.ttf";
import InterSemiBold from "../../../assets/fonts/Inter/Inter-SemiBold.ttf";
import InterBold from "../../../assets/fonts/Inter/Inter-Bold.ttf";
import {useAppSelector} from "../../../store/hooks";
import {
    getHobbies,
    getLanguages,
    getPersonalInfo,
    getProfessionalHistory,
    getProfessionalSummary,
    getSkills,
    getWebsites
} from "../../../store/reducers/cv.reducer";
import * as Constants from "../../../common/constants";

// Registro de fontes
Font.register({
    family: 'Inter', fonts: [
        {src: Inter},
        {src: InterLight, fontWeight: 300},
        {src: InterMedium, fontWeight: 500},
        {src: InterSemiBold, fontWeight: 600},
        {src: InterBold, fontWeight: 700},
    ]
});

const OneColumnCV = () => {
    const personalInfo = useAppSelector(getPersonalInfo)
    const professionalSummary = useAppSelector(getProfessionalSummary)
    const professionalHistory = useAppSelector(getProfessionalHistory)
    const websites = useAppSelector(getWebsites)
    const skills = useAppSelector(getSkills)
    const languages = useAppSelector(getLanguages)
    const hobbies = useAppSelector(getHobbies)

    const styles = StyleSheet.create({
        page: {
            paddingTop: 80,
            paddingBottom: 80,
            paddingLeft: 40,
            paddingRight: 40,
            fontFamily: 'Inter',
            color: '#333',
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
        },
        squares: {
            flexDirection: 'row',
            gap: 4,
            marginRight: 10,
        },
        square: {
            width: 12,
            height: 12,
            backgroundColor: '#FF5733',
        },
        fullname: {
            fontSize: 18,
            fontWeight: 400,
            color: '#333333',
        },
        contactRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 10,
            color: '#333',
            marginTop: 8,
        },
        sectionTitle: {
            fontSize: 12,
            fontWeight: 600,
            marginTop: 20,
            marginBottom: 8,
            color: '#333',
            textTransform: 'uppercase',
        },
        sectionText: {
            fontSize: 10,
            lineHeight: 1.5,
            color: '#555',
        },
        experienceItem: {
            marginBottom: 12,
        },
        companyPosition: {
            fontSize: 10,
            fontWeight: 600,
            color: '#444444',
            marginBottom: 2,
        },
        dateText: {
            fontSize: 9,
            color: '#777777',
            marginBottom: 4,
        },
        bulletPoint: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: 3,
        },
        bulletText: {
            fontSize: 10,
            marginLeft: 5,
            color: '#555',
        },
        contact: {
            color: '#555',
        }
    });

    return (
        <PDFViewer style={{minHeight: '100%', width: '100%'}}>
            <Document>
                <Page size="A4" style={styles.page}>
                    {/* Header com nome e contato */}
                    <View style={styles.header}>
                        {/* Três quadradinhos antes do nome */}
                        <View style={styles.squares}>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                        </View>
                        <Text style={styles.fullname}>{personalInfo.firstName} {personalInfo.lastName}</Text>
                    </View>

                    {/* Linha com website, email e localização */}
                    <View style={styles.contactRow}>
                        <Link style={styles.contact} src={personalInfo.website}>
                            {websites[0].url}
                        </Link>
                        <Link style={styles.contact} src={`mailto:${personalInfo.email}`}>
                            {personalInfo.email}
                        </Link>
                        <Text style={styles.contact}>{personalInfo.city}, {personalInfo.country}</Text>
                    </View>

                    {/* Seção de Perfil */}
                    <View>
                        <Text style={styles.sectionTitle}>Profile</Text>
                        <Text style={styles.sectionText}>{professionalSummary.description}</Text>
                    </View>

                    {/* Histórico Profissional */}
                    <View>
                        <Text style={styles.sectionTitle}>Experience</Text>
                        {professionalHistory.map((item, index) => (
                            <View key={index} style={styles.experienceItem}>
                                <Text style={styles.companyPosition}>{item.company} - {item.position}</Text>
                                <Text style={styles.dateText}>{item.startDate} - {item.endDate}</Text>
                                <Text style={styles.sectionText}>{item.description}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Educação */}
                    <View>
                        <Text style={styles.sectionTitle}>Education</Text>
                        <View style={{marginBottom: 8}}>
                            <Text style={styles.sectionText}>Faculdade Anhembi Morumbi, São Paulo, Brasil - Análise e
                                Desenvolvimento de Sistemas</Text>
                            <Text style={styles.sectionText}>Cursando</Text>
                            <Text style={styles.dateText}>07/2024</Text>
                        </View>
                    </View>

                    {/* Referências */}
                    <View>
                        <Text style={styles.sectionTitle}>Languages</Text>
                        {languages.map((ref, index) => (
                            <View key={index} style={styles.bulletPoint}>
                                <Text style={styles.sectionText}>
                                    {ref.language} ({Constants.LEVEL_LANGUAGE[ref.level as keyof typeof Constants.LEVEL_LANGUAGE]})
                                </Text>
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>References</Text>
                        {websites.map((ref, index) => (
                            <View key={index} style={styles.bulletPoint}>
                                <Text style={styles.bulletText}>• {ref.title}</Text>
                                <Link style={styles.bulletText} src={ref.url}>{ref.url}</Link>
                            </View>
                        ))}
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default OneColumnCV;
