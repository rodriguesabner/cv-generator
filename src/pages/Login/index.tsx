import styled from 'styled-components'
import { Sparkles } from 'lucide-react'

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  padding: 0 1rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
`

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 1rem;
`

const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
`

const LoginContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PoweredByAI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
`

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
`

const Button = styled.button`
  padding: 0.5rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #5558e3;
  }
`

const TextCenter = styled.div`
  text-align: center;
  font-size: 0.875rem;
`

const Link = styled.a`
  color: inherit;
  text-decoration: underline;
`

export default function LoginPage() {
    return (
        <PageContainer>
            <Main>
                <LoginContainer>
                    <PoweredByAI>
                        <Sparkles size={16} />
                        <span>Powered by AI</span>
                    </PoweredByAI>
                    <Title>Welcome back</Title>
                    <Subtitle>Enter your credentials to access your account</Subtitle>
                    <Form>
                        <InputGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </InputGroup>
                        <Button type="submit">Sign in</Button>
                    </Form>
                    <TextCenter>
                        Don't have an account? <Link href="#">Sign up</Link>
                    </TextCenter>
                    <TextCenter>
                        <Link href="#">Forgot your password?</Link>
                    </TextCenter>
                </LoginContainer>
            </Main>
        </PageContainer>
    )
}
