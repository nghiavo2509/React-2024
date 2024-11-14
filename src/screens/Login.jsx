
import { Block, Button, Input, Text } from '../components'

const Login = () => {
  return (
    <Block>
      <Text>Login screen</Text>
      <Text>E-mail address</Text>
      <Input placeholder="your@email.com" />
      <Text>Password</Text>
      <Input secureTextEntry placeholder="Your password" />
      <Button>
        <Text>Log in</Text>
      </Button>
    </Block>
  )
}

export default Login