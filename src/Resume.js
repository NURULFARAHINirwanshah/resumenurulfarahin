import React, { Component } from 'react';
import pict from './img/nufa.jpeg';

import {Header, Image, Divider, Grid, Segment, List, Item} from 'semantic-ui-react';


class Resume extends Component {
    render() {
    
    const name = "N U R U L    F A R A H I N \nI R W A N    S H A H"
    
    return (
	<div id="printable">
    <Header as='h1'> {name} </Header>

    <Grid className='thegrid'>
        <Grid.Column width={6} style={{backgroundColor:'#584158', 'margin-top':'15px'}}>
            <Image src={pict} size='small' circular />

            <Header as='h5' className='header1'>
            <Header.Content>CAREER OBJECTIVE
                <Header.Subheader as='p' className='content1'>To work in a learning and challenging environment, utilizing my skills and knowledge to be the best of my abilities and contribute positively to my personal growth as well as the growth of the organization.</Header.Subheader>
            </Header.Content>
            </Header>

             <Header as='h5' className='header1'>PERSONAL INFORMATION</Header>
                <List className='subcontent1'>
                <List.Item className='content1'>
                    <List.Content>26 Years Old</List.Content>
                    <List.Content>Female</List.Content>
                    <List.Content>Single</List.Content>
                </List.Item>
                <List.Item style={{'margin-top':'5px'}}>
                    <List.Icon name='phone'/>
                    <List.Content>+60142755900</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail'/>
                    <List.Content>nurulfarahin95@yahoo.com</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='home'/>
                    <List.Content>No. 50, Jalan Belinjau 1, Taman Kota Jaya,
                    81900 Kota Tinggi, Johor.</List.Content>
                </List.Item>
                <List.Item style={{'margin-top':'5px'}}>
                    <List.Icon name='linkedin'/>
                    <List.Content><a href="https://www.linkedin.com/in/nurulfarahinirwanshah/" target="_black">linkedin.com/in/nurulfarahinirwanshah</a></List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='github'/>
                    <List.Content><a href="https://www.github.com/nurulfarahinirwanshah/" target="_black">github.com/nurulfarahinirwanshah</a></List.Content>
                </List.Item>
                </List>

            <Header as='h5' className='header1'>PROGRAMMING SKILLS</Header>
                <List className='content1'>
                <List.Item>
                    <List.Content style={{'word-spacing':'402px'}}>C++ Beginner</List.Content>
                    <List.Content style={{'word-spacing':'401px'}}>Java Beginner</List.Content>
                    <List.Content style={{'word-spacing':'370px'}}>JavaScript Beginner</List.Content>
                    <List.Content style={{'word-spacing':'400px'}}>PHP Beginner</List.Content>
                    <List.Content style={{'word-spacing':'402px'}}>CSS Beginner</List.Content>
                    <List.Content style={{'word-spacing':'398px'}}>XML Beginner</List.Content>
                    <List.Content style={{'word-spacing':'389px'}}>HTML Beginner</List.Content>
                </List.Item>
                </List>

            <Header as='h5' className='header1'>SOFTWARE SKILLS</Header>
                <List className='subcontent1'>
                <List.Item>
                    <List.Content className='subheader1'>Software Utilization</List.Content>
                    <List.Content>Eclipse, Packet Tracer, Android Studio, Postman,
                    Grafana Open Source, SharePoint, CA UIM</List.Content>
                    <List.Content className='subheader1'>Software Skills</List.Content>
                    <List.Content>Software Development Fundamentals & Process,
                    Software Testing, Software Documentation</List.Content>
                </List.Item>
                </List>

            <Header as='h5' className='header1'>SKILL HIGHLIGHTS</Header>
                <List className='content1'>
                <List.Item>
                    <List.Content>Analytical and problem solving skills</List.Content>
                    <List.Content>Ability to learn quickly</List.Content>
                    <List.Content>Good team player</List.Content>
                    <List.Content>Multitasker</List.Content>
                </List.Item>
                </List>

            <Header as='h5' className='header1'>AWARDS</Header>
                <List className='content1'>
                <List.Item>
                    <List.Content className='subheader1'>Anugerah Kecemerlangan Akademik & Kokurikulum
                    (Jabatan Teknologi Maklumat Dan Komunikasi) Sesi
                    Disember 2015</List.Content>
                    <p>Politeknik Premier Ungku Omar Ipoh Perak</p>
                    <List.Content className='subheader1'>Penuntut Keseluruhan Terbaik Kursus Asas Risik (S)
                    Siri 1/2016</List.Content>
                    <p>Rejimen 503 Askar Wataniah Ipoh Perak</p>
                </List.Item>
                </List>

            <Header as='h5' className='header1'>REFERENCES</Header>
                <List className='subcontent1'>
                <List.Item>
                    <List.Content className='subheader1'>Dr. Intan Ermahani binti A. Jalil</List.Content>
                    <List.Content>Senior Lecturer</List.Content>
                    <List.Content>Ground Floor (SE Wing), FTMK Building,
                    Universiti Teknikal Malaysia, Melaka.</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='phone'/>
                    <List.Content>+60192666973</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail'/>
                    <List.Content>ermahani@utem.edu.my</List.Content>
                </List.Item>
                <List.Item>
                    <List.Content className='subheader1'>Muhammad Syariman Azlan Tan</List.Content>
                    <List.Content>Head, SLM, Transaction</List.Content>
                    <List.Content>ICT & Digitalization</List.Content>
                    <List.Content>PETRONAS Refinery & Petrochemical Corporation 
                    Sdn Bhd (PRPC)</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='phone'/>
                    <List.Content>+60126393454</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail'/>
                    <List.Content>syariman.azlantan@petronas.com</List.Content>
                </List.Item>
                </List>
        </Grid.Column>

        <Grid.Column width={9} style={{backgroundColor:'white'}}>
            <Header as='h5' className='header2'>WORKING EXPERIENCE</Header>
                <List>
                    <List.Item className='subheader2'>
                        <List.Content>Trainee</List.Content>
                        <List.Content>PETRONAS Refinery & Petrochemical Corporation Sdn Bhd Pengerang, Johor</List.Content>
                        <List.Description className="desc2">09/2019 - 02/2020</List.Description></List.Item>
                        <List.Item>
                        <List bulleted className="bullets">
                            <List.Item>Develop dashboard to monitor network availability & server utilization using Grafana Open Source.</List.Item>
                            <List.Item>Assist Application Team in configuring SLM portlet to obtain application availability in CA UIM tools.</List.Item>
                            <List.Item>Enhance Service Management Teamsite Portal UI in Sharepoint platform.</List.Item>
                            <List.Item>Assist teammate in developing Data Flow Diagram for visualizing process flow.</List.Item>
                            <List.Item>Involved in the discussion with Team Leader to discuss ICT Operations Management areas.</List.Item>
                            <List.Item>Utilize Microsoft Excel to generate Service Performance report by using formula functions, pivot table & create dashboard for data presentation.</List.Item>
                        </List>
                    </List.Item>

                    <List.Item className='subheader2' style={{'margin-top':'10px'}}>
                        <List.Content>Trainee</List.Content>
                        <List.Content>Pejabat Pendidikan Daerah Kota Tinggi , Johor</List.Content>
                        <List.Description className="desc2">12/2014 - 04/2015</List.Description></List.Item>
                        <List.Item>
                        <List bulleted className="bullets">
                            <List.Item>Check computer hardware to ensure functionality.</List.Item>
                            <List.Item>Install and configure appropriate software.</List.Item>
                            <List.Item>Troubleshoot to diagnose and resolve problems.</List.Item>
                            <List.Item>Perform poster and video editing.</List.Item>
                        </List>
                    </List.Item>

                    <List.Item className='subheader2' style={{'margin-top':'10px'}}>
                        <List.Content>Retail Assistant</List.Content>
                        <List.Content>Kedai Rakyat 1 Malaysia Kota Tinggi, Johor</List.Content>
                        <List.Description className="desc2">03/2013 - 06/2013</List.Description></List.Item>
                        <List.Item>
                        <List bulleted className="bullets">
                            <List.Item>Maintain outstanding store condition.</List.Item>
                            <List.Item>Maintain a fully stocked store.</List.Item>
                            <List.Item>Keep up to date with product information.</List.Item>
                        </List>
                    </List.Item>

                    <List.Item className='subheader2' style={{'margin-top':'10px'}}>
                        <List.Content>Sales Assistant</List.Content>
                        <List.Content>Kedai Chapalang Kota Tinggi, Johor</List.Content>
                       <List.Description className="desc2">01/2013 - 03/2013</List.Description></List.Item>
                        <List.Item>
                        <List bulleted className="bullets">
                            <List.Item>Assist customers to help them find their needs.</List.Item>
                            <List.Item>Ensure stock levels are well maintained.</List.Item>
                            <List.Item>Keep up to date with product information.</List.Item>
                        </List>
                    </List.Item>
                </List>

            <Header as='h5' className='header2'>ACADEMIC BACKGROUND</Header>
                <List>
                    <List.Item className='subheader2'>
                        <List.Content>Universiti Teknikal Malaysia Melaka (UTeM)</List.Content>
                        <List.Content>Bachelor of Computer Science (Software Development) with Honors</List.Content>
                        <List.Description className="desc2">09/2016 - 02/2020</List.Description></List.Item>
                        <List.Item>
                        <List bulleted className="bullets">
                            <List.Item>Graduated CGPA: 3.50</List.Item>
                            <List.Item>Dean list in semester 3, 4, 5, 6 and 7</List.Item>
                            <List.Item>Member of the Indoor Rowing Club</List.Item>
                        </List>
                    </List.Item>

                    <List.Item className='subheader2' style={{'margin-top':'10px'}}>
                        <List.Content>Politeknik Premier Ungku Omar, Ipoh, Perak</List.Content>
                        <List.Content>Diploma of Information Technology (Network)</List.Content>
                        <List.Description className="desc2">06/2013 - 06/2016</List.Description></List.Item>
                        <List.Item>
                        <List bulleted className="bullets">
                            <List.Item>Graduated CGPA : 3.61</List.Item>
                            <List.Item>Dean list in every semester</List.Item>
                            <List.Item>Member of the Territorial Army Regiment 503</List.Item>
                        </List>
                    </List.Item>
                </List>

            <Header as='h5' className='header2'>EXTRA CURRICULAR</Header>
                <List>
                <List.Item className='subheader2'>
                    <List.Content>Kursus Jom JAVA! Teens@Coding 2018 (Facilitator)</List.Content>
                    <List.Description>Universiti Teknikal Malaysia Melaka</List.Description></List.Item>
                     <List.Item className='subheader2' style={{'margin-top':'5px'}}><List.Content>UTeM CISCO Skill Based Competition 2018</List.Content>
                    <List.Description>Universiti Teknikal Malaysia Melaka</List.Description></List.Item>
                    <List.Item className='subheader2' style={{'margin-top':'5px'}}><List.Content>Capture the Flag Competition 2018</List.Content>
                    <List.Description>Universiti Teknikal Malaysia Melaka</List.Description></List.Item>
                     <List.Item className='subheader2' style={{'margin-top':'5px'}}><List.Content>Sukan Antara Fakulti kali ke-12 UTeM (Indoor Rowing)</List.Content>
                    <List.Description>Universiti Teknikal Malaysia Melaka</List.Description></List.Item>
                     <List.Item className='subheader2' style={{'margin-top':'5px'}}><List.Content>Kursus Asas Risik Siri 1/2016</List.Content>
                    <List.Description>Rejimen 503 Askar Watananiah, Ipoh, Perak</List.Description></List.Item>
                     <List.Item className='subheader2' style={{'margin-top':'5px'}}><List.Content className=''>Pertandingan “Mobile Apps” Sempena Minggu CoT JTMK 2016</List.Content>
                    <List.Description>Politeknik Ungku Omar, Ipoh, Perak</List.Description></List.Item>
                     <List.Item className='subheader2' style={{'margin-top':'5px'}}><List.Content>Program “Malaysian Polytechnic Territorial Army Annual Camp” (MalPTAAC) Siri 10/2015</List.Content>
                    <List.Description>Politeknik Ungku Omar, Ipoh, Perak</List.Description></List.Item>
                     <List.Item className='subheader2' style={{'margin-top':'5px'}}><List.Content>Program “Malaysian Polytechnic Territorial Army Annual Camp” (MalPTAAC) Siri 9/2014</List.Content>
                    <List.Description>Politeknik Ungku Omar, Ipoh, Perak</List.Description>
                </List.Item>
                </List>

                <Header as='h5' className='header2'>PROJECTS</Header>
                <List>
                    <List.Item className='subheader2'>
                        <List.Content>Network Monitoring Dashboard using Grafana Open Source</List.Content>
                        <List.Content>PETRONAS Refinery & Petrochemical Corporation Sdn Bhd Pengerang, Johor</List.Content>
                        <List.Description className="desc2">Internship Project</List.Description>
                        </List.Item>
                        <List.Item>
                        <List.Content className="bullets">Network Monitoring Dashboard using Grafana Open Source is developed to monitor network availability and server utilization as to track the RTO to fulfill the SLA to the business. This will provide ease to user in monitoring the network and server utilization via a visualize graph.</List.Content>
                    </List.Item>

                    <List.Item className='subheader2' style={{'margin-top':'10px'}}>
                        <List.Content>MedReminder Apps</List.Content>
                        <List.Content>Universiti Teknikal Malaysia Melaka (UTeM)</List.Content>
                        <List.Description className="desc2">Final Year Project</List.Description>
                        </List.Item>
                        <List.Item>
                        <List.Content className="bullets">MedReminder is an android based applications that helps users to take their medicine on time. With implementation of QR scanner and notification alarm, user will be able to track their prescriptions and reminds them when it's time to take the medicine.</List.Content>
                    </List.Item>

                    <List.Item className='subheader2' style={{'margin-top':'10px'}}>
                    <List.Content>Web-Based Generic Learning Schedule for Tertiary Student</List.Content>
                        <List.Content>Universiti Teknikal Malaysia Melaka (UTeM)</List.Content>
                        <List.Description className="desc2">Workshop I</List.Description>
                        </List.Item>
                        <List.Item>
                        <List.Content className="bullets">Web-based Generic Learning Schedule for Tertiary Students is developed to assist tertiary student in managing their classes and personal activities with well-planned schedule. This will help students to improve their time management and they will be better able to work towards goals and achieve academic success.</List.Content>
                    </List.Item>

                    <List.Item className='subheader2' style={{'margin-top':'10px'}}>
                    <List.Content>Student Medical Background (SMedB) Checker Apps</List.Content>
                        <List.Content>Politeknik Ungku Omar, Ipoh, Perak</List.Content>
                        <List.Description className="desc2">Final Year Project</List.Description>
                        </List.Item>
                        <List.Item>
                        <List.Content className="bullets">Student's Medical Background (SMedB) Checker is an android based applications that will ease user to review student's medical information by scanning Barcode on student's metric card or manually enter their IC number if there is any accident happens. This apps also allow user to notify student's academic advisor or family members by triggering the emergency button.</List.Content>
                    </List.Item>
                </List>
        </Grid.Column>
    </Grid>

    </div>
    );
  }
}

export default Resume;
