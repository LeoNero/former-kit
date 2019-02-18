import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import moment from 'moment'

import Button from '../../src/Button'
import Section from '../Section'
import DateSelector from '../../src/DateSelector'
import AsideState from './aside'

import presets from './presets'

class DateSelectorExample extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dates: props.dates,
      dateSelectorVisible: false,
      selectedPreset: props.selectedPreset,
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleDatesChange = this.handleDatesChange.bind(this)
    this.handlePresetChange = this.handlePresetChange.bind(this)
  }

  handleButtonClick () {
    this.setState({
      dateSelectorVisible: true,
    })
  }

  handleDatesChange (dates) {
    this.setState({
      dates,
    })

    action('onChange')(dates)
  }

  handlePresetChange (dates, preset) {
    this.setState({
      dates,
      selectedPreset: preset.key,
    })

    action('onPresetChange')({ dates, preset })
  }

  render () {
    return (
      <DateSelector
        dates={this.state.dates}
        onConfirm={dates => action('onConfirm')(dates)}
        onChange={this.handleDatesChange}
        onPresetChange={this.handlePresetChange}
        presets={presets}
        selectedPreset={this.state.selectedPreset}
        selectionMode={this.props.selectionMode}
        showCalendar={this.props.showCalendar}
        showSidebar={this.props.showSidebar}
        visible={this.state.dateSelectorVisible}
      >
        <Button onClick={this.handleButtonClick}>Button</Button>
      </DateSelector>
    )
  }
}

DateSelectorExample.propTypes = {
  dates: PropTypes.shape({
    start: PropTypes.instanceOf(moment),
    end: PropTypes.instanceOf(moment),
  }),
  selectedPreset: PropTypes.string,
  showCalendar: PropTypes.bool,
  showSidebar: PropTypes.bool,
}

DateSelectorExample.defaultProps = {
  dates: {},
  selectedPreset: '',
  showCalendar: true,
  showSidebar: true,
}

storiesOf('DateSelector', module)
  .add('Without sidebar', () => (
    <Section>
      <DateSelectorExample
        showSidebar={false}
      />
    </Section>
  ))
  .add('Without sidebar and pre selected date', () => (
    <Section>
      <DateSelectorExample
        dates={{
          start: moment(),
          end: moment(),
        }}
        showSidebar={false}
      />
    </Section>
  ))
  .add('Without sidebar and period mode', () => (
    <Section>
      <DateSelectorExample
        selectionMode="period"
        showSidebar={false}
      />
    </Section>
  ))
  .add('Without sidebar and pre selected period', () => (
    <Section>
      <DateSelectorExample
        dates={{
          start: moment().subtract(2, 'days'),
          end: moment(),
        }}
        selectionMode="period"
        showSidebar={false}
      />
    </Section>
  ))
  .add('With sidebar', () => (
    <Section>
      <DateSelectorExample />
    </Section>
  ))
  .add('With sidebar and selected preset', () => (
    <Section>
      <DateSelectorExample
        selectedPreset="last-7"
      />
    </Section>
  ))
  .add('With sidebar only', () => (
    <Section>
      <DateSelectorExample showCalendar={false} />
    </Section>
  ))
  .add('With sidebar only and selected preset', () => (
    <Section>
      <DateSelectorExample
        selectedPreset="last-7"
        showCalendar={false}
      />
    </Section>
  ))
  .add('Aside', () => (
    <Section>
      <AsideState />
    </Section>
  ))
  .add('Aside with initial selected preset', () => (
    <Section>
      <AsideState selectedPreset="last-7" />
    </Section>
  ))
