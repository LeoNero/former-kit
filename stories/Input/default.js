import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import IconMail from 'emblematic-icons/svg/Mail32.svg'

import Section from '../Section'
import Input from '../../src/Input'

class InputState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { email: 'pagarme@pagar.me' }
  }

  render () {
    const {
      error,
      icon,
      multiline,
      success,
      type,
    } = this.props

    const {
      email,
    } = this.state

    return (
      <Input
        error={error}
        hint="Secondary text"
        icon={icon}
        label="Your email"
        multiline={multiline}
        name="email"
        onChange={e => this.setState({ email: e.target.value })}
        placeholder="name@email.com"
        success={success}
        type={type}
        value={email}
      />
    )
  }
}

InputState.defaultProps = {
  error: '',
  icon: null,
  multiline: false,
  success: '',
  type: null,
}

storiesOf('Inputs', module)
  .add('Default', () => (
    <div>
      <Section title="Disabled">
        <Input
          name="email"
          label="Your email"
          disabled
          hint="Secondary text"
          placeholder="email@email.com"
          onChange={action('text changed')}
          value=""
        />
      </Section>

      <Section title="Disabled with text">
        <Input
          name="email"
          label="Your email"
          disabled
          hint="Secondary text"
          placeholder="email@email.com"
          onChange={action('text changed')}
          value="Disabled!"
        />
      </Section>

      <Section title="Default">
        <InputState type="text" />
      </Section>

      <Section title="Error">
        <InputState type="text" error="Wrong email" />
      </Section>

      <Section title="Success">
        <InputState type="text" success="Success" />
      </Section>

      <Section title="Multiline disabled">
        <Input
          name="multiline"
          label="Disabled"
          multiline
          placeholder="this is disabled"
          disabled
          onChange={action('text changed')}
          value=""
        />
      </Section>

      <Section title="Multiline default">
        <InputState multiline placeholder="default" />
      </Section>

      <Section title="Multiline error">
        <InputState multiline error="Error!" />
      </Section>

      <Section title="Multiline success">
        <InputState multiline success="Success!" />
      </Section>

      <Section title="Icon disabled">
        <Input
          name="name"
          label="Your name"
          placeholder="disabled"
          disabled
          icon={<IconMail width={16} height={16} />}
          onChange={action('text changed')}
          value=""
        />
      </Section>

      <Section title="Icon default">
        <InputState type="text" icon={<IconMail width={16} height={16} />} />
      </Section>

      <Section title="Icon error">
        <InputState type="text" error="Error!" icon={<IconMail width={16} height={16} />} />
      </Section>

      <Section title="Icon success">
        <InputState type="text" success="Success!" icon={<IconMail width={16} height={16} />} />
      </Section>

      <Section title="Icon multiline disabled">
        <Input
          name="multiline"
          label="Disabled"
          placeholder="this is disabled"
          multiline
          disabled
          icon={<IconMail width={16} height={16} />}
          onChange={action('text changed')}
          value=""
        />
      </Section>

      <Section title="Icon multiline default">
        <InputState multiline icon={<IconMail width={16} height={16} />} />
      </Section>

      <Section title="Icon multiline error">
        <InputState multiline error="Error!" icon={<IconMail width={16} height={16} />} />
      </Section>

      <Section title="Icon multiline success">
        <InputState multiline success="Success!" icon={<IconMail width={16} height={16} />} />
      </Section>

      <Section title="Password disabled">
        <Input
          type="password"
          name="pass"
          label="Your password"
          disabled
          placeholder="disabled"
          hint="must have more than 12 characters"
          onChange={action('text changed')}
          value=""
        />
      </Section>

      <Section title="Password default">
        <InputState type="password" />
      </Section>

      <Section title="Password error">
        <InputState type="password" error="must have more than 12 characters" />
      </Section>

      <Section title="Password success">
        <InputState type="password" success="Success" />
      </Section>
    </div>
  ))

