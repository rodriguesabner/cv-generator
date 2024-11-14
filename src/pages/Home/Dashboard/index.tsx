import React, { useState } from 'react'
import styled from 'styled-components'
import { Sparkles, User, FileText, Download, Settings, LogOut } from 'lucide-react'

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

const Sidebar = styled.aside`
  width: 250px;
  background-color: #f3f4f6;
  padding: 1rem;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const NavItem = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: ${props => props.active ? '#6366f1' : 'inherit'};
  background-color: ${props => props.active ? '#e0e7ff' : 'transparent'};
  border-radius: 0.25rem;
  &:hover {
    background-color: #e0e7ff;
  }
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background-color: #5558e3;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('dashboard')

    return (
        <DashboardContainer>
            <Sidebar>
                <Logo>
                    <Sparkles />
                    ResumeAI
                </Logo>
                <nav>
                    <NavItem href="#" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>
                        <User size={18} />
                        Dashboard
                    </NavItem>
                    <NavItem href="#" active={activeTab === 'resumes'} onClick={() => setActiveTab('resumes')}>
                        <FileText size={18} />
                        Meus Currículos
                    </NavItem>
                    <NavItem href="#" active={activeTab === 'templates'} onClick={() => setActiveTab('templates')}>
                        <FileText size={18} />
                        Templates
                    </NavItem>
                    <NavItem href="#" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
                        <Settings size={18} />
                        Configurações
                    </NavItem>
                    <NavItem href="#">
                        <LogOut size={18} />
                        Sair
                    </NavItem>
                </nav>
            </Sidebar>
            <MainContent>
                <Header>
                    <Title>Dashboard</Title>
                    <Button>
                        <FileText size={18} />
                        Novo Currículo
                    </Button>
                </Header>
                <Grid>
                    <Card>
                        <CardTitle>Sugestões de Melhoria</CardTitle>
                        <List>
                            <ListItem>Adicione mais conquistas quantificáveis</ListItem>
                            <ListItem>Inclua palavras-chave relevantes para sua área</ListItem>
                            <ListItem>Atualize sua experiência mais recente</ListItem>
                        </List>
                    </Card>
                    <Card>
                        <CardTitle>Análise de Compatibilidade</CardTitle>
                        <p>Seu currículo é 85% compatível com as vagas de Desenvolvedor React</p>
                        <Button style={{ marginTop: '1rem' }}>Ver Detalhes</Button>
                    </Card>
                    <Card>
                        <CardTitle>Currículos Recentes</CardTitle>
                        <List>
                            <ListItem>Desenvolvedor Frontend - Atualizado há 2 dias</ListItem>
                            <ListItem>UX Designer - Atualizado há 1 semana</ListItem>
                        </List>
                        <Button style={{ marginTop: '1rem' }}>
                            <Download size={18} />
                            Exportar
                        </Button>
                    </Card>
                    <Card>
                        <CardTitle>Feedback de Legibilidade</CardTitle>
                        <p>Seu currículo atual tem uma pontuação de legibilidade de 8/10</p>
                        <Button style={{ marginTop: '1rem' }}>Melhorar Legibilidade</Button>
                    </Card>
                </Grid>
            </MainContent>
        </DashboardContainer>
    )
}
