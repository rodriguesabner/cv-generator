import {Page, Text, View, Document, StyleSheet, PDFViewer, Font, Link, Line} from '@react-pdf/renderer';
import Inter from "../../../assets/fonts/Inter/Inter-Regular.ttf"
import InterMedium from "../../../assets/fonts/Inter/Inter-Medium.ttf"
import InterLight from "../../../assets/fonts/Inter/Inter-Light.ttf"
import InterSemiBold from "../../../assets/fonts/Inter/Inter-SemiBold.ttf"
import InterBold from "../../../assets/fonts/Inter/Inter-Bold.ttf"
import {useAppSelector} from '../../../store/hooks';
import {
    getHobbies,
    getLanguages,
    getPersonalInfo,
    getProfessionalHistory,
    getProfessionalSummary,
    getSkills,
    getWebsites
} from '../../../store/reducers/cv.reducer';
import * as Constants from "../../../common/constants"

// Assume we have these hooks and functions imported
// import { useAppSelector } from '../store/hooks';
// import { getHobbies, getLanguages, getPersonalInfo, getProfessionalHistory, getProfessionalSummary, getSkills, getWebsites } from '../store/reducers/cv.reducer';
// import * as Constants from "../common/constants"

const GradientResume = () => {
    // Assume we're getting this data from Redux store
    const personalInfo = {
        firstName: 'John',
        lastName: 'Doe',
        title: 'Full Stack Developer',
        city: 'New York',
        country: 'USA',
        phoneNumber: '+1 234 567 8900',
        email: 'john.doe@example.com'
    };
    const professionalSummary = {description: 'Experienced full stack developer with 5+ years of experience in React, Node.js, and Python. Passionate about creating efficient and scalable web applications.'};
    const professionalHistory = [
        {
            company: 'Tech Co',
            position: 'Senior Developer',
            startDate: 'Jan 2020',
            endDate: 'Present',
            description: 'Led a team of 5 developers in creating a new e-commerce platform.'
        },
        {
            company: 'Web Solutions Inc',
            position: 'Full Stack Developer',
            startDate: 'Jun 2017',
            endDate: 'Dec 2019',
            description: 'Developed and maintained multiple client websites using React and Node.js.'
        }
    ];
    const websites = [{title: 'GitHub', url: 'https://github.com/johndoe'}, {
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/johndoe'
    }];
    const skills = ['React', 'Node.js', 'Python', 'SQL', 'Git'];
    const languages = [{language: 'English', level: 'native'}, {language: 'Spanish', level: 'intermediate'}];
    const hobbies = {description: 'Photography, hiking, and playing guitar'};

    Font.register({
        family: 'Inter', fonts: [
            {src: Inter},
            {src: InterLight, fontWeight: 300},
            {src: InterMedium, fontWeight: 500},
            {src: InterSemiBold, fontWeight: 600},
            {src: InterBold, fontWeight: 700},
        ]
    });

    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter',
            color: '#262B33',
            padding: 30,
            backgroundColor: '#d9e2ec',
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        leftContainer: {
            width: '65%',
            display: 'flex',
            flexDirection: 'column',
        },
        rightContainer: {
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
        },
        section: {
            marginBottom: 20,
        },
        fullname: {
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 5,
        },
        title: {
            fontSize: 16,
            fontWeight: 500,
            marginBottom: 20,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 10,
        },
        contentText: {
            fontSize: 12,
            lineHeight: 1.5,
        },
        jobTitle: {
            fontSize: 14,
            fontWeight: 600,
        },
        dateText: {
            fontSize: 10,
            color: '#4a5568',
            marginBottom: 5,
        },
        link: {
            color: '#3182ce',
            textDecoration: 'none',
        },
    });

    return (
        <PDFViewer style={{minHeight: '100%', width: '100%'}}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.fullname}>{personalInfo.firstName} {personalInfo.lastName}</Text>
                        <Text style={styles.title}>{personalInfo.title}</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Professional Summary</Text>
                                <Text style={styles.contentText}>{professionalSummary.description}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Professional History</Text>
                                {professionalHistory.map((job, index) => (
                                    <View key={index} style={{marginBottom: 15}}>
                                        <Text style={styles.jobTitle}>{job.position} at {job.company}</Text>
                                        <Text style={styles.dateText}>{job.startDate} - {job.endDate}</Text>
                                        <Text style={styles.contentText}>{job.description}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Details</Text>
                                <Text style={styles.contentText}>{personalInfo.city}, {personalInfo.country}</Text>
                                <Text style={styles.contentText}>{personalInfo.phoneNumber}</Text>
                                <Link src={`mailto:${personalInfo.email}`}
                                      style={[styles.contentText, styles.link]}>{personalInfo.email}</Link>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Links</Text>
                                {websites.map((site, index) => (
                                    <Link key={index} src={site.url}
                                          style={[styles.contentText, styles.link]}>{site.title}</Link>
                                ))}
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Skills</Text>
                                {skills.map((skill, index) => (
                                    <Text key={index} style={styles.contentText}>{skill}</Text>
                                ))}
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Languages</Text>
                                {languages.map((lang, index) => (
                                    <Text key={index} style={styles.contentText}>{lang.language} ({lang.level})</Text>
                                ))}
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Hobbies</Text>
                                <Text style={styles.contentText}>{hobbies.description}</Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default GradientResume;
