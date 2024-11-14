import React, { useState } from 'react'
import styled from 'styled-components'
import { Sparkles, FileText, Check, X, ChevronDown, ChevronUp } from 'lucide-react'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

const Form = styled.form`
  margin-bottom: 2rem;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  resize: vertical;
`

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
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
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const ProgressBar = styled.div`
  height: 1.5rem;
  background-color: #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
`

const ProgressFill = styled.div<{ percentage: number }>`
  height: 100%;
  background-color: #6366f1;
  width: ${props => props.percentage}%;
  transition: width 0.5s ease-in-out;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
`

const MatchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`

const MatchIcon = styled.span<{ matched: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${props => props.matched ? '#34d399' : '#f87171'};
  color: white;
`

const Collapsible = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`

const CollapsibleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  background-color: #f3f4f6;
`

const CollapsibleContent = styled.div`
  padding: 1rem;
`

const ResumePreview = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`

export default function JobCompatibilityAnalysis() {
    const [jobDescription, setJobDescription] = useState('')
    const [compatibilityScore, setCompatibilityScore] = useState(0)
    const [keywordMatches, setKeywordMatches] = useState<{ keyword: string; matched: boolean }[]>([])
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        keywords: true,
        suggestions: true,
        resume: false,
    })

    const analyzeCompatibility = (e: React.FormEvent) => {
        e.preventDefault()
        setIsAnalyzing(true)

        // Simulando uma análise de IA (isso seria substituído por uma chamada real à API)
        setTimeout(() => {
            setCompatibilityScore(78)
            setKeywordMatches([
                { keyword: 'React', matched: true },
                { keyword: 'TypeScript', matched: true },
                { keyword: 'Node.js', matched: true },
                { keyword: 'GraphQL', matched: false },
                { keyword: 'AWS', matched: false },
            ])
            setSuggestions([
                'Adicione experiência com GraphQL ao seu currículo',
                'Destaque projetos que utilizaram AWS',
                'Inclua mais detalhes sobre suas realizações com React e TypeScript',
                'Considere adicionar uma seção de habilidades técnicas',
            ])
            setIsAnalyzing(false)
        }, 2000)
    }

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
    }

    return (
        <PageContainer>
            <Header>
                <Title>Análise de Compatibilidade com Vagas</Title>
            </Header>
            <Form onSubmit={analyzeCompatibility}>
                <TextArea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Cole aqui a descrição da vaga..."
                />
                <Button type="submit" disabled={isAnalyzing}>
                    {isAnalyzing ? 'Analisando...' : 'Analisar Compatibilidade'}
                    <Sparkles />
                </Button>
            </Form>
            {compatibilityScore > 0 && (
                <Grid>
                    <div>
                        <Card>
                            <CardTitle>Pontuação de Compatibilidade</CardTitle>
                            <ProgressBar>
                                <ProgressFill percentage={compatibilityScore} />
                            </ProgressBar>
                            <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>{compatibilityScore}% compatível</p>
                        </Card>
                        <Collapsible>
                            <CollapsibleHeader onClick={() => toggleSection('keywords')}>
                                <CardTitle>Correspondência de Palavras-chave</CardTitle>
                                {openSections.keywords ? <ChevronUp /> : <ChevronDown />}
                            </CollapsibleHeader>
                            {openSections.keywords && (
                                <CollapsibleContent>
                                    <List>
                                        {keywordMatches.map((match, index) => (
                                            <MatchItem key={index}>
                                                <MatchIcon matched={match.matched}>
                                                    {match.matched ? <Check size={16} /> : <X size={16} />}
                                                </MatchIcon>
                                                {match.keyword}
                                            </MatchItem>
                                        ))}
                                    </List>
                                </CollapsibleContent>
                            )}
                        </Collapsible>
                        <Collapsible>
                            <CollapsibleHeader onClick={() => toggleSection('suggestions')}>
                                <CardTitle>Sugestões de Melhoria</CardTitle>
                                {openSections.suggestions ? <ChevronUp /> : <ChevronDown />}
                            </CollapsibleHeader>
                            {openSections.suggestions && (
                                <CollapsibleContent>
                                    <List>
                                        {suggestions.map((suggestion, index) => (
                                            <ListItem key={index}>{suggestion}</ListItem>
                                        ))}
                                    </List>
                                </CollapsibleContent>
                            )}
                        </Collapsible>
                    </div>
                    <div>
                        <Collapsible>
                            <CollapsibleHeader onClick={() => toggleSection('resume')}>
                                <CardTitle>Seu Currículo Atual</CardTitle>
                                {openSections.resume ? <ChevronUp /> : <ChevronDown />}
                            </CollapsibleHeader>
                            {openSections.resume && (
                                <CollapsibleContent>
                                    <ResumePreview>
                                        <h2>João Silva</h2>
                                        <p>Desenvolvedor Full Stack</p>
                                        <h3>Experiência</h3>
                                        <p>Empresa XYZ - Desenvolvedor Senior</p>
                                        <ul>
                                            <li>Desenvolvimento de aplicações web com React e Node.js</li>
                                            <li>Implementação de APIs RESTful</li>
                                        </ul>
                                        <h3>Habilidades</h3>
                                        <p>JavaScript, React, Node.js, TypeScript, SQL</p>
                                    </ResumePreview>
                                </CollapsibleContent>
                            )}
                        </Collapsible>
                    </div>
                </Grid>
            )}
        </PageContainer>
    )
}
